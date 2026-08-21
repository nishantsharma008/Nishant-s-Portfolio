'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Particles: React.FC<{ count: number }> = ({ count }) => {
  const ref = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, [count]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.getElapsedTime();
    
    ref.current.rotation.y = time * 0.05;
    ref.current.rotation.x = time * 0.03;

    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      mouse.current.x * 0.5,
      0.05
    );
    ref.current.position.y = THREE.MathUtils.lerp(
      ref.current.position.y,
      mouse.current.y * 0.5,
      0.05
    );
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#c7f300"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const FloatingShape: React.FC<{
  position: [number, number, number];
  geometry: string;
  scale?: number;
}> = ({ position, geometry, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.007;
    meshRef.current.position.y = position[1] + Math.sin(time) * 0.002;
    meshRef.current.position.x += (mouse.current.x * 0.1 - meshRef.current.position.x + position[0]) * 0.02;
  });

  const getGeometry = () => {
    switch (geometry) {
      case 'octahedron':
        return <octahedronGeometry args={[0.3 * scale]} />;
      case 'tetrahedron':
        return <tetrahedronGeometry args={[0.25 * scale]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[0.2 * scale]} />;
      default:
        return <octahedronGeometry args={[0.3 * scale]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshBasicMaterial color="#c7f300" wireframe transparent opacity={0.15} />
    </mesh>
  );
};

const ParticleField: React.FC = () => {
  const shapes = useMemo(() => [
    { position: [-3, 2, -2] as [number, number, number], geometry: 'octahedron' as const, scale: 1 },
    { position: [3, -1, -3] as [number, number, number], geometry: 'tetrahedron' as const, scale: 0.9 },
    { position: [-2, -2, -1] as [number, number, number], geometry: 'icosahedron' as const, scale: 1.1 },
    { position: [2, 3, -2] as [number, number, number], geometry: 'octahedron' as const, scale: 0.8 },
    { position: [0, 0, -4] as [number, number, number], geometry: 'tetrahedron' as const, scale: 1.2 },
    { position: [-4, 0, -3] as [number, number, number], geometry: 'icosahedron' as const, scale: 0.85 },
  ], []);

  return (
    <Canvas
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      camera={{ position: [0, 0, 5], fov: 75 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.1} />
      <Particles count={800} />
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </Canvas>
  );
};

export default ParticleField;