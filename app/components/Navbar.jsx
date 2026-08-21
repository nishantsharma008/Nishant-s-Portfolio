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
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Track scroll for optional blur effect
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅✅✅ YOUR EXISTING FUNCTION - KEPT INTACT! ✅✅✅
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#030712]/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center px-6 md:px-12 lg:px-16 py-5 text-white">
        
        {/* ✅ UPDATED: Weblex Brand with Green Dot */}
        <button 
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-white hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-1"
        >
          Weblex.
          <span className="w-2 h-2 bg-[#c7f300] rounded-full animate-pulse-dot inline-block" />
        </button>

        {/* ✅ Desktop Nav - Updated Hover Colors to Green */}
        <div className="space-x-6 lg:space-x-8 text-sm hidden lg:flex items-center">
          
          <button onClick={() => scrollToSection("home")} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Home</button>
          
          <button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-white transition-colors cursor-pointer">About</button>
          
          <button onClick={() => scrollToSection("skills")} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Skills</button>
          
          <button onClick={() => scrollToSection("projects")} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Projects</button>
          
          <button onClick={() => scrollToSection("experience")} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Experience</button>
          
          <button onClick={() => scrollToSection("certificates")} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Certificates</button>
          
          <button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</button>
          
        </div>

        {/* ✅ UPDATED: Let's Talk Button - Lime Green Style */}
        <button 
          onClick={() => scrollToSection("contact")}
          className="hidden lg:block bg-[#c7f300] text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 hover:shadow-[0_8px_24px_rgba(199,243,0,0.25)] hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          Let&apos;s Talk
        </button>

        {/* ✅ Mobile Menu Button - Updated Styling */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-11 h-11 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
        >
          {isMobileMenuOpen ? (
            <HiX className="text-white text-xl" />
          ) : (
            <HiMenuAlt3 className="text-white text-xl" />
          )}
        </button>
      </div>

      {/* ✅ Mobile Menu - Updated with Green Accents & Animation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-6 pb-5 animate-slideDown">
          <div className="flex flex-col gap-2 bg-[#030712]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4">
            
            <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 text-gray-200 hover:text-[#c7f300] hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium cursor-pointer">
              <HiHome className="text-xl text-green-400" />
              <span>Home</span>
            </button>
            
            <button onClick={() => scrollToSection("about")} className="flex items-center gap-3 text-gray-200 hover:text-[#c7f300] hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium cursor-pointer">
              <HiUser className="text-xl text-blue-400" />
              <span>About</span>
            </button>
            
            <button onClick={() => scrollToSection("skills")} className="flex items-center gap-3 text-gray-200 hover:text-[#c7f300] hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium cursor-pointer">
              <HiLightBulb className="text-xl text-yellow-400" />
              <span>Skills</span>
            </button>
            
            <button onClick={() => scrollToSection("projects")} className="flex items-center gap-3 text-gray-200 hover:text-[#c7f300] hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium cursor-pointer">
              <HiSparkles className="text-xl text-orange-400" />
              <span>Projects</span>
            </button>
            
            <button onClick={() => scrollToSection("experience")} className="flex items-center gap-3 text-gray-200 hover:text-[#c7f300] hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium cursor-pointer">
              <HiBriefcase className="text-xl text-purple-400" />
              <span>Experience</span>
            </button>
            
            <button onClick={() => scrollToSection("certificates")} className="flex items-center gap-3 text-gray-200 hover:text-[#c7f300] hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium cursor-pointer">
              <HiAcademicCap className="text-xl text-pink-400" />
              <span>Certificates</span>
            </button>
            
            <button onClick={() => scrollToSection("contact")} className="flex items-center gap-3 text-gray-200 hover:text-[#c7f300] hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium cursor-pointer">
              <FaEnvelope className="text-xl text-red-400" />
              <span>Contact</span>
            </button>

            {/* ✅ CTA Button in Mobile Menu - Lime Green */}
            <button onClick={() => scrollToSection("contact")} className="mt-2 bg-[#c7f300] text-black px-5 py-3 rounded-full text-sm font-semibold hover:brightness-110 transition-transform w-full cursor-pointer shadow-[0_4px_20px_rgba(199,243,0,0.2)]">
              Let&apos;s Talk
            </button>
            
          </div>
        </div>
      )}

      {/* ✅ Animation Styles */}
      <style jsx>{`
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        @keyframes pulse-dot {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.7; 
            transform: scale(1.2); 
          }
        }
        .animate-pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
}