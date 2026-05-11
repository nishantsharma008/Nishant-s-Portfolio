"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

// 👇 ADD AOS IMPORTS HERE
import AOS from 'aos';
import 'aos/dist/aos.css';

// Icon imports (keep all your existing ones)
import { FaLinkedin, FaGithub, FaInstagram, FaUsers, FaDownload, FaGraduationCap, FaLaptopCode, FaLightbulb, FaRocket, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava, FaExternalLinkAlt, FaStar, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHeart, FaPaperPlane } from "react-icons/fa";
import { SiInfosys, SiNextdotjs, SiTypescript, SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";
import { HiOutlineRocketLaunch, HiOutlineCodeBracket, HiOutlineGlobeAlt, HiOutlineAcademicCap } from "react-icons/hi2";
import { MdWorkOutline } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { useEffect, useRef } from "react"; // ✅ Already correct

export default function Home() {
  const router = useRouter();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    // ✅ No more red errors here!
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    // ✅ No more red errors here!
    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach(section => {
      observerRef.current?.observe(section);  // Optional chaining for safety
    });                                                                                                                                                                                                                                                        // Cleanup on unmount
    return () => {
      if (observerRef.current) {  // ✅ No more red errors here!
        observerRef.current.disconnect();
      }
    };
  }, []);

  // ==================== AOS INITIALIZATION USEEFFECT ====================
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 120,
      });
    }
  }, []);

  // ==================== HELPER FUNCTIONS ====================
  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // ==================== DATA ARRAYS ====================
  const projects = [
    {
      title: "Smart AI Career Advisor",
      description: "A powered Platform that suggest career path based on skills and interest",
      image: "https://z-cdn-media.chatglm.cn/files/d058ecae-5b5e-4c20-b144-e1f2c4d9246a.png?auth_key=1878085922-0480a379e0264b71b049cd16268c13ef-0-f69a7dc7c67f47874ac65fae33d99934",
      tags: ["Node.js", "AI", "SQL"],
      link: "https://Smart-Career-Automation.vercel.app",
      category: "Web Apps"
    }
  ];

  const experienceCards = [
    {
      year: "2025 - Present",
      title: "MERN Stack Developer [Freelance]",
      description: "Building modern web applications for clients using React, Node.js, Express.js, and MySQL.",
      tags: ["React", "Node.js", "MySQL", "Tailwind CSS"],
      icon: <HiOutlineRocketLaunch className="text-cyan-300 text-xl" />,
      glow: "from-cyan-500/30 via-blue-500/10 to-transparent",
      border: "border-cyan-500/30",
      badge: "text-cyan-300",
    },
    {
      year: "2023 - 2025",
      title: "Backend Developer Interns",
      description: "Built APIs, managed databases, and implemented authentication systems.",
      tags: ["Node.js", "MySQL", "APIs"],
      icon: <MdWorkOutline className="text-blue-300 text-xl" />,
      glow: "from-blue-500/30 via-indigo-500/10 to-transparent",
      border: "border-blue-500/30",
      badge: "text-blue-300",
    },
    {
      year: "2022 - 2023",
      title: "Frontend Developer Interns",
      description: "Built responsive websites, managed design, and implemented interactivity.",
      tags: ["CSS", "Tailwind", "Bootstrap", "JavaScript"],
      icon: <HiOutlineGlobeAlt className="text-fuchsia-300 text-xl" />,
      glow: "from-fuchsia-500/30 via-purple-500/10 to-transparent",
      border: "border-fuchsia-500/30",
      badge: "text-fuchsia-300",
    },
    {
      year: "2021 - 2022",
      title: "Started Coding Journey",
      description: "Began with C and HTML, CSS, and built small projects.",
      tags: ["C", "HTML", "CSS Framework"],
      icon: <HiOutlineCodeBracket className="text-emerald-300 text-xl" />,
      glow: "from-emerald-500/30 via-cyan-500/10 to-transparent",
      border: "border-emerald-500/30",
      badge: "text-emerald-300",
    },
  ];

  const certificates = [
    {
      title: "Infoysis Course Completion Certificate In Backend Python",
      issuer: "Infoysis",
      date: "April 2026",
      badge: "",
      icon: <SiInfosys className="text-blue-500 text-2xl" />,
      accent: "from-white to-blue-50",
      iconBg: "bg-white",
      iconText: "text-blue-500",
      route: "/certificates/infosys",
    },
    {
      title: "ICISFT Rayat Bahra Research Paper 2026",
      issuer: "ICISFT",
      date: "March 2026",
      badge: "",
      icon: <span className="text-[9px] font-black tracking-tight text-cyan-200">ICISFT</span>,
      accent: "from-cyan-950 to-[#071b2f]",
      iconBg: "bg-cyan-950/80",
      iconText: "text-cyan-200",
      route: "/certificates/ICISFT",
    },
    {
      title: "Completion of my Intern In Full Stack Development Certificated",
      issuer: "Full Stack Development",
      date: "2024",
      badge: "",
      icon: <FaReact className="text-fuchsia-300 text-2xl" />,
      accent: "from-fuchsia-950 to-[#240b2d]",
      iconBg: "bg-fuchsia-950/80",
      iconText: "text-fuchsia-300",
      route: "/certificates/interfullstack"
    },
    {
      title: "Certificate of Completion of Employability Skills - JobReady",
      issuer: "Wadhwani Foundation",
      route: "/certificates/JobReady",
      date: "2025",
      badge: "",
      logoSrc: "/wadhwani-foundation-logo.png",
      icon: null,
      accent: "from-white to-sky-50",
      iconBg: "bg-white",
      iconText: "text-sky-600",
    },
  ];

  const activeFilter = "All";
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const handleEmailRedirect = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  const yourEmail = 'Mrmindgamer40@gmail.com';

  const emailBody = `
👤 Name: ${name}

📧 Email: ${email}

📝 Message:
 ${message}

---
✨ Sent from Nishant Sharma's Portfolio Website
  `.trim();

  // ✅ FIXED: Extract to variable first
  const subjectText = subject || `Portfolio Contact from ${name}`;
  const encodedSubject = encodeURIComponent(subjectText);
  const encodedBody = encodeURIComponent(emailBody);

  window.location.href = `mailto:${yourEmail}?subject=${encodedSubject}&body=${encodedBody}`;
};

  // ==================== RETURN JSX ====================
  return (
    <main className="bg-[#0B0F1A] text-white min-h-screen relative overflow-x-hidden font-sans">


      {/* DYNAMIC GLOSSY BACKGROUND */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center animate-subtle-zoom"
        style={{
          backgroundImage: `url('https://z-cdn-media.chatglm.cn/files/efe27950-d0ff-48a6-b89e-997c8288454a.png?auth_key=1877922658-4703b05402a546e28ecedd4c814e59fe-0-9a4522c2e7af51becf258a0ffcb315a7')`,
          filter: 'brightness(0.9) contrast(1.1)'
        }}
      />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/2 -left-1/2 w-[800px] h-[800px] rounded-full opacity-20 animate-light-leak-1"
          style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-[800px] h-[800px] rounded-full opacity-20 animate-light-leak-2"
          style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 left-1/2 w-[600px] h-[600px] rounded-full opacity-10 animate-light-leak-3"
          style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 60%)' }}
        />
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,15,26,0.5)_100%)]" />

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#0B0F1A]/30 backdrop-blur-2xl border-b border-white/5 animate-fade-in-down">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <section className="relative grid md:grid-cols-2 items-start md:items-center max-w-6xl mx-auto px-6 pt-12 sm:pt-16 md:pt-20 pb-12 gap-8 md:gap-12 min-h-screen z-10">

        {/* ✅ BADGE MOVED TO TOP-RIGHT - Absolute positioned */}
        <div
          className="absolute top-24 sm:top-28 md:top-28 right-4 sm:right-6 lg:-right-40 z-10 fade-in-up-element"
          style={{ animationDelay: '100ms' }}
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 shadow-lg">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-green-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-gray-200 whitespace-nowrap">Available to Learn</span>
          </div>
        </div>

        <div className="max-w-xl flex flex-col justify-center md:justify-center pt-16 sm:pt-20 md:pt-0">

          <div className="flex items-center gap-2 mb-3 fade-in-up-element" style={{ animationDelay: '200ms' }}>
            <HiOutlineCodeBracket className="text-cyan-400 text-lg sm:text-xl" />
            <p className="text-gray-100 text-base sm:text-lg font-medium">Hey! I&apos;m</p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] fade-in-up-element" style={{ animationDelay: '300ms' }}>
            Nishant{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Sharma
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-4 sm:mb-6 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] fade-in-up-element" style={{ animationDelay: '400ms' }}>
            Full Stack Developer &{" "}
            <span className="text-cyan-300">Problem Solver</span>
          </h2>

          <p className="text-gray-200 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] fade-in-up-element" style={{ animationDelay: '500ms' }}>
            I build exceptional digital experiences that are fast,
            accessible, visually appealing, and responsive.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-49 mb-6 sm:mb-8 fade-in-up-element" style={{ animationDelay: '600ms' }}>
            <button
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-cyan-500/30 flex items-center gap-2 text-sm sm:text-base w-fit sm:w-auto overflow-hidden"
            >
              {/* Optional: Subtle shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>

              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <HiOutlineRocketLaunch className="text-lg sm:text-xl group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </button>

            <div className="flex gap-4 sm:gap-5 text-xl sm:text-2xl text-gray-200">
              <a href="https://www.linkedin.com/in/nishantsharma066/" className="hover:text-cyan-400 cursor-pointer transition-colors"><FaLinkedin /></a>
              <a href="https://github.com/nishantsharma008" className="hover:text-white cursor-pointer transition-colors"><FaGithub /></a>
              <a href="https://instagram.com/_nishant._sharma" className="hover:text-pink-500 cursor-pointer transition-colors"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="flex justify-center md:justify-end relative h-[330px] sm:h-[420px] md:h-auto pb-6 md:pb-0 fade-in-up-element" style={{ animationDelay: '300ms' }}>
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
            <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] rounded-full bg-cyan-600/40 blur-3xl"></div>
            <div className="absolute w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] rounded-full border border-cyan-500/30 animate-spin-slow"></div>
            <div className="absolute w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] md:w-[360px] md:h-[360px] rounded-full border border-blue-500/30 animate-spin-reverse"></div>
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 p-1 shadow-[0_0_60px_rgba(14,165,233,0.6)]">
              <div className="w-full h-full rounded-full bg-[#0B0F1A]/60 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                <Image
                  src="/profile.jpeg"
                  alt="Nishant Sharma"
                  fill
                  sizes="(min-width: 768px) 320px, (min-width: 640px) 288px, 256px"
                  className="object-cover object-[center_23%]"
                />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* STATS SECTION */}
      <section id="stats" className="relative max-w-6xl mx-auto px-6 pb-20 mt-4 md:-mt-20 z-10 scroll-animate">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white/10 backdrop-blur-xl p-5 md:p-6 rounded-2xl border border-white/10 text-center hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/20 shadow-xl fade-in-up-element" style={{ animationDelay: '700ms' }}>
            <HiOutlineRocketLaunch className="text-cyan-400 text-3xl md:text-4xl mx-auto mb-2 md:mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">3+</h3>
            <p className="text-gray-200 text-xs md:text-sm">Projects Completed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl p-5 md:p-6 rounded-2xl border border-white/10 text-center hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/20 shadow-xl fade-in-up-element" style={{ animationDelay: '750ms' }}>
            <MdWorkOutline className="text-blue-400 text-3xl md:text-4xl mx-auto mb-2 md:mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">2+</h3>
            <p className="text-gray-200 text-xs md:text-sm">Years Experience</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl p-5 md:p-6 rounded-2xl border border-white/10 text-center hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/20 shadow-xl fade-in-up-element" style={{ animationDelay: '800ms' }}>
            <FaUsers className="text-green-400 text-3xl md:text-4xl mx-auto mb-2 md:mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">0+</h3>
            <p className="text-gray-200 text-xs md:text-sm">Soon Handling Clients </p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl p-5 md:p-6 rounded-2xl border border-white/10 text-center hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/20 shadow-xl fade-in-up-element" style={{ animationDelay: '850ms' }}>
            <PiCertificateBold className="text-yellow-400 text-3xl md:text-4xl mx-auto mb-2 md:mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">5+</h3>
            <p className="text-gray-200 text-xs md:text-sm">Certifications</p>
          </div>
        </div>

        <div onClick={scrollToNext} className="mt-20 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity gap-4 fade-in-up-element" style={{ animationDelay: '900ms' }}>
          <span className="text-gray-200 text-sm">Scroll to Explore</span>
          <div className="animate-scroll-mouse">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="relative max-w-6xl mx-auto px-6 py-20 z-10 scroll-animate">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-cyan-200 to-white text-transparent bg-clip-text">
              Get to Know More
            </h2>

            <h2 className="text-6xl font-bold mb-4">
              About <span className="text-cyan-400">Me</span>
            </h2>

            <p className="text-gray-200 mb-6 leading-relaxed">
              I&apos;m a passionate Full Stack Developer who loves building scalable web applications and solving real-world problems.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-lg cursor-default group">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-cyan-400 text-sm" />
                </div>
                <span className="text-sm text-gray-200 group-hover:text-white transition-colors">B.Tech CSE Student</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-lg cursor-default group">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <FaLaptopCode className="text-blue-400 text-sm" />
                </div>
                <span className="text-sm text-gray-200 group-hover:text-white transition-colors">MERN Stack Developer</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-green-500/50 hover:bg-white/10 hover:shadow-lg cursor-default group">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <FaLightbulb className="text-green-400 text-sm" />
                </div>
                <span className="text-sm text-gray-200 group-hover:text-white transition-colors">Problem Solver</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-yellow-500/50 hover:bg-white/10 hover:shadow-lg cursor-default group">
                <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <FaRocket className="text-yellow-400 text-sm" />
                </div>
                <span className="text-sm text-gray-200 group-hover:text-white transition-colors">Always Learning</span>
              </div>
            </div>

            <Link
              href="/cv"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20"
            >
              <FaDownload /> Download CV
            </Link>
          </div>

          {/* ABOUT ME RADAR */}
          <div className="flex justify-center md:justify-end relative mt-8 md:-mt-6">
            <div className="flex flex-col items-center">

              <div className="relative w-80 h-80 flex items-center justify-center">
                <div className="absolute w-[380px] h-[380px] rounded-full bg-blue-600/30 blur-3xl animate-pulse"></div>
                <div className="absolute w-[320px] h-[320px] rounded-full border border-cyan-500/30 animate-spin-slow"></div>
                <div className="absolute w-[360px] h-[360px] rounded-full border border-blue-500/30 animate-spin-reverse"></div>

                <div className="w-80 h-80 rounded-full overflow-hidden shadow-[0_0_80px_rgba(14,165,233,0.5)] relative" style={{ background: 'radial-gradient(circle at center, #0a1628 0%, #0f172a 50%, #1e293b 100%)' }}>

                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-cyan-500/20 radar-pulse-1"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-blue-400/25 radar-pulse-2"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-cyan-300/30 radar-pulse-3"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-blue-300/35"></div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md border-2 border-cyan-400/50 flex items-center justify-center relative core-glow">
                      <span className="text-xl font-black text-cyan-300 tracking-widest core-text-glow">2+</span>
                      <div className="absolute inset-[-4px] rounded-full border border-dashed border-cyan-400/40 core-ring-spin"></div>
                      <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-400"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-cyan-400"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-cyan-400"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-cyan-400"></div>
                    </div>
                  </div>

                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 node-pulse shadow-lg shadow-cyan-400/50"></div>
                      <span className="text-[9px] font-mono text-cyan-400/80 tracking-wider">SKILLS</span>
                    </div>
                  </div>

                  <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[9px] font-mono text-blue-400/80 tracking-wider">3+</span>
                      <div className="w-3 h-3 rounded-full bg-blue-400 node-pulse-delay shadow-lg shadow-blue-400/50"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[9px] font-mono text-cyan-300/80 tracking-wider">GROWTH</span>
                      <div className="w-3 h-3 rounded-full bg-cyan-300 node-pulse-2 shadow-lg shadow-cyan-300/50"></div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-blue-300 node-pulse-3 shadow-lg shadow-blue-300/50"></div>
                      <span className="text-[9px] font-mono text-blue-300/80 tracking-wider">YRS</span>
                    </div>
                  </div>

                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                    <line x1="160" y1="160" x2="160" y2="32" stroke="url(#lineGrad1)" strokeWidth="1" className="animate-line-dash" opacity="0.4" />
                    <line x1="160" y1="160" x2="288" y2="160" stroke="url(#lineGrad2)" strokeWidth="1" className="animate-line-dash-delay" opacity="0.4" />
                    <line x1="160" y1="160" x2="160" y2="288" stroke="url(#lineGrad1)" strokeWidth="1" className="animate-line-dash-2" opacity="0.4" />
                    <line x1="160" y1="160" x2="32" y2="160" stroke="url(#lineGrad2)" strokeWidth="1" className="animate-line-dash-3" opacity="0.4" />

                    <defs>
                      <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                        <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute top-1/2 left-1/2 w-[140px] h-[1px] origin-left radar-scan-line" style={{
                    background: 'linear-gradient(90deg, #06b6d4 0%, transparent 100%)',
                    transformOrigin: 'left center'
                  }}></div>

                  <div className="absolute top-12 left-12 text-[8px] font-mono text-cyan-500/40 binary-float-1">01</div>
                  <div className="absolute top-20 right-16 text-[8px] font-mono text-blue-500/40 binary-float-2">10</div>
                  <div className="absolute bottom-20 left-16 text-[8px] font-mono text-cyan-400/40 binary-float-3">11</div>
                  <div className="absolute bottom-14 right-12 text-[8px] font-mono text-blue-400/40 binary-float-4">00</div>

                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                    <circle cx="160" cy="160" r="150" fill="none" stroke="rgba(14, 165, 233, 0.1)" strokeWidth="3" />

                    <circle cx="160" cy="160" r="150" fill="none" stroke="url(#progressBlue)" strokeWidth="4" strokeLinecap="round" strokeDasharray="942" strokeDashoffset="235" className="arc-fill-animation" style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }} />

                    {[...Array(12)].map((_, i) => (
                      <line key={i} x1="160" y1="10" x2="160" y2="18" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="2" strokeLinecap="round" transform={`rotate(${i * 30} 160 160)`} />
                    ))}

                    <defs>
                      <linearGradient id="progressBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#0ea5e9" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 corner-bracket"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-500/50 corner-bracket"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-500/50 corner-bracket"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 corner-bracket"></div>

                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-[10px] font-mono text-cyan-500/60 tracking-[0.3em] status-blink">
                    EXP.ACTIVE
                  </div>

                  <div className="absolute inset-0 rounded-full pointer-events-none" style={{
                    background: 'radial-gradient(circle at center, transparent 30%, rgba(10, 22, 40, 0.7) 100%)'
                  }}></div>

                </div>
              </div>

              <div className="mt-6 z-10">
                <div className="bg-[#0B0F1A]/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg flex items-center gap-2 whitespace-nowrap">
                  <span className="text-cyan-400 font-bold text-sm">2+</span>
                  <span className="text-gray-200 text-xs">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MY JOURNEY TIMELINE */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-12 drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
            My Journey <span className="text-cyan-400">So Far</span>
          </h3>

          <div className="relative">
            <div className="hidden md:block absolute top-5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">

              <div className="flex flex-col items-center text-center group">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border-2 border-cyan-500 flex items-center justify-center mb-4 z-10 group-hover:scale-110 transition-transform">
                  <HiOutlineCodeBracket className="text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold text-cyan-400">2022</h4>
                <p className="text-white font-medium mt-1 text-sm">Started Coding</p>
                <p className="text-gray-200 text-xs mt-2">Began my journey into the tech world.</p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border-2 border-blue-500 flex items-center justify-center mb-4 z-10 group-hover:scale-110 transition-transform">
                  <HiOutlineGlobeAlt className="text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-blue-400">2023</h4>
                <p className="text-white font-medium mt-1 text-sm">Exploring Web Dev</p>
                <p className="text-gray-200 text-xs mt-2">Dived deep into frontend & frameworks.</p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border-2 border-green-500 flex items-center justify-center mb-4 z-10 group-hover:scale-110 transition-transform">
                  <HiOutlineRocketLaunch className="text-green-400" />
                </div>
                <h4 className="text-lg font-bold text-green-400">2024</h4>
                <p className="text-white font-medium mt-1 text-sm">Implementation</p>
                <p className="text-gray-200 text-xs mt-2">Started building real projects effectively.</p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border-2 border-yellow-500 flex items-center justify-center mb-4 z-10 group-hover:scale-110 transition-transform">
                  <HiOutlineAcademicCap className="text-yellow-400" />
                </div>
                <h4 className="text-lg font-bold text-yellow-400">2025</h4>
                <p className="text-white font-medium mt-1 text-sm">Building Strong Projects</p>
                <p className="text-gray-200 text-xs mt-2">Deploying new projects and web apps now!</p>
              </div>

            </div>
          </div>
        </div>

        <div onClick={scrollToNext} className="mt-20 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity gap-4">
          <span className="text-gray-200 text-sm">Scroll to Explore</span>
          <div className="animate-scroll-mouse">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="relative max-w-6xl mx-auto px-6 py-24 z-10 scroll-animate">

        {/* HEADER SECTION */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <HiOutlineCodeBracket className="text-cyan-400 text-sm" />
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">My Expertise</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Skills</span>
          </h2>

          <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
            I work with a variety of technologies to build modern, efficient web applications.
          </p>
        </div>

        

        {/* DESKTOP GRID LAYOUT */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN - Skills Content */}
          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-cyan-400">
                <div className="w-10 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                Tech Stack
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                  <FaHtml5 className="text-4xl text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs text-center text-gray-300 font-medium">HTML5</p>
                </div>

                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                  <FaCss3Alt className="text-4xl text-blue-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs text-center text-gray-300 font-medium">CSS3</p>
                </div>

                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                  <FaJs className="text-4xl text-yellow-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs text-center text-gray-300 font-medium">JavaScript</p>
                </div>

                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-blue-600/50 hover:bg-blue-600/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                  <SiTypescript className="text-4xl text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs text-center text-gray-300 font-medium">TypeScript</p>
                </div>

                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                  <FaReact className="text-4xl text-cyan-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs text-center text-gray-300 font-medium">React</p>
                </div>

                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-black/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                  <SiNextdotjs className="text-4xl text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs text-center text-gray-300 font-medium">Next.js</p>
                </div>

                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                  <FaNodeJs className="text-4xl text-green-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs text-center text-gray-300 font-medium">Node.js</p>
                </div>

                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-gray-400/50 hover:bg-gray-400/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                  <SiExpress className="text-4xl text-gray-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs text-center text-gray-300 font-medium">Express.js</p>
                </div>

                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                  <SiMysql className="text-4xl text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs text-center text-gray-300 font-medium">MySQL</p>
                </div>

                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                  <SiTailwindcss className="text-4xl text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs text-center text-gray-300 font-medium">Tailwind CSS</p>
                </div>

                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-orange-600/50 hover:bg-orange-600/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                  <FaGitAlt className="text-4xl text-orange-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs text-center text-gray-300 font-medium">Git</p>
                </div>

                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                  <FaJava className="text-4xl text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs text-center text-gray-300 font-medium">Java</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h3 className="text-base font-bold mb-4 text-blue-400">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['REST APIs', 'JWT', 'Firebase', 'DSA', 'OOP', 'UI/UX', 'Responsive Design', 'Leadership', 'Problem Solver'].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 font-mono hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN - DESKTOP RADAR */}
          <div className="lg:sticky lg:top-24 flex justify-end items-start -mt-28 translate-x-6 sm:translate-x-20">

            <div className="relative bg-gradient-to-br from-black via-slate-950 to-blue-950 border-2 border-cyan-500/40 rounded-3xl p-6 md:p-8 overflow-hidden w-full max-w-[450px] shadow-2xl shadow-cyan-500/20 group hover:border-cyan-400/60 hover:shadow-cyan-400/30 transition-all duration-700">

              <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-cyan-400/70 rounded-tl-lg corner-bracket-hud"></div>
              <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-cyan-400/70 rounded-tr-lg corner-bracket-hud-delayed"></div>
              <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-cyan-400/70 rounded-bl-lg corner-bracket-hud"></div>
              <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-cyan-400/70 rounded-br-lg corner-bracket-hud-delayed"></div>

              <div className="absolute inset-0 pointer-events-none opacity-5 scanlines-overlay"></div>
              <div className="absolute inset-0 opacity-[0.03] hud-grid-pattern"></div>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-to-b from-cyan-500/20 via-cyan-500/5 to-transparent blur-2xl hud-glow-top"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-t from-blue-600/15 via-blue-600/5 to-transparent blur-2xl hud-glow-bottom"></div>

              <div className="absolute top-12 left-10 w-1.5 h-1.5 bg-cyan-400 rounded-full particle-float-1 shadow-lg shadow-cyan-400/80"></div>
              <div className="absolute top-20 right-14 w-1 h-1 bg-blue-400 rounded-full particle-float-2 shadow-lg shadow-blue-400/80"></div>
              <div className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-cyan-300 rounded-full particle-float-3 shadow-lg shadow-cyan-300/80"></div>
              <div className="absolute bottom-16 right-12 w-1 h-1 bg-blue-300 rounded-full particle-float-4 shadow-lg shadow-blue-400/80"></div>

              <div className="relative z-10 mb-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/90 hud-status-dot"></div>
                  <h3 className="text-xl font-bold text-cyan-300 tracking-wider uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.6)] hud-title-glow">
                    Skills Overview
                  </h3>
                  <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/90 hud-status-dot-delayed"></div>
                </div>
                <div className="mt-2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent hud-subtitle-line"></div>
              </div>

              <div className="relative w-full aspect-square max-w-[340px] mx-auto relative z-10">
                <svg viewBox="0 0 240 240" className="w-full h-full relative z-10 hover:scale-[1.02] transition-transform duration-500">
                  <defs>
                    <linearGradient id="hudFillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.75">
                        <animate attributeName="stop-color" values="#06b6d4;#0ea5e9;#06b6d4" dur="3s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.55">
                        <animate attributeName="stop-color" values="#3b82f6;#2563eb;#3b82f6" dur="3s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#1e40af" stopOpacity="0.45" />
                    </linearGradient>

                    <linearGradient id="hudStrokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                    </linearGradient>

                    <filter id="hudGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    <filter id="intenseGlow" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComponentTransfer in="blur" result="boost">
                        <feFuncA type="linear" slope="1.5" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode in="boost" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {[0.18, 0.36, 0.54, 0.72, 0.9, 1].map((scale, i) => (
                    <polygon
                      key={`grid-${i}`}
                      points="120,28 220,98 188,216 52,216 20,98"
                      fill="none"
                      stroke={`rgba(6, 182, 212, ${0.06 + i * 0.04})`}
                      strokeWidth={i === 5 ? "2" : i >= 3 ? "1.2" : "0.8"}
                      transform={`scale(${scale}) translate(${(1 - scale) * 120}px, ${(1 - scale) * 120}px)`}
                      className={i >= 4 ? 'hud-grid-pulse' : ''}
                      style={{ filter: i === 5 ? 'drop-shadow(0 0 4px rgba(6, 182, 212, 0.5))' : 'none' }}
                    />
                  ))}

                  {[[120, 28], [220, 98], [188, 216], [52, 216], [20, 98]].map(([x, y], i) => (
                    <line
                      key={`axis-${i}`}
                      x1="120"
                      y1="120"
                      x2={x}
                      y2={y}
                      stroke="rgba(34, 211, 238, 0.2)"
                      strokeWidth="1"
                      className="hud-axis-glow"
                      style={{ animationDelay: `${i * 0.25}s` }}
                    />
                  ))}

                  <polygon
                    points="120,45 203,105 174,190 66,190 37,105"
                    fill="url(#hudFillGradient)"
                    stroke="url(#hudStrokeGradient)"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    className="hud-data-polygon"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.7)) url(#hudGlow)' }}
                  >
                    <animate
                      attributeName="points"
                      values="120,45 203,105 174,190 66,190 37,105;120,42 206,103 177,193 63,193 34,103;120,45 203,105 174,190 66,190 37,105"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </polygon>

                  {
                    [[120, 45], [203, 105], [174, 190], [66, 190], [37, 105]].map(([x, y], idx) => (
                      <g key={`pt-${idx}`} className="cursor-pointer group/hud-point">
                        <circle cx={x} cy={y} r="12" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.5" className="hud-point-outer-ring" style={{ animationDelay: `${idx * 0.35}s` }}>
                          <animate attributeName="r" values="10;16;10" dur="2.5s" repeatCount="indefinite" begin={`${idx * 0.35}`} />
                          <animate attributeName="opacity" values="0.6;0.15;0.6" dur="2.5s" repeatCount="indefinite" begin={`${idx * 0.35}`} />
                        </circle>
                        <circle cx={x} cy={y} r="7" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.65" className="hud-point-middle-ring" style={{ animationDelay: `${idx * 0.35 + 0.15}` }}>
                          <animate attributeName="r" values="6;8.5;6" dur="2s" repeatCount="indefinite" begin={`${idx * 0.35 + 0.15}`} />
                        </circle>
                        <circle cx={x} cy={y} r="5" fill="#22d3ee" className="hud-point-core" style={{ filter: 'url(#intenseGlow)', animationDelay: `${idx * 0.2}` }}>
                          <animate attributeName="r" values="4.5;6;4.5" dur="1.8s" repeatCount="indefinite" begin={`${idx * 0.2}`} />
                        </circle>
                        <circle cx={x} cy={y} r="2.2" fill="white" opacity="0.95" />
                      </g>
                    ))
                  }

                  <text x="120" y="17" textAnchor="middle" fill="#e0f2fe" fontSize="13" fontFamily="Arial, sans-serif" fontWeight="800" className="hud-label-fade" style={{ animationDelay: '0s', filter: 'drop-shadow(0 0 6px rgba(34, 211, 238, 0.5))' }}>Frontend</text>
                  <text x="196" y="236" textAnchor="middle" fill="#e0f2fe" fontSize="13" fontFamily="Arial, sans-serif" fontWeight="800" className="hud-label-fade" style={{ animationDelay: '0.3s', filter: 'drop-shadow(0 0 6px rgba(34, 211, 238, 0.5))' }}>Database</text>
                  <text x="44" y="236" textAnchor="middle" fill="#e0f2fe" fontSize="13" fontFamily="Arial, sans-serif" fontWeight="800" className="hud-label-fade" style={{ animationDelay: '0.45s', filter: 'drop-shadow(0 0 6px rgba(34, 211, 238, 0.5))' }}>Backend</text>

                  <line x1="120" y1="120" x2="120" y2="28" stroke="url(#hudStrokeGradient)" strokeWidth="2.5" opacity="0.7" className="hud-sweep-line" style={{ transformOrigin: '120px 120px', filter: 'drop-shadow(0 0 12px rgba(34, 211, 238, 0.9))' }} />

                  <circle cx="120" cy="120" r="8" fill="black" stroke="#22d3ee" strokeWidth="3" className="hud-center-core" style={{ filter: 'drop-shadow(0 0 15px rgba(34, 211, 238, 1)) url(#intenseGlow)' }} />
                  <circle cx="120" cy="120" r="3.5" fill="#22d3ee" opacity="1" className="hud-center-inner" />
                </svg>
              </div>

              <div className="mt-6 relative z-10">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-4 hud-stats-divider"></div>
                <div className="grid grid-cols-5 gap-2">
                  {
                    [{ label: 'FE', value: '90%', delay: '0s' }, { label: 'BE', value: '85%', delay: '0.1s' }, { label: 'DB', value: '80%', delay: '0.2s' }, { label: 'TL', value: '88%', delay: '0.3s' }, { label: 'PS', value: '92%', delay: '0.4s' }].map((stat, i) => (
                      <div key={i} className="text-center group/hud-stat">
                        <div className="text-sm font-mono font-black text-cyan-300 group-hover/hud-stat:text-cyan-200 transition-colors duration-300 hud-stat-value" style={{ animationDelay: stat.delay, textShadow: '0 0 10px rgba(34, 211, 238, 0.6)', filter: `drop-shadow(0 0 ${i % 2 === 0 ? '8' : '6'}px rgba(34, 211, 238, 0.5))` }}>
                          {stat.value}
                        </div>
                        <div className="text-[9px] font-mono font-bold text-blue-400/70 mt-1 tracking-wider hud-stat-label">{stat.label}</div>
                      </div>
                    ))
                  }
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* MOBILE SKILL CARDS */}
        <div className="lg:hidden space-y-8 mt-8">

          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-cyan-400">
              <div className="w-10 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              Tech Stack
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                <FaHtml5 className="text-4xl text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs text-center text-gray-300 font-medium">HTML5</p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                <FaCss3Alt className="text-4xl text-blue-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs text-center text-gray-300 font-medium">CSS3</p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                <FaJs className="text-4xl text-yellow-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs text-center text-gray-300 font-medium">JavaScript</p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-blue-600/50 hover:bg-blue-600/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                <SiTypescript className="text-4xl text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs text-center text-gray-300 font-medium">TypeScript</p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                <FaReact className="text-4xl text-cyan-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs text-center text-gray-300 font-medium">React</p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-black/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                <SiNextdotjs className="text-4xl text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs text-center text-gray-300 font-medium">Next.js</p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                <FaNodeJs className="text-4xl text-green-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs text-center text-gray-300 font-medium">Node.js</p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-gray-400/50 hover:bg-gray-400/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                <SiExpress className="text-4xl text-gray-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs text-center text-gray-300 font-medium">Express.js</p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                <SiMysql className="text-4xl text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs text-center text-gray-300 font-medium">MySQL</p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                <SiTailwindcss className="text-4xl text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs text-center text-gray-300 font-medium">Tailwind CSS</p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-orange-600/50 hover:bg-orange-600/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                <FaGitAlt className="text-4xl text-orange-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs text-center text-gray-300 font-medium">Git</p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 hover:-translate-y-1 skill-card">
                <FaJava className="text-4xl text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs text-center text-gray-300 font-medium">Java</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <h3 className="text-base font-bold mb-4 text-blue-400">Other Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['REST APIs', 'JWT', 'Firebase', 'DSA', 'OOP', 'UI/UX', 'Responsive Design', 'Leadership', 'Problem Solver'].map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 font-mono hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* QUOTE SECTION */}
        <div className="mt-8 relative bg-gradient-to-r from-slate-900/95 via-blue-950/80 to-slate-900/95 backdrop-blur-xl border border-cyan-500/40 rounded-2xl px-6 py-5 overflow-hidden w-full hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/8 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-white text-sm sm:text-base font-medium leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                &ldquo;I love turning ideas into real products that make a difference.&rdquo;{" "}
                <span className="text-cyan-400 font-bold ml-1 block mt-1">— Nishant Sharma</span>
              </p>
            </div>

            <div className="flex-shrink-0">
              <FaRocket className="text-5xl sm:text-6xl text-cyan-400 rocket-float drop-shadow-[0_0_20px_rgba(6,182,212,0.8)] group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
            </div>
          </div>
        </div>

        <div onClick={scrollToNext} className="mt-20 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity gap-4">
          <span className="text-gray-200 text-sm">Scroll to Explore</span>
          <div className="animate-scroll-mouse">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* 🆕 PROJECTS SECTION - WITH IMAGE AND LIVE LINK */}
      {/* ============================================== */}
      <section id="projects" className="relative max-w-6xl mx-auto px-6 py-24 z-10 scroll-animate">

        {/* HEADER */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
            <HiOutlineRocketLaunch className="text-purple-400 text-sm" />
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">My Work</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-transparent bg-clip-text">Project</span>
          </h2>

          <p className="text-gray-400 max-w-lg text-lg leading-relaxed mb-8">
            My flagship AI-powered career guidance platform.<br />
            Helping users discover their perfect career path.
          </p>
        </div>

        {/* PROJECTS GRID - SMART AI CAREER ADVISOR + WEATHER DETECTOR COMING SOON */}
        <div className="relative">
          {/* 🆕 ANIMATED DOTTED CONNECTION LINE BETWEEN CARDS (SHIFTED RIGHT BY +35px) */}
          <div className="connection-line-container hidden lg:block absolute inset-0 pointer-events-none z-20" style={{ top: '120px' }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
              <defs>
                {/* Gradient for dotted line */}
                <linearGradient id="connectionLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                </linearGradient>

                {/* Glow filter for dots */}
                <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Intense glow filter for endpoints */}
                <filter id="endpointGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComponentTransfer in="blur" result="boost">
                    <feFuncA type="linear" slope="1.5" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode in="boost" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Main curved dotted path - SHIFTED RIGHT by 35px */}
              <path
                d="M 455 200 Q 632 152, 792 200"
                fill="none"
                stroke="url(#connectionLineGradient)"
                strokeWidth="2"
                strokeDasharray="6, 12"
                strokeDashoffset="0"
                opacity="0.6"
                className="dotted-path-base"
              />

              {/* Secondary glowing path overlay - SHIFTED RIGHT by 35px */}
              <path
                d="M 455 200 Q 632 152, 792 200"
                fill="none"
                stroke="url(#connectionLineGradient)"
                strokeWidth="3"
                strokeDasharray="2, 18"
                opacity="0.3"
                className="dotted-path-glow"
              />

              {/* Animated traveling dot 1 */}
              <circle r="5" fill="#22d3ee" filter="url(#dotGlow)" className="traveling-dot dot-1" />

              {/* Animated traveling dot 2 */}
              <circle r="4" fill="#a855f7" filter="url(#dotGlow)" className="traveling-dot dot-2" />

              {/* Animated traveling dot 3 */}
              <circle r="5" fill="#06b6d4" filter="url(#dotGlow)" className="traveling-dot dot-3" />

              {/* Animated traveling dot 4 */}
              <circle r="3.5" fill="#c084fc" filter="url(#dotGlow)" className="traveling-dot dot-4" />

              {/* Start endpoint marker (SHIFTED RIGHT) */}
              <g className="endpoint-start">
                <circle cx="455" cy="200" r="10" fill="#06b6d4" opacity="0.15" className="endpoint-pulse-outer" />
                <circle cx="455" cy="200" r="6" fill="#06b6d4" opacity="0.3" className="endpoint-pulse-middle" />
                <circle cx="455" cy="200" r="3" fill="#22d3ee" filter="url(#endpointGlow)" className="endpoint-core" />
              </g>

              {/* End endpoint marker (SHIFTED RIGHT) */}
              <g className="endpoint-end">
                <circle cx="792" cy="200" r="10" fill="#a855f7" opacity="0.15" className="endpoint-pulse-outer-end" />
                <circle cx="792" cy="200" r="6" fill="#a855f7" opacity="0.3" className="endpoint-pulse-middle-end" />
                <circle cx="792" cy="200" r="3" fill="#c084fc" filter="url(#endpointGlow)" className="endpoint-core-end" />
              </g>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/95 via-purple-950/40 to-slate-900/95 rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
              >

                {/* Project Image - ACTUAL SCREENSHOT */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-600/20 z-10"
                  ></div>

                  {/* Real Project Screenshot */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    unoptimized
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-20"></div>

                  {/* Top dots indicator */}
                  <div className="absolute top-4 right-4 flex gap-1.5 z-30">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                    <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link - LIVE HYPERLINK */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors group/link"
                  >
                    View Project
                    <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-1 group-hover/link:-translate-x-0 transition-transform" />
                    <span className="text-lg group-hover/link:translate-x-2 transition-transform">→</span>
                  </a>
                </div>

                {/* Bottom glow effect */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm opacity-50 group-hover:w-60 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            ))}

            {/* 🌤️ WEATHER DETECTOR COMING SOON CARD - POSITIONED RIGHT */}
            <div className="group relative bg-gradient-to-br from-slate-900/95 via-cyan-950/30 to-slate-900/95 rounded-2xl border border-cyan-500/20 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 coming-soon-card md:col-start-2 lg:col-start-3 md:translate-x-12 lg:translate-x-16">

              {/* Animated Background Pattern */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-cyan-900/20 via-slate-900 to-blue-900/20">

                {/* Floating Particles Animation */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="particle-1 absolute w-2 h-2 bg-cyan-400/60 rounded-full blur-sm"></div>
                  <div className="particle-2 absolute w-3 h-3 bg-blue-400/50 rounded-full blur-sm"></div>
                  <div className="particle-3 absolute w-2 h-2 bg-cyan-300/70 rounded-full blur-sm"></div>
                  <div className="particle-4 absolute w-2.5 h-2.5 bg-blue-300/60 rounded-full blur-sm"></div>
                  <div className="particle-5 absolute w-1.5 h-1.5 bg-cyan-500/80 rounded-full blur-sm"></div>
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>

                {/* Pulsing Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl pulse-glow"></div>

                {/* Central Icon Container - REACT ICON FOR WEATHER DETECTOR */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    {/* Rotating Ring */}
                    <div className="absolute inset-0 w-24 h-24 border-2 border-dashed border-cyan-400/50 rounded-full rotate-ring"></div>

                    {/* React Icon for Weather Detector */}
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <FaReact className="text-6xl text-cyan-400 rocket-icon-bounce drop-shadow-[0_0_30px_rgba(34,211,238,0.9)]" />

                      {/* Orbiting Dots */}
                      <div className="absolute inset-0">
                        <div className="orbit-dot-1 absolute w-2 h-2 bg-cyan-300 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="orbit-dot-2 absolute w-2 h-2 bg-blue-300 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="orbit-dot-3 absolute w-2 h-2 bg-cyan-400 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section - WEATHER DETECTOR SPECIFIC */}
              <div className="p-6 bg-gradient-to-b from-transparent to-cyan-950/20">
                <h3 className="text-2xl font-bold shimmer-text mb-2 text-center">
                  Weather Detector
                </h3>

                <p className="text-cyan-200/80 text-sm text-center leading-relaxed mb-4">
                  Real-time weather app in development<span className="typing-cursor text-cyan-400 ml-0.5">|</span>
                </p>

                {/* Tech Stack Badge - React */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                    <FaReact className="text-cyan-400 text-base" />
                    <span className="text-xs text-cyan-300 font-medium">React</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="flex justify-center gap-2 mb-4">
                  <div className="w-8 h-1 bg-gradient-to-r from-transparent to-cyan-400/60 rounded-full"></div>
                  <div className="w-8 h-1 bg-cyan-400/80 rounded-full"></div>
                  <div className="w-8 h-1 bg-gradient-to-l from-transparent to-cyan-400/60 rounded-full"></div>
                </div>

                {/* Status Badge */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </div>
                    <span className="text-xs text-cyan-300 font-medium tracking-wide">In Development</span>
                  </div>
                </div>
              </div>

              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm opacity-50 group-hover:w-60 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* VIEW ALL PROJECTS BUTTON */}
        <div className="mt-16 text-center">
          {/* VIEW ALL PROJECTS BUTTON - Scrolls to #projects Section */}
          <div className="mt-16 text-center">
            <button
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 px-8 py-4 rounded-2xl text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>

              <span className="relative z-10 flex items-center gap-2">
                View All Projects
                <HiOutlineRocketLaunch className="text-lg group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
        <div onClick={scrollToNext} className="mt-20 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity gap-4">
          <span className="text-gray-200 text-sm">Scroll to Explore</span>
          <div className="animate-scroll-mouse">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative max-w-6xl mx-auto px-6 py-24 z-10 scroll-animate">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <MdWorkOutline className="text-cyan-300 text-sm" />
            <span className="text-cyan-300 text-sm font-medium tracking-wider uppercase">My Journey</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 text-transparent bg-clip-text">Experience</span>
          </h2>

          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            A timeline of my professional and learning experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)] gap-14 xl:gap-20 items-start">
          <div className="relative">
            <div className="absolute left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/80 via-blue-500/40 to-transparent"></div>

            <div className="space-y-6">
              {experienceCards.map((card, index) => (
                <div key={card.year} className="relative pl-12">
                  <div className="absolute left-0 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/60 bg-[#090f1d] shadow-[0_0_18px_rgba(34,211,238,0.25)]">
                    <div className="absolute inset-1 rounded-full border border-white/10 bg-cyan-400/10"></div>
                    <div className="relative">{card.icon}</div>
                  </div>

                  <article className={`group relative overflow-hidden rounded-[26px] border bg-white/5 backdrop-blur-xl p-6 shadow-[0_24px_80px_rgba(3,7,18,0.45)] transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 ${card.border}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}></div>
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/10 blur-3xl opacity-20"></div>

                    <div className="relative z-10">
                      <p className={`mb-3 text-sm font-semibold tracking-[0.25em] uppercase ${card.badge}`}>
                        {card.year}
                      </p>

                      <h3 className="text-2xl font-bold text-white mb-3">
                        {card.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed mb-5 max-w-2xl">
                        {card.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-md transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className="absolute bottom-5 right-5 text-5xl font-black text-white/5"
                      aria-hidden="true"
                    >
                      0{experienceCards.length - index}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:sticky lg:top-24 space-y-6 lg:pl-6 xl:pl-10">
            <div className="experience-showcase group relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),rgba(7,10,22,0.96)_52%)] p-6 shadow-[0_30px_120px_rgba(2,6,23,0.55)]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_40%,rgba(59,130,246,0.08))]"></div>
              <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl"></div>
              <div className="absolute -right-10 bottom-10 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl"></div>

              <div className="relative z-10 mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Creative Lab</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">Building in Motion</h3>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  Live Growth
                </div>
              </div>

              <div className="relative mx-auto mb-6 flex h-[320px] max-w-[360px] items-center justify-center">
                <div className="absolute h-60 w-60 rounded-full border border-cyan-300/35 experience-orbit experience-orbit-slow"></div>
                <div className="absolute h-44 w-44 rounded-full border border-blue-300/30 experience-orbit experience-orbit-fast"></div>
                <div className="absolute h-52 w-52 rounded-full border border-rose-400/28 experience-orbit experience-orbit-red-one"></div>
                <div className="absolute h-68 w-68 rounded-full border border-red-400/24 experience-orbit experience-orbit-red-two"></div>
                <div className="absolute h-72 w-72 rounded-full bg-cyan-500/16 blur-3xl"></div>

                <div className="experience-float experience-float-one absolute left-10 top-8 rounded-2xl border border-white/12 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">Frontend</p>
                  <p className="mt-1 text-sm font-semibold text-white">Responsive UI</p>
                </div>

                <div
                  className="experience-float experience-float-two absolute right-6 sm:right-8 md:right-8 lg:right-10 top-28 sm:top-24 md:top-26 lg:top-28 xl:top-30 rounded-2xl border border-white/12 bg-white/10 px-3 sm:px-4 py-2.5 sm:py-3 backdrop-blur-md"
                >
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-fuchsia-300/80">
                    Backend
                  </p>
                  <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-semibold text-white">
                    APIs & Auth
                  </p>
                </div>

                <div className="experience-float experience-float-three absolute bottom-10 left-8 rounded-2xl border border-white/12 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-300/80">Database</p>
                  <p className="mt-1 text-sm font-semibold text-white">MySQL Systems</p>
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: "3+", subtitle: "Projects", icon: <HiOutlineRocketLaunch className="text-cyan-300 text-lg" /> },
                  { title: "2+", subtitle: "Internships", icon: <MdWorkOutline className="text-blue-300 text-lg" /> },
                  { title: "Clients", subtitle: "Soon.....", icon: <FaUsers className="text-fuchsia-300 text-lg" /> },
                ].map((item) => (
                  <div key={item.subtitle} className="min-w-0 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/8">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 shadow-[0_10px_30px_rgba(15,23,42,0.25)]">
                        {item.icon}
                      </div>
                    </div>
                    <p className="text-lg font-bold text-white">{item.title}</p>
                    <p className="mt-1 break-words text-[11px] uppercase tracking-[0.14em] text-gray-400 sm:text-[10px] md:text-[11px]">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="quote-card-shell relative overflow-hidden rounded-[30px] border border-fuchsia-400/45 bg-gradient-to-br from-[#171733] via-[#1d1d3d] to-[#2a1845] px-6 py-5 shadow-[0_24px_80px_rgba(76,29,149,0.34),0_0_0_1px_rgba(192,132,252,0.12)] backdrop-blur-md">
              <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_50%)]"></div>
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-fuchsia-400/20 blur-3xl"></div>
              <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-indigo-300/16 blur-3xl"></div>
              <div className="quote-card-glow absolute inset-0 rounded-[30px] pointer-events-none"></div>
              <div className="relative">
                <p className="max-w-[380px] text-[1.45rem] leading-[1.45] font-semibold text-white/95 md:text-[1.7rem]">
                  I believe in consistency, curiosity, and continuous improvement.
                </p>
                <div className="quote-card-icon mt-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-fuchsia-300/40 bg-[#0b1220]/70 text-fuchsia-200 shadow-[0_0_28px_rgba(192,132,252,0.26)]">
                  <HiOutlineCodeBracket className="text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div onClick={scrollToNext} className="mt-20 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity gap-4">
          <span className="text-gray-200 text-sm">Scroll to Explore</span>
          <div className="animate-scroll-mouse">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="certificates" className="relative max-w-6xl mx-auto px-6 py-24 z-10 scroll-animate">
        <div className="absolute inset-x-0 top-16 mx-auto h-72 max-w-4xl rounded-full bg-purple-600/10 blur-3xl"></div>
        <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-violet-500/12 blur-3xl"></div>
        <div className="absolute left-0 bottom-16 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="relative z-10 mb-8 flex items-start justify-between gap-6">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2">
              <PiCertificateBold className="text-violet-300 text-sm" />
              <span className="text-violet-200 text-sm font-medium tracking-wider uppercase">My Achievements</span>
            </div>
            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              Certificates
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Here are some of my certifications and achievements.
            </p>
          </div>

          <div className="hidden shrink-0 items-center justify-center sm:flex">
            <div className="relative h-32 w-32">
              <div className="absolute inset-4 rounded-full bg-amber-400/25 blur-2xl"></div>
              <div className="absolute left-7 top-20 h-14 w-6 rotate-12 rounded-b-md bg-slate-800 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"></div>
              <div className="absolute right-7 top-20 h-14 w-6 -rotate-12 rounded-b-md bg-slate-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"></div>
              <div className="absolute inset-2 rounded-full border border-white/15 bg-gradient-to-br from-slate-700 via-slate-900 to-black p-3 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
                <div className="flex h-full w-full items-center justify-center rounded-full border border-amber-300/30 bg-gradient-to-br from-slate-800 to-slate-950">
                  <FaStar className="text-4xl text-amber-300 drop-shadow-[0_0_18px_rgba(251,191,36,0.8)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mb-6 flex">
          <button className="rounded-lg border border-violet-400/50 bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(139,92,246,0.38)]">
            All
          </button>
        </div>

        <div className="relative z-10 space-y-4">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="group relative overflow-hidden rounded-xl border border-white/8 bg-[#0c1426]/86 p-4 shadow-[0_16px_45px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/35 hover:bg-[#111a31]/92 hover:shadow-[0_20px_60px_rgba(88,28,135,0.26)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/0 to-violet-500/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative flex items-start gap-3 sm:items-center sm:gap-4">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${certificate.accent} ${certificate.iconText} shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_12px_28px_rgba(0,0,0,0.28)] sm:h-16 sm:w-16`}>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-md ${certificate.iconBg} sm:h-11 sm:w-11`}>
                    {certificate.badge ? (
                      <span className="text-sm font-black">{certificate.badge}</span>
                    ) : certificate.logoSrc ? (
                      <Image
                        src={certificate.logoSrc}
                        alt={`${certificate.issuer} logo`}
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain"
                      />
                    ) : (
                      certificate.icon
                    )}
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold leading-snug text-white sm:text-lg">
                    {certificate.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-300 sm:text-sm">{certificate.issuer}</p>
                  <p className="mt-1 text-xs text-slate-500">Issued: {certificate.date}</p>
                </div>

                <button
                  onClick={() => certificate.route && router.push(certificate.route)}
                  className="absolute bottom-0 right-0 inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-bold text-indigo-300 transition-colors duration-300 hover:bg-indigo-500/10 hover:text-indigo-200 sm:static sm:px-3 sm:py-2 sm:text-sm cursor-pointer"
                >
                  Visit
                  <FaExternalLinkAlt className="text-[10px]" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="relative z-10 mt-8 flex justify-center">
          <button
            onClick={() => {
              const certSection = document.getElementById('certificates');
              if (certSection) {
                certSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex min-w-[15.5rem] items-center justify-center gap-3 rounded-[1.35rem] bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-500 px-7 py-4 text-base font-extrabold text-white shadow-[0_18px_42px_rgba(124,58,237,0.42)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(124,58,237,0.55)] sm:min-w-[18rem] sm:px-9 sm:text-lg"
          >
            View All Certificates
            <PiCertificateBold className="text-xl transition-transform duration-300 group-hover:rotate-12 sm:text-2xl" />
          </button>
        </div>
        <div onClick={scrollToNext} className="mt-20 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity gap-4">
          <span className="text-gray-200 text-sm">Scroll to Explore</span>
          <div className="animate-scroll-mouse">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="relative max-w-6xl mx-auto px-6 py-24 z-10 scroll-animate">
        {/* Background Glows */}
        <div className="absolute inset-x-0 top-10 mx-auto h-80 max-w-5xl rounded-full bg-violet-600/10 blur-3xl"></div>
        <div className="absolute right-4 top-20 h-64 w-64 rounded-full bg-blue-500/12 blur-3xl"></div>
        <div className="absolute left-4 bottom-24 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl"></div>

        {/* Main Grid Layout */}
        <div className="relative z-10 grid gap-10 text-left lg:grid-cols-[0.95fr_1.05fr] lg:items-start">

          {/* LEFT COLUMN - Contact Info */}
          <div className="justify-self-start">
            <button
              type="button"
              className="mb-4 inline-flex items-center justify-center rounded-lg border border-blue-300/35 bg-blue-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-100 shadow-[0_0_22px_rgba(59,130,246,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200/80 hover:bg-blue-500/25 hover:text-white hover:shadow-[0_0_18px_rgba(96,165,250,0.9),0_0_44px_rgba(37,99,235,0.62)] focus:outline-none focus:ring-2 focus:ring-blue-300/60"
            >
              Get In Touch
            </button>

            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              Contact <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Me</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>

            {/* Contact Details */}
            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <FaEnvelope className="mt-1 text-violet-400" />
                <div>
                  <p className="text-sm font-bold text-white">Email</p>
                  <p className="mt-1 text-sm text-slate-300">Mrmindgamer40@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="mt-1 text-violet-400" />
                <div>
                  <p className="text-sm font-bold text-white">Phone</p>
                  <p className="mt-1 text-sm text-slate-300">+91 76508 06943</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-violet-400" />
                <div>
                  <p className="text-sm font-bold text-white">Location</p>
                  <p className="mt-1 text-sm text-slate-300">Himachal Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MdWorkOutline className="mt-0.5 text-xl text-violet-400" />
                <div>
                  <p className="text-sm font-bold text-white">Availability</p>
                  <p className="mt-1 text-sm text-slate-300">Available for freelance, and Learning </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Wrapper for Form + External Icon */}
          <div className="relative w-full max-w-[25.5rem] justify-self-center pt-16 lg:justify-self-end lg:pt-20">

            {/* ============================================== */}
            {/* 🆕 ANIMATED ICON - OUTSIDE CARD, UPPER RIGHT  */}
            {/* ============================================== */}

            {/* ✅ FIX 1: Responsive Positioning */}
            <div
              className="absolute -right-2 sm:-right-4 md:-right-6 lg:-right-8 z-30 pointer-events-none"
              style={{
                top: '0px',
                transform: 'translateZ(0)'
              }}
            >

              {/* ✅ FIX 2: Outer Ring - Responsive Size */}
              <div
                className="absolute inset-0 w-14 sm:w-16 md:w-18 lg:w-20 h-14 sm:h-16 md:h-18 lg:h-20 rounded-full border-2 border-cyan-400/25"
                style={{
                  animation: 'ping-slow 2.5s ease-in-out infinite'
                }}
              ></div>

              {/* ✅ FIX 3: Middle Ring - Responsive Size */}
              <div
                className="absolute inset-[4px] sm:inset-[5px] md:inset-[6px] w-11 sm:w-14 md:w-[72px] lg:w-[72px] h-11 sm:h-14 md:h-[72px] lg:h-[72px] rounded-full border border-blue-400/35"
                style={{
                  animation: 'pulse-ring 2s ease-in-out infinite'
                }}
              ></div>

              {/* ✅ FIX 4: Inner Core - Responsive Size */}
              <div
                className="relative w-12 sm:w-14 md:w-16 lg:w-16 h-12 sm:h-14 md:h-16 lg:h-16 rounded-full bg-gradient-to-br from-cyan-500/25 via-blue-600/20 to-violet-600/25 backdrop-blur-md border-2 border-cyan-400/50 flex items-center justify-center shadow-[0_0_25px_sm:[0_0_30px]_md:[0_0_35px]_rgba(34,211,238,0.7),0_0_50px_sm:[0_0_60px]_md:[0_0_70px]_rgba(59,130,246,0.4),inset_0_0_10px_sm:[inset_0_0_12px]_md:[inset_0_0_15px]_rgba(34,211,238,0.15)"
                style={{
                  animation: 'float-icon 3s ease-in-out infinite'
                }}
              >
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 to-transparent opacity-60"
                  style={{ animation: 'core-glow-pulse 2s ease-in-out infinite' }}
                ></div>

                {/* ✅ FIX 5: Icon Text Size */}
                <FaEnvelope
                  className="relative text-lg sm:text-xl md:text-2xl text-cyan-200 z-10"
                  style={{
                    filter: 'drop-shadow(0 0_8px_sm:[0_0_10px]_md:[0_0_12px]_rgba(34,211,238,1)) drop-shadow(0 0_16px_sm:[0_0_20px]_md:[0_0_24px]_rgba(59,130,246,0.7))',
                    animation: 'glow-icon 2.5s ease-in-out infinite'
                  }}
                />
              </div>

              {/* ✅ FIX 6: Orbit Container - Responsive */}
              <div className="absolute inset-0 w-14 sm:w-16 md:w-18 lg:w-20 h-14 sm:h-16 md:h-18 lg:h-20">

                {/* Dot 1 - Using NEW responsive animation */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cyan-300 rounded-full shadow-[0_0_8px_sm:[0_0_12px]_rgba(103,232,245,1),0_0_16px_sm:[0_0_24px]_rgba(34,211,238,0.7)]"
                  style={{ animation: 'orbit-dot-1-responsive 4s linear infinite' }}
                ></div>

                {/* Dot 2 */}
                <div
                  className="absolute bottom-1 sm:bottom-2 left-0 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full shadow-[0_0_6px_sm:[0_0_10px]_rgba(59,130,246,1),0_0_12px_sm:[0_0_20px]_rgba(59,130,246,0.6)]"
                  style={{ animation: 'orbit-dot-2-responsive 4s linear infinite 0.8s' }}
                ></div>

                {/* Dot 3 */}
                <div
                  className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-violet-400 rounded-full shadow-[0_0_6px_sm:[0_0_10px]_rgba(167,139,250,1),0_0_12px_sm:[0_0_20px]_rgba(139,92,246,0.6)]"
                  style={{ animation: 'orbit-dot-3-responsive 4s linear infinite 1.6s' }}
                ></div>

                {/* Dot 4 */}
                <div
                  className="absolute top-2 sm:top-3 right-1 sm:right-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full shadow-[0_0_5px_sm:[0_0_8px]_rgba(255,255,255,0.9)]"
                  style={{ animation: 'orbit-dot-4-responsive 5s linear infinite 2.2s' }}
                ></div>
              </div>

              {/* Sparkles - Already good, minor tweaks */}
              <div
                className="absolute -top-1 -right-0.5 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"
                style={{
                  animation: 'sparkle-1 2s ease-in-out infinite',
                  boxShadow: '0 0 6px rgba(255,255,255,0.9)'
                }}
              ></div>
              <div
                className="absolute top-1 -right-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-200 rounded-full"
                style={{
                  animation: 'sparkle-2 2.5s ease-in-out infinite 0.5s',
                  boxShadow: '0 0 5px rgba(165,243,252,0.8)'
                }}
              ></div>
              <div
                className="absolute -top-1.5 right-2 w-0.5 h-0.5 bg-blue-200 rounded-full"
                style={{
                  animation: 'sparkle-3 3s ease-in-out infinite 1s',
                  boxShadow: '0 0 4px rgba(191,219,254,0.8)'
                }}
              ></div>
              <div
                className="absolute bottom-0.5 -left-1.5 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-violet-200 rounded-full"
                style={{
                  animation: 'sparkle-4 2.8s ease-in-out infinite 1.5s',
                  boxShadow: '0 0 5px rgba(196,181,253,0.8)'
                }}
              ></div>

            </div>
            {/* END OF EXTERNAL ANIMATED ICON */}
            {/* Contact Form Card Container */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1324]/92 p-4 shadow-[0_22px_70px_rgba(0,0,0,0.34)] backdrop-blur-md sm:p-5">

              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 via-transparent to-blue-500/10"></div>

              {/* Contact Form - Gmail Redirect Enabled */}
              <form
                onSubmit={handleEmailRedirect}
                className="relative space-y-3"
              >
                {/* Name Field */}
                <div>
                  <label className="mb-2 block text-xs font-bold text-white" htmlFor="contact-name">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-md border border-white/10 bg-[#070d1b]/82 px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-violet-400/70"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="mb-2 block text-xs font-bold text-white" htmlFor="contact-email">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-md border border-white/10 bg-[#070d1b]/82 px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-violet-400/70"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className="mb-2 block text-xs font-bold text-white" htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="w-full rounded-md border border-white/10 bg-[#070d1b]/82 px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-violet-400/70"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="mb-2 block text-xs font-bold text-white" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full resize-none rounded-md border border-white/10 bg-[#070d1b]/82 px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-violet-400/70"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-violet-600 via-purple-600 to-blue-500 px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(124,58,237,0.36)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(37,99,235,0.55)] hover:brightness-110 active:scale-[0.98]"
                >
                  Send Message
                  <FaPaperPlane className="text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="relative z-16 mt-16 border-t border-white/10 pt-8">
          {/* Let's Connect - Left Aligned */}
          <div className="flex flex-col items-start justify-center gap-5 mb-6">
            <div>
              <p className="mb-4 text-xs font-bold text-white">Let&apos;s connect</p>
              <div className="flex items-center justify-start gap-4">
                <a href="https://github.com/nishantsharma008" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/14">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/nishantsharma066/" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 text-blue-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-blue-500/12">
                  <FaLinkedin />
                </a>
                <a href="https://instagram.com/_nishant._sharma" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 text-pink-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/40 hover:bg-pink-500/12">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/10 mb-2"></div>

          {/* Copyright - Centered */}
          <div className="flex justify-center">
            <p className="text-xs text-slate-400">
              &copy; 2026 Nishant Sharma. All Rights Reserved <FaHeart className="ml-1 inline text-red-500" />
            </p>
          </div>
        </footer>
      </section>

      {/* CUSTOM ANIMATIONS */}
      <style jsx>{`

        .experience-orbit {
          border-style: dashed;
          transform-style: preserve-3d;
          border-width: 1.5px;
          filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.22));
          transition: transform 400ms ease, opacity 400ms ease, filter 400ms ease;
        }

        @keyframes experience-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .experience-orbit-slow {
          animation: experience-orbit 18s linear infinite;
        }

        .experience-orbit-fast {
          animation: experience-orbit 10s linear infinite reverse;
        }

        .experience-orbit-red-one {
          animation: experience-orbit 14s linear infinite;
          filter: drop-shadow(0 0 12px rgba(251, 113, 133, 0.2));
        }

        .experience-orbit-red-two {
          animation: experience-orbit 22s linear infinite reverse;
          filter: drop-shadow(0 0 14px rgba(248, 113, 113, 0.18));
        }

        .experience-showcase:hover .experience-orbit {
          opacity: 1;
          filter: drop-shadow(0 0 16px rgba(34, 211, 238, 0.35));
        }

        @keyframes experience-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -8px, 0); }
        }

        .experience-float {
          animation: experience-float 6.8s cubic-bezier(0.37, 0, 0.2, 1) infinite;
          will-change: transform;
          transform: translateZ(0);
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.24);
          transition: transform 240ms ease, border-color 240ms ease, background-color 240ms ease, box-shadow 240ms ease;
        }

        .experience-showcase:hover .experience-float {
          border-color: rgba(255, 255, 255, 0.18);
          background-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 22px 60px rgba(15, 23, 42, 0.34);
        }

        .experience-float:hover {
          transform: translate3d(0, -4px, 0) scale(1.02);
        }

        .experience-float-one {
          animation-duration: 7.2s;
          animation-delay: 0s;
        }

        .experience-float-two {
          animation-duration: 6.4s;
          animation-delay: 0.8s;
        }

        .experience-float-three {
          animation-duration: 7.8s;
          animation-delay: 1.4s;
        }

        @keyframes quote-card-glow {
          0%, 100% {
            box-shadow:
              inset 0 0 0 1px rgba(192, 132, 252, 0.08),
              0 0 0 rgba(192, 132, 252, 0);
            opacity: 0.75;
          }
          50% {
            box-shadow:
              inset 0 0 0 1px rgba(216, 180, 254, 0.16),
              0 0 32px rgba(192, 132, 252, 0.14);
            opacity: 1;
          }
        }

        .quote-card-glow {
          animation: quote-card-glow 4.5s ease-in-out infinite;
        }

        .quote-card-shell {
          cursor: pointer;
          transform: translateZ(0);
          transition:
            transform 260ms ease,
            border-color 260ms ease,
            box-shadow 260ms ease;
        }

        .quote-card-shell:hover,
        .quote-card-shell:active {
          border-color: rgba(232, 121, 249, 0.82);
          box-shadow:
            0 28px 90px rgba(126, 34, 206, 0.42),
            0 0 44px rgba(217, 70, 239, 0.34),
            0 0 0 1px rgba(240, 171, 252, 0.28);
          transform: translateY(-4px) scale(1.015);
        }

        .quote-card-shell:hover .quote-card-glow,
        .quote-card-shell:active .quote-card-glow {
          animation-duration: 1.8s;
          box-shadow:
            inset 0 0 0 1px rgba(250, 232, 255, 0.24),
            inset 0 0 38px rgba(217, 70, 239, 0.16),
            0 0 54px rgba(217, 70, 239, 0.38),
            0 0 92px rgba(129, 140, 248, 0.22);
          opacity: 1;
        }

        .quote-card-icon {
          transition:
            transform 260ms ease,
            border-color 260ms ease,
            box-shadow 260ms ease,
            color 260ms ease;
        }

        .quote-card-shell:hover .quote-card-icon,
        .quote-card-shell:active .quote-card-icon {
          border-color: rgba(250, 232, 255, 0.74);
          color: rgb(250, 232, 255);
          box-shadow:
            0 0 30px rgba(217, 70, 239, 0.42),
            0 0 54px rgba(129, 140, 248, 0.24);
          transform: translateY(-2px) scale(1.08);
        }

        @keyframes scroll-mouse {
          0% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-scroll-mouse {
          animation: scroll-mouse 1.5s ease-in-out infinite;
        }

        @keyframes light-leak-1 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          50% { transform: translate(100px, 50px) scale(1.2); opacity: 0.3; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
        }

        .animate-light-leak-1 { animation: light-leak-1 15s infinite ease-in-out; }

        @keyframes light-leak-2 {
          0% { transform: translate(0, 0) scale(1.1); opacity: 0.2; }
          50% { transform: translate(-80px, -40px) scale(1); opacity: 0.25; }
          100% { transform: translate(0, 0) scale(1.1); opacity: 0.2; }
        }
        
        .animate-light-leak-2 { animation: light-leak-2 18s infinite ease-in-out; }

        @keyframes light-leak-3 {
          0% { transform: translate(-50%, -50%) rotate(0deg); opacity: 0.1; }
          50% { transform: translate(-40%, -60%) rotate(45deg); opacity: 0.15; }
          100% { transform: translate(-50%, -50%) rotate(0deg); opacity: 0.1; }
        }

        .animate-light-leak-3 { animation: light-leak-3 12s infinite ease-in-out; }

        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite ease-in-out;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Initial state - hidden */
.scroll-animate {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Visible state - triggered by Intersection Observer */
.scroll-animate.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered delays for child elements */
.scroll-animate .stagger-1 { transition-delay: 100ms; }
.scroll-animate .stagger-2 { transition-delay: 200ms; }
.scroll-animate .stagger-3 { transition-delay: 300ms; }
.scroll-animate .stagger-4 { transition-delay: 400ms; }
.scroll-animate .stagger-5 { transition-delay: 500ms; }

/* Keep your existing fade-in-up-element for page-load animations */
.fade-in-up-element {
  opacity: 0;
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
        
        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-down {
            animation: fadeInDown 1s ease-out forwards;
        }

        /* FUTURISTIC HUD RADAR ANIMATIONS */

        @keyframes radar-pulse-1 {
            0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.02); }
        }
        .radar-pulse-1 { animation: radar-pulse-1 4s ease-in-out infinite; }

        @keyframes radar-pulse-2 {
            0%, 100% { opacity: 0.25; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.45; transform: translate(-50%, -50%) scale(1.03); }
        }
        .radar-pulse-2 { animation: radar-pulse-2 4.5s ease-in-out infinite; }

        @keyframes radar-pulse-3 {
            0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.04); }
        }
        .radar-pulse-3 { animation: radar-pulse-3 5s ease-in-out infinite; }

        @keyframes core-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1); }
            50% { box-shadow: 0 0 35px rgba(6, 182, 212, 0.5), inset 0 0 30px rgba(6, 182, 212, 0.2); }
        }
        .core-glow { animation: core-glow 2s ease-in-out infinite; }

        @keyframes core-text-glow {
            0%, 100% { text-shadow: 0 0 10px rgba(6, 182, 212, 0.5); }
            50% { text-shadow: 0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.4); }
        }
        .core-text-glow { animation: core-text-glow 2s ease-in-out infinite; }

        @keyframes core-ring-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .core-ring-spin { animation: core-ring-spin 8s linear infinite; }

        @keyframes node-pulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 10px currentColor; }
            50% { transform: scale(1.3); box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
        }
        .node-pulse { animation: node-pulse 2s ease-in-out infinite; }
        .node-pulse-delay { animation: node-pulse 2s ease-in-out infinite 0.5s; }
        .node-pulse-2 { animation: node-pulse 2s ease-in-out infinite 1s; }
        .node-pulse-3 { animation: node-pulse 2s ease-in-out infinite 1.5s; }

        @keyframes line-dash { to { stroke-dashoffset: -20; } }
        .animate-line-dash { stroke-dasharray: 5, 5; animation: line-dash 1s linear infinite; }
        .animate-line-dash-delay { stroke-dasharray: 5, 5; animation: line-dash 1s linear infinite 0.25s; }
        .animate-line-dash-2 { stroke-dasharray: 5, 5; animation: line-dash 1s linear infinite 0.5s; }
        .animate-line-dash-3 { stroke-dasharray: 5, 5; animation: line-dash 1s linear infinite 0.75s; }

        @keyframes radar-scan-line {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .radar-scan-line { animation: radar-scan-line 4s linear infinite; }

        @keyframes binary-float-1 {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
            50% { transform: translateY(-8px) translateX(4px); opacity: 0.7; }
        }
        .binary-float-1 { animation: binary-float-1 3s ease-in-out infinite; }

        @keyframes binary-float-2 {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
            50% { transform: translateY(-10px) translateX(-4px); opacity: 0.7; }
        }
        .binary-float-2 { animation: binary-float-2 3.5s ease-in-out infinite; }

        @keyframes binary-float-3 {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
            50% { transform: translateY(-6px) translateX(5px); opacity: 0.7; }
        }
        .binary-float-3 { animation: binary-float-3 4s ease-in-out infinite; }

        @keyframes binary-float-4 {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
            50% { transform: translateY(-9px) translateX(-5px); opacity: 0.7; }
        }
        .binary-float-4 { animation: binary-float-4 3.2s ease-in-out infinite; }

        @keyframes corner-bracket {
            0%, 90%, 100% { opacity: 0.5; }
            95% { opacity: 1; }
        }
        .corner-bracket { animation: corner-bracket 3s ease-in-out infinite; }

        @keyframes status-blink {
            0%, 49% { opacity: 0.6; }
            50%, 100% { opacity: 0.3; }
        }
        .status-blink { animation: status-blink 1.5s steps(1) infinite; }

        @keyframes arc-fill {
            from { stroke-dashoffset: 942; }
            to { stroke-dashoffset: 235; }
        }
        .arc-fill-animation { animation: arc-fill 2.5s ease-out forwards; }

        @keyframes rocket-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }
        .rocket-float { animation: rocket-float 2s ease-in-out infinite; }

        /* FUTURISTIC HUD EXPERIENCE RADAR ANIMATIONS */

        @keyframes corner-bracket-hud {
            0%, 100% { 
                opacity: 0.7;
                border-color: rgba(34, 211, 238, 0.7);
                box-shadow: 0 0 5px rgba(34, 211, 238, 0.3);
            }
            50% { 
                opacity: 1;
                border-color: rgba(34, 211, 238, 1);
                box-shadow: 0 0 15px rgba(34, 211, 238, 0.6);
            }
        }
        .corner-bracket-hud {
            animation: corner-bracket-hud 3s ease-in-out infinite;
        }

        @keyframes corner-bracket-hud-delayed {
            0%, 100% { 
                opacity: 0.7;
                border-color: rgba(59, 130, 246, 0.7);
                box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
            }
            50% { 
                opacity: 1;
                border-color: rgba(59, 130, 246, 1);
                box-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
            }
        }
        .corner-bracket-hud-delayed {
            animation: corner-bracket-hud-delayed 3s ease-in-out infinite 0.75s;
        }

        .scanlines-overlay {
            background: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(34, 211, 238, 0.03) 2px,
                rgba(34, 211, 238, 0.03) 4px
            );
        }

        .hud-grid-pattern {
            background-image: 
                linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px);
            background-size: 20px 20px;
        }

        @keyframes hud-glow-top {
            0%, 100% { opacity: 0.4; transform: translateX(-50%) scaleY(1); }
            50% { opacity: 0.7; transform: translateX(-50%) scaleY(1.1); }
        }
        .hud-glow-top {
            animation: hud-glow-top 4s ease-in-out infinite;
        }

        @keyframes hud-glow-bottom {
            0%, 100% { opacity: 0.35; transform: translateX(-50%) scaleY(1); }
            50% { opacity: 0.65; transform: translateX(-50%) scaleY(1.15); }
        }
        .hud-glow-bottom {
            animation: hud-glow-bottom 4s ease-in-out infinite 1.5s;
        }

        @keyframes particle-float-1 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
            33% { transform: translate(12px, -18px) scale(1.3); opacity: 1; }
            66% { transform: translate(-6px, -28px) scale(0.9); opacity: 0.85; }
        }
        .particle-float-1 { animation: particle-float-1 7s ease-in-out infinite; }

        @keyframes particle-float-2 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.65; }
            50% { transform: translate(-14px, -22px) scale(1.4); opacity: 1; }
        }
        .particle-float-2 { animation: particle-float-2 6s ease-in-out infinite 0.8s; }

        @keyframes particle-float-3 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
            50% { transform: translate(10px, -20px) scale(1.25); opacity: 0.95; }
        }
        .particle-float-3 { animation: particle-float-3 8s ease-in-out infinite 1.5s; }

        @keyframes particle-float-4 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
            50% { transform: translate(-10px, -24px) scale(1.35); opacity: 1; }
        }
        .particle-float-4 { animation: particle-float-4 6.5s ease-in-out infinite 2s; }

        @keyframes hud-status-dot {
            0%, 100% { 
                box-shadow: 0 0 8px rgba(34, 211, 238, 0.9), 0 0 16px rgba(34, 211, 238, 0.5);
                transform: scale(1);
            }
            50% { 
                box-shadow: 0 0 14px rgba(34, 211, 238, 1), 0 0 28px rgba(34, 211, 238, 0.7);
                transform: scale(1.15);
            }
        }
        .hud-status-dot {
            animation: hud-status-dot 2s ease-in-out infinite;
        }

        @keyframes hud-status-dot-delayed {
            0%, 100% { 
                box-shadow: 0 0 8px rgba(59, 130, 246, 0.9), 0 0 16px rgba(59, 130, 246, 0.5);
                transform: scale(1);
            }
            50% { 
                box-shadow: 0 0 14px rgba(59, 130, 246, 1), 0 0 28px rgba(59, 130, 246, 0.7);
                transform: scale(1.15);
            }
        }
        .hud-status-dot-delayed {
            animation: hud-status-dot-delayed 2s ease-in-out infinite 0.5s;
        }

        @keyframes hud-title-glow {
            0%, 100% { text-shadow: 0 0 10px rgba(6, 182, 212, 0.6); }
            50% { text-shadow: 0 0 20px rgba(6, 182, 212, 0.9), 0 0 40px rgba(6, 182, 212, 0.4); }
        }
        .hud-title-glow {
            animation: hud-title-glow 3s ease-in-out infinite;
        }

        @keyframes hud-subtitle-line {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
        }
        .hud-subtitle-line {
            animation: hud-subtitle-line 2.5s ease-in-out infinite;
        }

        @keyframes hud-grid-pulse {
            0%, 100% { 
                stroke-opacity: 0.08;
                filter: drop-shadow(0 0 2px rgba(6, 182, 212, 0.2));
            }
            50% { 
                stroke-opacity: 0.15;
                filter: drop-shadow(0 0 6px rgba(6, 182, 212, 0.5));
            }
        }
        .hud-grid-pulse {
            animation: hud-grid-pulse 3.5s ease-in-out infinite;
        }

        @keyframes hud-axis-glow {
            0%, 100% { 
                stroke-opacity: 0.2;
                filter: drop-shadow(0 0 0px transparent);
            }
            50% { 
                stroke-opacity: 0.45;
                filter: drop-shadow(0 0 4px rgba(34, 211, 238, 0.5));
            }
        }
        .hud-axis-glow {
            animation: hud-axis-glow 2.5s ease-in-out infinite;
        }

        @keyframes hud-data-polygon {
            0% { 
                opacity: 0;
                filter: drop-shadow(0 0 0px transparent);
            }
            50%{
                opacity: 0.7;
            }
            100% { 
                opacity: 1;
                filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.7)) url(#hudGlow);
            }
        }
        .hud-data-polygon {
            animation: hud-data-polygon 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes hud-point-outer-ring {
            0%, 100% { 
                transform: scale(1);
                opacity: 0.5;
                stroke-width: 1.5;
            }
            50% { 
                transform: scale(1.2);
                opacity: 0.8;
                stroke-width: 2;
            }
        }
        .hud-point-outer-ring {
            animation: hud-point-outer-ring 2.5s ease-in-out infinite;
            transform-origin: center;
        }

        @keyframes hud-point-middle-ring {
            0%, 100% { 
                transform: scale(1) rotate(0deg);
                opacity: 0.65;
            }
            50% { 
                transform: scale(1.15) rotate(180deg);
                opacity: 0.95;
            }
        }
        .hud-point-middle-ring {
            animation: hud-point-middle-ring 3s ease-in-out infinite;
            transform-origin: center;
        }

        @keyframes hud-point-core {
            0%, 100% { 
                filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.8));
                transform: scale(1);
            }
            50% { 
                filter: drop-shadow(0 0 14px rgba(34, 211, 238, 1)) url(#intenseGlow);
                transform: scale(1.15);
            }
        }
        .hud-point-core {
            animation: hud-point-core 2s ease-in-out infinite;
            transform-origin: center;
        }

        @keyframes hud-label-fade {
            0% { 
                opacity: 0;
                transform: translateY(-8px);
                filter: drop-shadow(0 0 0px transparent);
            }
            100% { 
                opacity: 1;
                transform: translateY(0);
                filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.5));
            }
        }
        .hud-label-fade {
            animation: hud-label-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
        }

        @keyframes hud-sweep-line {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .hud-sweep-line {
            animation: hud-sweep-line 4s linear infinite;
        }

        @keyframes hud-center-core {
            0%, 100% { 
                filter: drop-shadow(0 0 15px rgba(34, 211, 238, 1)) url(#intenseGlow);
                transform: scale(1);
            }
            50% { 
                filter: drop-shadow(0 0 25px rgba(34, 211, 238, 1)) url(#intenseGlow);
                transform: scale(1.08);
            }
        }
        .hud-center-core {
            animation: hud-center-core 2.2s ease-in-out infinite;
            transform-origin: center;
        }

        @keyframes hud-center-inner {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(0.92); }
        }
        .hud-center-inner {
            animation: hud-center-inner 2s ease-in-out infinite;
            transform-origin: center;
        }

        @keyframes hud-stats-divider {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.7; }
        }
        .hud-stats-divider {
            animation: hud-stats-divider 3s ease-in-out infinite;
        }

        @keyframes hud-stat-value {
            0%, 100% { 
                text-shadow: 0 0 10px rgba(34, 211, 238, 0.6);
            }
            50% { 
                text-shadow: 0 0 18px rgba(34, 211, 238, 0.9), 0 0 36px rgba(34, 211, 238, 0.4);
            }
        }
        .hud-stat-value {
            animation: hud-stat-value 2.5s ease-in-out infinite;
        }

        /* COMING SOON CARD ANIMATIONS */
        @keyframes pulse-glow {
            0%, 100% {
                opacity: 0.3;
                transform: translate(-50%, -50%) scale(1);
            }
            50% {
                opacity: 0.6;
                transform: translate(-50%, -50%) scale(1.3);
            }
        }
        .pulse-glow {
            animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes rotate-ring {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        .rotate-ring {
            animation: rotate-ring 8s linear infinite;
        }

        @keyframes float-particle-1 {
            0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.6;
            }
            25% {
                transform: translate(30px, -40px) scale(1.3);
                opacity: 1;
            }
            50% {
                transform: translate(60px, -20px) scale(0.9);
                opacity: 0.7;
            }
            75% {
                transform: translate(30px, 20px) scale(1.1);
                opacity: 0.9;
            }
        }
        .particle-1 {
            top: 20%;
            left: 15%;
            animation: float-particle-1 6s ease-in-out infinite;
        }

        @keyframes float-particle-2 {
            0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.5;
            }
            33% {
                transform: translate(-40px, -30px) scale(1.4);
                opacity: 0.9;
            }
            66% {
                transform: translate(-20px, 30px) scale(0.8);
                opacity: 0.6;
            }
        }
        .particle-2 {
            top: 70%;
            right: 20%;
            animation: float-particle-2 7s ease-in-out infinite 1s;
        }

        @keyframes float-particle-3 {
            0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.7;
            }
            50% {
                transform: translate(35px, 25px) scale(1.2);
                opacity: 1;
            }
        }
        .particle-3 {
            top: 30%;
            right: 25%;
            animation: float-particle-3 5s ease-in-out infinite 0.5s;
        }

        @keyframes float-particle-4 {
            0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.6;
            }
            50% {
                transform: translate(-25px, -35px) scale(1.3);
                opacity: 0.95;
            }
        }
        .particle-4 {
            bottom: 25%;
            left: 20%;
            animation: float-particle-4 6.5s ease-in-out infinite 1.5s;
        }

        @keyframes float-particle-5 {
            0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.8;
            }
            33% {
                transform: translate(20px, -25px) scale(1.15);
                opacity: 1;
            }
            66% {
                transform: translate(-15px, 15px) scale(0.95);
                opacity: 0.75;
            }
        }
        .particle-5 {
            top: 50%;
            left: 10%;
            animation: float-particle-5 5.5s ease-in-out infinite 2s;
        }

        @keyframes typing-cursor {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0;
            }
        }
        .typing-cursor {
            animation: typing-cursor 1s steps(1) infinite;
        }

        @keyframes orbit-dot-1 {
            0% {
                transform: rotate(0deg) translateX(45px) rotate(0deg);
            }
            100% {
                transform: rotate(360deg) translateX(45px) rotate(-360deg);
            }
        }
        .orbit-dot-1 {
            animation: orbit-dot-1 4s linear infinite;
        }

        @keyframes orbit-dot-2 {
            0% {
                transform: rotate(120deg) translateX(45px) rotate(-120deg);
            }
            100% {
                transform: rotate(480deg) translateX(45px) rotate(-480deg);
            }
        }
        .orbit-dot-2 {
            animation: orbit-dot-2 4s linear infinite;
        }

        @keyframes orbit-dot-3 {
            0% {
                transform: rotate(240deg) translateX(45px) rotate(-240deg);
            }
            100% {
                transform: rotate(600deg) translateX(45px) rotate(-600deg);
            }
        }
        .orbit-dot-3 {
            animation: orbit-dot-3 4s linear infinite;
        }

        @keyframes shimmer-effect {
            0% {
                background-position: -200% center;
            }
            100% {
                background-position: 200% center;
            }
        }
        .shimmer-text {
            background: linear-gradient(
                90deg,
                #06b6d4 0%,
                #22d3ee 25%,
                #67e8f9 50%,
                #22d3ee 75%,
                #06b6d4 100%
            );
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer-effect 3s linear infinite;
        }

        @keyframes border-glow {
            0%, 100% {
                box-shadow: 0 0 15px rgba(34, 211, 238, 0.2), inset 0 0 15px rgba(34, 211, 238, 0.1);
            }
            50% {
                box-shadow: 0 0 25px rgba(34, 211, 238, 0.4), inset 0 0 25px rgba(34, 211, 238, 0.2);
            }
        }
        .coming-soon-card:hover {
            animation: border-glow 2s ease-in-out infinite;
        }

        @keyframes rocket-icon-bounce {
            0%, 100% {
                transform: translateY(0) scale(1);
            }
            50% {
                transform: translateY(-8px) scale(1.05);
            }
        }
        .rocket-icon-bounce {
            animation: rocket-icon-bounce 2s ease-in-out infinite;
        }

        /* 🆕 ANIMATED DOTTED CONNECTION LINE STYLES (SHIFTED RIGHT BY +35px) */

        @keyframes dotted-path-flow {
            0% {
                stroke-dashoffset: 0;
            }
            100% {
                stroke-dashoffset: -36;
            }
        }

        .dotted-path-base {
            animation: dotted-path-flow 3s linear infinite;
        }

        @keyframes dotted-path-glow-flow {
            0% {
                stroke-dashoffset: 0;
                opacity: 0.2;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                stroke-dashoffset: -40;
                opacity: 0.2;
            }
        }

        .dotted-path-glow {
            animation: dotted-path-glow-flow 4s linear infinite;
        }

        /* Traveling dots along shifted-right path */
        @keyframes dot-travel {
            0% {
                offset-distance: 0%;
                opacity: 0;
                transform: scale(0.5);
            }
            10% {
                opacity: 1;
                transform: scale(1.2);
            }
            90% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                offset-distance: 100%;
                opacity: 0;
                transform: scale(0.5);
            }
        }

        /* 🔥 UPDATED: Path shifted RIGHT by +35px */
        .traveling-dot {
            offset-path: path('M 455 200 Q 632 152, 792 200');
            animation: dot-travel 4s ease-in-out infinite;
        }

        .dot-1 {
            animation-delay: 0s;
            animation-duration: 3.5s;
        }

        .dot-2 {
            animation-delay: 0.9s;
            animation-duration: 3.8s;
        }

        .dot-3 {
            animation-delay: 1.8s;
            animation-duration: 3.6s;
        }

        .dot-4 {
            animation-delay: 2.7s;
            animation-duration: 4s;
        }

        /* Endpoint pulse animations - Start point (Cyan) - SHIFTED */
        @keyframes endpoint-pulse-outer-anim {
            0%, 100% {
                r: 10;
                opacity: 0.15;
            }
            50% {
                r: 16;
                opacity: 0.25;
            }
        }

        .endpoint-pulse-outer {
            animation: endpoint-pulse-outer-anim 2.5s ease-in-out infinite;
            transform-origin: center;
        }

        @keyframes endpoint-pulse-middle-anim {
            0%, 100% {
                r: 6;
                opacity: 0.3;
            }
            50% {
                r: 9;
                opacity: 0.5;
            }
        }

        .endpoint-pulse-middle {
            animation: endpoint-pulse-middle-anim 2.5s ease-in-out infinite 0.3s;
            transform-origin: center;
        }

        @keyframes endpoint-core-anim {
            0%, 100% {
                r: 3;
                filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.8));
            }
            50% {
                r: 4;
                filter: drop-shadow(0 0 12px rgba(34, 211, 238, 1)) url(#endpointGlow);
            }
        }

        .endpoint-core {
            animation: endpoint-core-anim 2s ease-in-out infinite;
            transform-origin: center;
        }

        /* Endpoint pulse animations - End point (Purple) - SHIFTED */
        @keyframes endpoint-pulse-outer-end-anim {
            0%, 100% {
                r: 10;
                opacity: 0.15;
            }
            50% {
                r: 16;
                opacity: 0.25;
            }
        }

        .endpoint-pulse-outer-end {
            animation: endpoint-pulse-outer-end-anim 2.5s ease-in-out infinite 0.5s;
            transform-origin: center;
        }

        @keyframes endpoint-pulse-middle-end-anim {
            0%, 100% {
                r: 6;
                opacity: 0.3;
            }
            50% {
                r: 9;
                opacity: 0.5;
            }
        }

        .endpoint-pulse-middle-end {
            animation: endpoint-pulse-middle-end-anim 2.5s ease-in-out infinite 0.8s;
            transform-origin: center;
        }

        @keyframes endpoint-core-end-anim {
            0%, 100% {
                r: 3;
                filter: drop-shadow(0 0 6px rgba(192, 132, 252, 0.8));
            }
            50% {
                r: 4;
                filter: drop-shadow(0 0 12px rgba(192, 132, 252, 1)) url(#endpointGlow);
            }
        }

        .endpoint-core-end {
            animation: endpoint-core-end-anim 2s ease-in-out infinite 0.4s;
            transform-origin: center;
        }

        /* Connection line container hover effect */
        .connection-line-container:hover .dotted-path-base {
            opacity: 0.8;
            stroke-width: 3;
        }

        .connection-line-container:hover .traveling-dot {
            filter: drop-shadow(0 0 15px currentColor) url(#dotGlow);
        }
            /* ══════════════════════════════════════════════════════════ */
/* 🆕 EXTERNAL CONTACT ICON ANIMATIONS                      */
/* ══════════════════════════════════════════════════════════ */

/* Slow Ping Animation - Outer Ring */
@keyframes ping-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.08;
  }
}

/* Pulse Ring Animation - Middle Ring */
@keyframes pulse-ring {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.75;
    transform: scale(1.06);
  }
}

/* Floating Icon Animation - Core Circle */
@keyframes float-icon {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(4deg);
  }
}

/* Core Glow Pulse Effect */
@keyframes core-glow-pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.85;
  }
}

/* Glowing Icon Effect - Envelope Symbol */
@keyframes glow-icon {
  0%, 100% {
    filter: drop-shadow(0 0 12px rgba(34, 211, 238, 1)) drop-shadow(0 0 24px rgba(59, 130, 246, 0.7));
    opacity: 1;
  }
  50% {
    filter: drop-shadow(0 0 18px rgba(34, 211, 238, 1)) drop-shadow(0 0 36px rgba(59, 130, 246, 0.9));
    opacity: 0.88;
  }
}

/* Orbiting Dot 1 - Cyan (Top Position) */
@keyframes orbit-dot-1 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(40px) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) translateX(40px) rotate(-360deg);
  }
}

/* Orbiting Dot 2 - Blue (Bottom Left) */
@keyframes orbit-dot-2 {
  0% {
    transform: translate(-25%, 40%) rotate(120deg) translateX(36px) rotate(-120deg);
  }
  100% {
    transform: translate(-25%, 40%) rotate(480deg) translateX(36px) rotate(-480deg);
  }
}

/* Orbiting Dot 3 - Violet (Right Side) */
@keyframes orbit-dot-3 {
  0% {
    transform: translate(45%, -50%) rotate(240deg) translateX(38px) rotate(-240deg);
  }
  100% {
    transform: translate(45%, -50%) rotate(600deg) translateX(38px) rotate(-600deg);
  }
}

/* Orbiting Dot 4 - White Tiny (Extra) */
@keyframes orbit-dot-4 {
  0% {
    transform: translate(12%, -15%) rotate(60deg) translateX(32px) rotate(-60deg);
  }
  100% {
    transform: translate(12%, -15%) rotate(420deg) translateX(32px) rotate(-420deg);
  }
}

/* Sparkle Effect 1 - Top Right */
@keyframes sparkle-1 {
  0%, 100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.3) rotate(180deg);
  }
}

/* Sparkle Effect 2 - Right Side */
@keyframes sparkle-2 {
  0%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }
}

/* Sparkle Effect 3 - Upper Right */
@keyframes sparkle-3 {
  0%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0.95;
    transform: scale(1.2);
  }
}

/* Sparkle Effect 4 - Bottom Left */
@keyframes sparkle-4 {
  0%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0.85;
    transform: scale(1);
  }
}
  /* ══════════════════════════════════════════════════════════ */
/* 🆕 RESPONSIVE ORBIT ANIMATIONS - WORKS ON EVERY SCREEN   */
/* ══════════════════════════════════════════════════════════ */

@keyframes orbit-dot-1-responsive {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(clamp(18px, 4.5vw, 28px)) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) translateX(clamp(18px, 4.5vw, 28px)) rotate(-360deg);
  }
}

@keyframes orbit-dot-2-responsive {
  0% {
    transform: translate(-25%, 40%) rotate(120deg) translateX(clamp(16px, 4vw, 26px)) rotate(-120deg);
  }
  100% {
    transform: translate(-25%, 40%) rotate(480deg) translateX(clamp(16px, 4vw, 26px)) rotate(-480deg);
  }
}

@keyframes orbit-dot-3-responsive {
  0% {
    transform: translate(45%, -50%) rotate(240deg) translateX(clamp(17px, 4.2vw, 27px)) rotate(-240deg);
  }
  100% {
    transform: translate(45%, -50%) rotate(600deg) translateX(clamp(17px, 4.2vw, 27px)) rotate(-600deg);
  }
}

@keyframes orbit-dot-4-responsive {
  0% {
    transform: translate(12%, -15%) rotate(60deg) translateX(clamp(14px, 3.5vw, 22px)) rotate(-60deg);
  }
  100% {
    transform: translate(12%, -15%) rotate(420deg) translateX(clamp(14px, 3.5vw, 22px)) rotate(-420deg);
  }
}
      `}</style>

    </main>
  );
}
