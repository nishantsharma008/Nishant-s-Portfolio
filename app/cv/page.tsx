"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaDownload, FaArrowLeft, FaHeart, FaFileAlt } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CVPage() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = (_event: Event) => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-[#0B0F1A] text-white min-h-screen relative overflow-x-hidden font-sans">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A]/60 via-[#0f172a]/50 to-[#1e293b]/60 z-10"></div>
        
        <div 
          className="absolute inset-0 z-0 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        >
          <Image
            src="/Screenshot 2026-05-10 162537.png"
            alt="Background"
            fill
            className="object-cover opacity-70 scale-105"
            priority
          />
        </div>

        <div 
          className="absolute inset-0 z-0 transition-transform duration-1500 ease-out mix-blend-overlay"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px) scale(1.08)`,
          }}
        >
          <Image
            src="/Screenshot 2026-05-10 162537.png"
            alt="Background Layer 2"
            fill
            className="object-cover opacity-40 blur-sm"
          />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-96 h-96 rounded-2xl opacity-35 animate-float-1 transition-transform duration-1000"
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              top: "10%",
              left: "-5%",
            }}
          >
            <Image
              src="/Screenshot 2026-05-10 162537.png"
              alt=""
              fill
              className="object-cover rounded-2xl rotate-12"
            />
          </div>

          <div 
            className="absolute w-72 h-72 rounded-2xl opacity-30 animate-float-2 transition-transform duration-1200"
            style={{
              transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
              bottom: "10%",
              right: "-3%",
            }}
          >
            <Image
              src="/Screenshot 2026-05-10 162537.png"
              alt=""
              fill
              className="object-cover rounded-2xl -rotate-6"
            />
          </div>

          <div 
            className="absolute w-48 h-48 rounded-xl opacity-25 animate-float-3 transition-transform duration-800"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              top: "50%",
              right: "10%",
            }}
          >
            <Image
              src="/Screenshot 2026-05-10 162537.png"
              alt=""
              fill
              className="object-cover rounded-xl rotate-45"
            />
          </div>
        </div>

        <div 
          className="fixed w-[500px] h-[500px] rounded-full opacity-30 blur-3xl pointer-events-none z-5 transition-all duration-300"
          style={{ 
            background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
        />

        <div 
          className="absolute inset-0 opacity-[0.04] z-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-[#0B0F1A]/80 z-10"
          style={{
            opacity: Math.min(scrollY / 500, 0.8),
          }}
        />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0F1A]/80 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20">
        <div className="w-full px-3 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-2 sm:gap-4">
            
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text select-none cursor-pointer hover:scale-105 transition-transform duration-300">
              NS
            </span>
            
            <div className="h-5 w-px bg-white/20 hidden sm:block"></div>
            
            <button 
              onClick={() => router.back()}
              className="group/btn flex items-center gap-1.5 sm:gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-200 text-xs sm:text-sm font-medium hover:-translate-x-1"
            >
              <FaArrowLeft className="group-hover/btn:-translate-x-1 transition-transform duration-200" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back to Home </span>
            </button>
          </div>
          
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
            
            <FaFileAlt className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:animate-pulse drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]" />
            <span className="relative z-10 hidden xs:inline tracking-wide">My Resume</span>
            <span className="relative z-10 xs:hidden">Resume</span>
            
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-400/0 group-hover:border-blue-400/80 rounded-tl-lg transition-all duration-300"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-400/0 group-hover:border-blue-400/80 rounded-br-lg transition-all delay-100 duration-300"></span>
          </button>
          
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <section className="relative max-w-4xl mx-auto px-6 pt-32 pb-20 z-20">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">CV</span>
          </h1>
          
          <p className="text-gray-300 text-base max-w-md mx-auto leading-relaxed">
            A comprehensive overview of my skills, experience & professional achievements
          </p>
          
          <div className="mt-6 flex justify-center">
            <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-blue-500/0 rounded-full"></div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl overflow-hidden">
            
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
              <div>
                <h2 className="text-xl font-bold text-white">Nishant Sharma</h2>
                <p className="text-gray-400 text-sm mt-0.5">Full Stack Developer</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-emerald-400 text-xs font-medium">Updated 2026</span>
              </div>
            </div>

            {/* CV Preview Image */}
            <div className="relative w-full aspect-[8.5/11] max-w-xl mx-auto mb-6 rounded-xl overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-300 bg-white">
              <Image
                src="/cv.jpeg"
                alt="Nishant Sharma CV"
                fill
                className="object-contain p-2 sm:p-3"
                priority
                quality={95}
              />
              
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Download Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              
              <a
                href="/cv.jpeg"
                download="Nishant_Sharma_CV.jpeg"
                className="
                  group relative inline-flex items-center justify-center gap-2.5 
                  bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 
                  px-8 py-3.5 rounded-xl text-white font-bold 
                  overflow-hidden transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 
                  active:scale-95
                  w-full sm:w-auto text-sm
                "
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></span>
                
                <span className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></span>
                
                <span className="relative z-10 flex items-center gap-2">
                  <FaDownload className="text-lg group-hover:animate-bounce" />
                  <span>Download My CV</span>
                </span>
              </a>

              <Link 
                href="/#contact"
                className="
                  px-6 py-3.5 rounded-xl border-2 border-white/25 
                  text-white font-semibold hover:bg-white/10 
                  hover:border-white/40 hover:shadow-lg
                  transition-all duration-300 
                  w-full sm:w-auto text-center text-sm
                  flex items-center justify-center gap-2
                "
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </Link>
            </div>

            <p className="text-center text-gray-500 text-xs mt-4 flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              High-resolution CV ready for download
            </p>

            <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-white/10">
              <div className="text-center p-3 rounded-lg bg-white/5">
                <p className="text-2xl font-bold text-cyan-400 mb-0.5">2+</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5">
                <p className="text-2xl font-bold text-blue-400 mb-0.5">3+</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Projects</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5">
                <p className="text-2xl font-bold text-purple-400 mb-0.5">MERN</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Stack</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative z-30 pt-8 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px w-full bg-white/10 mb-8"></div>
          
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