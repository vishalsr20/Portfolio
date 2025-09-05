import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Home = ({ isDarkTheme }) => {
  const phrases = ["Software Developer", "Problem Solver", "Tech Innovator"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  // Gentle fade in on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="home"
      className={`relative font-serif w-full min-h-screen flex justify-center items-center mx-auto py-20 px-4 sm:px-8 lg:px-16 text-center transition-all duration-1000 ${
        isDarkTheme 
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-emerald-300" 
          : "bg-gradient-to-b from-slate-50 to-white text-emerald-700"
      }`}
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl transition-all duration-[3s] ${
          isDarkTheme ? 'bg-emerald-500/10' : 'bg-emerald-500/5'
        } animate-float-slow`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl transition-all duration-[4s] ${
          isDarkTheme ? 'bg-teal-500/10' : 'bg-teal-500/5'
        } animate-float-slower`}></div>
      </div>

      {/* Main Content */}
      <div 
        className={`relative z-10 w-full max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Welcome message */}
        <div className="mb-8">
          <p className={`text-lg sm:text-xl font-light tracking-wide transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            Welcome to my portfolio
          </p>
          <div className={`w-16 h-px mx-auto mt-3 transition-all duration-700 delay-300 ${
            isVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'
          } bg-gradient-to-r from-transparent via-emerald-500 to-transparent`}></div>
        </div>

        {/* Main title */}
        <div className="mb-8">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-light leading-tight transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          } ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
            Hello, I'm{" "}
            <span className="relative inline-block font-normal">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-size-200 animate-gradient-gentle">
                Vishal Rathod
              </span>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 blur-sm opacity-30 animate-gradient-gentle"></div>
            </span>
          </h1>
        </div>

        {/* Typewriter section */}
        <div className={`mb-10 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light">
            <span className={isDarkTheme ? 'text-gray-300' : 'text-gray-700'}>I am a </span>
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                {currentText}
              </span>
              <span className="text-emerald-500 animate-blink-gentle">|</span>
            </span>
          </p>
        </div>

        {/* Description */}
        <div className={`mb-12 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className={`text-base sm:text-lg lg:text-xl leading-relaxed font-light max-w-3xl mx-auto ${
            isDarkTheme ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Passionate about creating elegant solutions through code. I specialize in building 
            modern web applications and solving complex problems with clean, efficient code. 
            Always eager to learn new technologies and tackle challenging projects.
          </p>
        </div>

        {/* Tech stack pills */}
        <div className={`mb-12 transition-all duration-700 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {["React", "JavaScript", "Python", "Node.js"].map((tech, idx) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-full text-sm font-light border transition-all duration-300 hover:translate-y-[-2px] ${
                  isDarkTheme
                    ? "bg-gray-800/50 border-gray-700 text-emerald-300 hover:bg-gray-700/50 hover:border-emerald-600"
                    : "bg-white/80 border-gray-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300"
                } backdrop-blur-sm`}
                style={{ 
                  transitionDelay: `${800 + idx * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-700 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button className={`group relative px-8 py-4 rounded-full font-light text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl ${
            isDarkTheme
              ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-emerald-500/20"
              : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-emerald-500/30"
          }`}>
            <Link to="projects" smooth={true} duration={500} className="flex items-center gap-2">
              <span>View My Work</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1200 ${
          isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="animate-bounce-gentle">
            <svg className={`w-6 h-6 ${isDarkTheme ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        @keyframes gradient-gentle {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes blink-gentle {
          0%, 70% { opacity: 1; }
          71%, 100% { opacity: 0; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -10px) rotate(1deg); }
          66% { transform: translate(-5px, 5px) rotate(-1deg); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-15px, -15px) rotate(-1deg); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { 
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0,0,0.2,1);
          }
          50% { 
            transform: translateY(-8px);
            animation-timing-function: cubic-bezier(0.8,0,1,1);
          }
        }
        
        .animate-gradient-gentle {
          animation: gradient-gentle 4s ease-in-out infinite;
        }
        
        .animate-blink-gentle {
          animation: blink-gentle 2s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 8s ease-in-out infinite;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;