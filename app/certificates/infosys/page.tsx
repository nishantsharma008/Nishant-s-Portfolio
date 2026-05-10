"use client";

import Image from "next/image";
import { FaHeart, FaCertificate, FaExternalLinkAlt, FaAward, FaTimes, FaExpand } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InfosysPythonPage() {
  const router = useRouter();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <main className="bg-[#0B0F1A] text-white min-h-screen relative overflow-x-hidden font-sans">
      
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#0B0F1A] via-[#0f172a] to-[#1a103c]" />
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-15 bg-violet-600/40 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 bg-purple-600/30 blur-3xl" />
      </div>

      {/* ✨ NAVBAR - SAME STYLE AS CV PAGE! */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0F1A]/80 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20">
        <div className="w-full px-3 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* NS Logo */}
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text select-none cursor-pointer hover:scale-105 transition-transform duration-300">
              NS
            </span>
            
            {/* Divider */}
            <div className="h-5 w-px bg-white/20 hidden sm:block"></div>
            
            {/* Back Button */}
            <button 
              onClick={() => router.push('/#certificates')}
              className="group/btn flex items-center gap-1.5 sm:gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-200 text-xs sm:text-sm font-medium hover:-translate-x-1"
            >
              <svg 
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:-translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Back to Certificates</span>
              <span className="sm:hidden">Back to Certificates </span>
            </button>
          </div>
          
          {/* Credential Details Button */}
          <button 
            className="
              group relative px-4 py-2 sm:px-6 sm:py-2.5
              bg-gradient-to-br from-blue-600/25 to-cyan-600/15
              backdrop-blur-sm
              border border-blue-500/40 
              rounded-xl sm:rounded-2xl
              text-xs sm:text-sm font-semibold text-blue-200
              hover:text-white 
              hover:border-blue-400/70
              hover:shadow-[0_0_25px_rgba(59,130,246,0.5),inset_0_0_20px_rgba(59,130,246,0.1)]
              hover:bg-gradient-to-br hover:from-blue-600/35 hover:to-cyan-600/25
              active:scale-95 active:shadow-[0_0_15px_rgba(59,130,246,0.7)]
              transition-all duration-300 ease-out
              flex items-center gap-2
              overflow-hidden
            "
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></span>
            <span className="absolute inset-0 rounded-xl sm:rounded-2xl bg-blue-500/0 group-hover:bg-blue-500/10 blur-xl transition-all duration-500"></span>
            
            <svg 
              className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:animate-pulse drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            
            <span className="relative z-10 hidden xs:inline tracking-wide">Credential Details</span>
            <span className="relative z-10 xs:hidden"> Credentials Details</span>
            
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-400/0 group-hover:border-blue-400/80 rounded-tl-lg transition-all duration-300"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-400/0 group-hover:border-blue-400/80 rounded-br-lg transition-all delay-100 duration-300"></span>
          </button>
          
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <section className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 mb-6">
          <FaAward className="text-violet-300 text-base animate-pulse" />
          <span className="text-violet-300 text-sm font-medium tracking-wider uppercase">Verified Credential</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Infosys Course Completion Certificate In Backend Python
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Issued by: <strong className="text-white">Infosys</strong>
          </span>
          <span>|</span>
          <span>Date: <strong className="text-white">April 2026</strong></span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl">
          Successfully completed comprehensive backend development course focusing on Python programming, API development, database management, and server-side architecture.
        </p>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          
          {/* ✅ CERTIFICATE IMAGE CARD - CLICKABLE! */}
          <div className="relative group order-2 lg:order-1 lg:col-span-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 md:p-6 shadow-2xl">
              
              {/* ✅ CLICKABLE Image Container - Opens Full Screen! */}
              <div 
                className="relative w-full aspect-[1.26/1] rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-violet-500/50 transition-all cursor-pointer hover:scale-[1.02] bg-white"
                onClick={() => setIsImageModalOpen(true)}
              >
                <Image
                  src="/image.png"
                  alt="Infosys Python Course Completion Certificate - Nishant Sharma"
                  fill
                  className="object-contain p-2 sm:p-3 md:p-4"
                  priority
                  quality={95}
                />
                
                {/* Hover Overlay - Shows "Click to Expand" */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="flex flex-col items-center gap-2 text-white">
                    <FaExpand className="text-3xl animate-bounce" />
                    <span className="text-sm font-semibold">Click to View Full Size</span>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-xs text-gray-500 mt-4 italic cursor-pointer hover:text-violet-400 transition-colors" onClick={() => setIsImageModalOpen(true)}>
                👆 Click image to view full size
              </p>
            </div>
          </div>

          {/* Details Card */}
          <div className="space-y-6 order-1 lg:order-2">
            
            {/* Skills Tags */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-violet-300 mb-4">Skills Validated</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-lg text-sm text-violet-200">Python</span>
                <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-lg text-sm text-violet-200">Backend</span>
                <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-lg text-sm text-violet-200">APIs</span>
                <span className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-lg text-sm text-violet-200">Database</span>
              </div>
            </div>

            {/* Verification Info */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-300 mb-4">Verification Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Credential ID</span>
                  <span className="text-white font-mono">INFOSYS-PYTHON-2026</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Status</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Verified
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Issue Date</span>
                  <span className="text-white">March 31, 2026</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 w-full">
              
              {/* Verify Online Button */}
              <a
                href="https://infyspringboard.onwingspan.com/web/en/login"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative w-full inline-flex items-center justify-center gap-2.5 
                  bg-gradient-to-r from-violet-600 to-indigo-600 
                  px-8 py-3.5 rounded-xl text-white font-bold 
                  overflow-hidden transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50 
                  active:scale-95
                  text-sm
                "
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></span>
                
                <span className="absolute inset-0 bg-violet-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></span>
                
                <FaExternalLinkAlt className="relative z-10 text-base group-hover:animate-bounce" />
                <span className="relative z-10">Verify Online</span>
              </a>

              {/* Questions? Contact Me Button */}
              <Link 
                href="/#contact"
                className="
                  w-full px-8 py-3.5 rounded-xl 
                  border-2 border-white/25 
                  text-white font-bold hover:bg-white/10 
                  hover:border-white/40 hover:shadow-lg
                  transition-all duration-300 
                  text-center text-sm
                  flex items-center justify-center gap-2
                "
              >
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Questions? Contact Me
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* ✅ FULL SCREEN IMAGE MODAL / LIGHTBOX! */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-[fadeIn_0.3s_ease-out_forwards]"
          onClick={() => setIsImageModalOpen(false)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:rotate-90 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              setIsImageModalOpen(false);
            }}
          >
            <FaTimes className="text-2xl" />
          </button>

          {/* Download Hint */}
          <div className="absolute top-4 left-4 z-[110] px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
            💡 Click anywhere to close • Scroll to zoom
          </div>

          {/* Image Container */}
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full animate-[scaleIn_0.3s_ease-out_forwards]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-indigo-500/30 rounded-3xl blur-2xl opacity-75"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh]">
              <Image
                src="/image.png"
                alt="Infosys Python Course Completion Certificate - Nishant Sharma (Full Size)"
                width={1200}
                height={900}
                className="object-contain w-full h-auto max-h-[85vh]"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      )}

      {/* ✅ FOOTER - Only subtle border, NO big divider line! */}
      <footer className="relative z-16 border-t border-white/10 pt-8 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center">
            <p className="text-sm text-slate-400">
              &copy; 2026 Nishant Sharma. All Rights Reserved <FaHeart className="ml-1 inline text-red-500 animate-pulse" />
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}