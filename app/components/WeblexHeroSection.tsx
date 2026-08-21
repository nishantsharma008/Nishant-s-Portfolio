'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import VideoBackground from './VideoBackground';
import ParticleField from './ParticleField';

interface WeblexHeroSectionProps {
  videoSrc?: string;
}

const WeblexHeroSection: React.FC<WeblexHeroSectionProps> = ({ 
  videoSrc = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260221_085953_8463b46e-ba85-4bb7-912a-1feaf346e970.mp4'
}) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <VideoBackground videoSrc={videoSrc} />

      {/* 3D Particles */}
      <ParticleField />

      {/* Content - Bottom Aligned */}
      <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 z-10 max-w-[603px] w-[90%] mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-block px-5 py-2 border border-border rounded-full text-[13px] text-muted-foreground mb-7 font-medium tracking-wide">
          Introducing Smart Website Builder
        </div>

        {/* Heading */}
        <h1 className="text-[62px] md:text-[48px] sm:text-[36px] font-medium leading-[1.1] tracking-tight mb-6">
          Turn your big idea into a stunning website
        </h1>

        {/* Paragraph */}
        <p className="text-muted-foreground text-base leading-relaxed max-w-[520px] mx-auto mb-9">
          Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking services.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <button className="group bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:brightness-110 hover:shadow-[0_8px_30px_rgba(199,243,0,0.3)] hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3">
            <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            Get Started Now
          </button>

          <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] transition-all duration-200">
            See Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeblexHeroSection;