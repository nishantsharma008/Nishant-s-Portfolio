import { useState } from "react";
import { 
  HiMenuAlt3, 
  HiX, 
  HiHome, 
  HiUser, 
  HiLightBulb,
  HiSparkles,
  HiBriefcase, 
  HiAcademicCap
} from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅✅✅ THIS FUNCTION MAKES IT WORK! ✅✅✅
  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F1A]/90 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-between items-center px-6 md:px-10 py-5 text-white">
        
        {/* ✅ Logo - BUTTON not h1 */}
        <button 
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity cursor-pointer"
        >
          NS
        </button>

        {/* ✅ Desktop Nav - BUTTONS not Links */}
        <div className="space-x-6 md:space-x-8 text-sm hidden md:flex items-center">
          
          <button onClick={() => scrollToSection("home")} className="hover:text-purple-400 transition-colors cursor-pointer">Home</button>
          
          <button onClick={() => scrollToSection("about")} className="hover:text-purple-400 transition-colors cursor-pointer">About</button>
          
          <button onClick={() => scrollToSection("skills")} className="hover:text-purple-400 transition-colors cursor-pointer">Skills</button>
          
          <button onClick={() => scrollToSection("projects")} className="hover:text-purple-400 transition-colors cursor-pointer">Projects</button>
          
          <button onClick={() => scrollToSection("experience")} className="hover:text-purple-400 transition-colors cursor-pointer">Experience</button>
          
          <button onClick={() => scrollToSection("certificates")} className="hover:text-purple-400 transition-colors cursor-pointer">Certificates</button>
          
          <button onClick={() => scrollToSection("contact")} className="hover:text-purple-400 transition-colors cursor-pointer">Contact</button>
          
        </div>

        {/* ✅ Let's Talk Button */}
        <button 
          onClick={() => scrollToSection("contact")}
          className="hidden md:block bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/20 cursor-pointer"
        >
          Let&apos;s Talk
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-11 h-11 bg-[#1a1f2e] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-blue-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          {isMobileMenuOpen ? (
            <HiX className="text-blue-400 text-xl" />
          ) : (
            <HiMenuAlt3 className="text-blue-400 text-xl" />
          )}
        </button>
      </div>

      {/* ✅ Mobile Menu - All buttons */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-5 border-t border-white/10 pt-4 animate-slideDown">
          <div className="flex flex-col gap-2">
            
            <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 text-gray-200 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium cursor-pointer">
              <HiHome className="text-xl text-green-400" />
              <span>Home</span>
            </button>
            
            <button onClick={() => scrollToSection("about")} className="flex items-center gap-3 text-gray-200 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium cursor-pointer">
              <HiUser className="text-xl text-blue-400" />
              <span>About</span>
            </button>
            
            <button onClick={() => scrollToSection("skills")} className="flex items-center gap-3 text-gray-200 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium cursor-pointer">
              <HiLightBulb className="text-xl text-yellow-400" />
              <span>Skills</span>
            </button>
            
            <button onClick={() => scrollToSection("projects")} className="flex items-center gap-3 text-gray-200 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium cursor-pointer">
              <HiSparkles className="text-xl text-orange-400" />
              <span>Projects</span>
            </button>
            
            <button onClick={() => scrollToSection("experience")} className="flex items-center gap-3 text-gray-200 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium cursor-pointer">
              <HiBriefcase className="text-xl text-purple-400" />
              <span>Experience</span>
            </button>
            
            <button onClick={() => scrollToSection("certificates")} className="flex items-center gap-3 text-gray-200 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium cursor-pointer">
              <HiAcademicCap className="text-xl text-pink-400" />
              <span>Certificates</span>
            </button>
            
            <button onClick={() => scrollToSection("contact")} className="flex items-center gap-3 text-gray-200 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium cursor-pointer">
              <FaEnvelope className="text-xl text-red-400" />
              <span>Contact</span>
            </button>

            <button onClick={() => scrollToSection("contact")} className="mt-2 bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 rounded-xl text-sm font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/20 w-full cursor-pointer">
              Let&apos;s Talk
            </button>
            
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}