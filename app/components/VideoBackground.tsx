'use client';

import React, { useRef, useEffect, useCallback } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSrc, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameId = useRef<number | null>(null);

  const updateVideoOpacity = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) {
      animationFrameId.current = requestAnimationFrame(updateVideoOpacity);
      return;
    }

    const currentTime = video.currentTime;
    const duration = video.duration;
    
    // Fade out starts 1.5s before end
    const fadeOutStart = duration - 1.5;
    // Reach opacity 0 by 0.3s before end
    const fadeOutEnd = duration - 0.3;
    // Fade in over first 1 second
    const fadeInDuration = 1.0;

    let opacity = 1;

    if (currentTime >= fadeOutStart && currentTime <= fadeOutEnd) {
      const progress = (currentTime - fadeOutStart) / (fadeOutEnd - fadeOutStart);
      opacity = 1 - progress;
    } else if (currentTime > fadeOutEnd) {
      opacity = 0;
    } else if (currentTime <= fadeInDuration && currentTime < fadeOutStart) {
      opacity = currentTime / fadeInDuration;
    } else if (currentTime < 0.1) {
      opacity = currentTime / 0.1;
    }

    video.style.opacity = Math.max(0, Math.min(1, opacity)).toString();
    animationFrameId.current = requestAnimationFrame(updateVideoOpacity);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      animationFrameId.current = requestAnimationFrame(updateVideoOpacity);
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [updateVideoOpacity]);

  return (
    <video
      ref={videoRef}
      className={`absolute top-0 left-0 w-full h-full object-cover ${className}`}
      autoPlay
      loop
      muted
      playsInline
      src={videoSrc}
    />
  );
};

export default VideoBackground;