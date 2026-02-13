import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, Code2, Trophy, ExternalLink, ChevronDown, Sparkles, Terminal } from "lucide-react";

const Home = ({ isDarkTheme }) => {
  const phrases = [
  "Agentic AI Enthusiast",
  "Full Stack Developer",
  "Problem Solver",
  "Tech Innovator",
  "Open Source Contributor"
  
];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[index];
    let timeout;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setCurrentText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, phrases]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="home"
      className={`relative font-sans w-full min-h-screen flex justify-center items-center mx-auto py-20 px-4 sm:px-8 lg:px-16 text-center overflow-hidden transition-all duration-1000 ${
        isDarkTheme 
          ? "bg-gray-900" 
          : "bg-gradient-to-br from-slate-50 via-white to-emerald-50/30"
      }`}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${
          isDarkTheme 
            ? 'bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]' 
            : 'bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]'
        } bg-[size:4rem_4rem] opacity-20`} />
        
        {/* Gradient Orbs */}
        <div 
          className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-[3s] ${
            isDarkTheme ? 'bg-emerald-500/10' : 'bg-emerald-400/20'
          } animate-float-1`}
          style={{
            left: `${mousePosition.x / 50}px`,
            top: `${mousePosition.y / 50}px`,
          }}
        />
        <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl ${
          isDarkTheme ? 'bg-blue-500/10' : 'bg-blue-400/20'
        } animate-float-2`} />
        <div className={`absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl ${
          isDarkTheme ? 'bg-purple-500/10' : 'bg-purple-400/15'
        } animate-float-3`} />
      </div>

      {/* Main Content */}
      <div 
        className={`relative z-10 w-full max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Status Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-sm transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } ${
          isDarkTheme
            ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
            : 'bg-emerald-100 border border-emerald-300 text-emerald-700'
        }`}>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium">Available for opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <span className={`block mb-2 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            Hi, I'm
          </span>
          <span className="relative inline-block">
            <span className={`relative z-10 ${
              isDarkTheme ? 'text-white' : 'text-gray-900'
            }`}>
              Vishal Rathod
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 blur-2xl -z-10 animate-pulse-slow" />
          </span>
        </h1>

        {/* Typewriter */}
        <div className={`mb-8 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${
            isDarkTheme ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <span className="inline-flex items-center gap-2">
              <Terminal className={`w-6 h-6 ${isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {currentText}
              </span>
              <span className="text-emerald-500 animate-blink">|</span>
            </span>
          </p>
        </div>

        {/* Description */}
         <p className={`text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-10 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            Crafting elegant digital experiences with modern technologies. 
            Specializing in{" "}
            <span className={`font-semibold ${isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'}`}>MERN Stack</span>,{" "}
            <span className={`font-semibold ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'}`}>microservices architecture</span>,{" "}
            <span className={`font-semibold ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'}`}>competitive programming</span>, and{" "}
            <span className={`font-semibold ${isDarkTheme ? 'text-pink-400' : 'text-pink-600'}`}>Agentic AI systems</span>.
          </p>

        {/* Achievement Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {[
            { icon: Code2, value: "350+", label: "LeetCode Problems", color: "emerald" },
            { icon: Trophy, value: "32+", label: "Projects Built", color: "blue" },
            { icon: Github, value: "700+", label: "Contributions", color: "purple" },
            { icon: Sparkles, value: "6", label: "month Experience", color: "pink" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isDarkTheme
                  ? 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600'
                  : 'bg-white/60 border border-gray-200 hover:border-gray-300 shadow-sm'
              }`}
            >
              <stat.icon className={`w-6 h-6 mx-auto mb-2 text-${stat.color}-500`} />
              <div className={`text-2xl font-bold mb-1 ${
                isDarkTheme ? `text-${stat.color}-400` : `text-${stat.color}-600`
              }`}>
                {stat.value}
              </div>
              <div className={`text-xs ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className={`mb-12 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className={`text-sm font-medium mb-4 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
            TECH STACK
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["React", "Node.js", "MongoDB", "Express", "Next.js", "JavaScript", "Python", "C++", "Tailwind CSS", "RabbitMQ"].map((tech, idx) => (
              <span
                key={tech}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg ${
                  isDarkTheme
                    ? "bg-gray-800/80 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-emerald-500/50"
                    : "bg-white/80 border border-gray-200 text-gray-700 hover:bg-white hover:border-emerald-400 shadow-sm"
                }`}
                style={{ 
                  transitionDelay: `${600 + idx * 50}ms`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Link to="projects" smooth={true} duration={500}>
            <button className={`group px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl flex items-center gap-2 ${
              isDarkTheme
                ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:shadow-emerald-500/30"
                : "bg-gradient-to-r from-emerald-500 to-emerald-400 text-white hover:shadow-emerald-500/40"
            }`}>
              <span>View My Work</span>
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </Link>

          <a
            href="https://leetcode.com/u/Vishal718/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:translate-y-[-2px] flex items-center gap-2 ${
              isDarkTheme
                ? "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-emerald-500/50"
                : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 hover:border-emerald-400 shadow-sm"
            }`}
          >
            <Code2 className="w-5 h-5" />
            <span>LeetCode Profile</span>
            <div className={`px-2 py-0.5 rounded-full text-xs font-bold ${
              isDarkTheme ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
            }`}>
              350+
            </div>
          </a>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center gap-4 mb-16 transition-all duration-700 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <a
            href="https://www.linkedin.com/in/vishal718/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-xl transition-all duration-300 hover:translate-y-[-2px] ${
              isDarkTheme
                ? 'bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white border border-gray-700'
                : 'bg-white text-gray-600 hover:bg-blue-600 hover:text-white border border-gray-200 shadow-sm'
            }`}
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Rathod-vishal-20"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-xl transition-all duration-300 hover:translate-y-[-2px] ${
              isDarkTheme
                ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
                : 'bg-white text-gray-600 hover:bg-gray-900 hover:text-white border border-gray-200 shadow-sm'
            }`}
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col items-center gap-2 animate-bounce-slow">
            <span className={`text-xs font-medium ${isDarkTheme ? 'text-gray-500' : 'text-gray-400'}`}>
              Scroll Down
            </span>
            <ChevronDown className={`w-5 h-5 ${isDarkTheme ? 'text-gray-600' : 'text-gray-400'}`} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -50px) scale(1.1); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.05); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -20px) rotate(5deg); }
        }
        
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { 
            transform: translateY(0);
          }
          50% { 
            transform: translateY(-10px);
          }
        }
        
        .animate-float-1 {
          animation: float-1 20s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 25s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 15s ease-in-out infinite;
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;