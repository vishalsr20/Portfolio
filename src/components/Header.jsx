import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Home from "./Home";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { FiDownload, FiEye, FiX, FiFileText, FiUser, FiBriefcase, FiAward, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Navigation Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-4'
        } ${
          isDarkTheme
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-emerald-500/20'
            : 'bg-white/95 backdrop-blur-md border-b border-emerald-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className={`text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r ${
              isDarkTheme 
                ? 'from-emerald-400 to-teal-400' 
                : 'from-emerald-600 to-teal-600'
            } bg-clip-text text-transparent`}>
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onSetActive={() => setActiveSection(item.id)}
                  className={`relative px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                    activeSection === item.id
                      ? isDarkTheme
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-emerald-600 bg-emerald-100/70'
                      : isDarkTheme
                        ? 'text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/5'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                      isDarkTheme ? 'bg-emerald-400' : 'bg-emerald-600'
                    }`} />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
              {/* Resume Button - Hidden on small screens, shown on medium+ */}
              <button
                onClick={() => setShowResume(true)}
                className={`hidden md:inline-flex items-center space-x-2 px-3 lg:px-4 py-2 lg:py-2.5 rounded-full font-medium text-sm lg:text-base transition-all duration-300 ${
                  isDarkTheme
                    ? 'bg-purple-600/80 text-white hover:bg-purple-500 shadow-lg shadow-purple-500/25'
                    : 'bg-purple-500 text-white hover:bg-purple-600 shadow-lg shadow-purple-300/30'
                } transform hover:scale-105 hover:shadow-xl`}
              >
                <FiFileText className="text-sm lg:text-base" />
                <span className="hidden lg:inline">Resume</span>
              </button>

              {/* Contact Button - Hidden on small screens, shown on large+ */}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={`hidden lg:inline-flex px-4 xl:px-6 py-2.5 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                  isDarkTheme
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/25'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-300/30'
                } transform hover:scale-105 hover:shadow-xl`}
              >
                Contact
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 sm:p-2.5 lg:p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isDarkTheme
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 shadow-lg shadow-gray-700/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-lg shadow-gray-200/50'
                }`}
              >
                {isDarkTheme ? (
                  <MdOutlineDarkMode className="text-lg sm:text-xl" />
                ) : (
                  <MdDarkMode className="text-lg sm:text-xl" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <MobileMenu 
                  navItems={navItems}
                  isDarkTheme={isDarkTheme}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                  setShowResume={setShowResume}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={showResume} 
        onClose={() => setShowResume(false)} 
        isDarkTheme={isDarkTheme} 
      />

      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-20" />

      {/* Page Sections */}
      <div className="relative">
        <div id="home">
          <Home isDarkTheme={isDarkTheme} />
        </div>
        <div id="skills">
          <Skills isDarkTheme={isDarkTheme} />
        </div>
        <div id="projects">
          <Project isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        </div>
        <div id="contact">
          <Contact isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        </div>
      </div>
    </>
  );
};

// Mobile Menu Component with improved responsive design
const MobileMenu = ({ navItems, isDarkTheme, activeSection, setActiveSection, setShowResume }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
<div className="">
        {/* Mobile Menu Button (Hamburger) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg z-50 relative transition-colors duration-200 ${
          isDarkTheme
            ? "text-gray-200 hover:bg-gray-800"
            : "text-gray-700 hover:bg-gray-200"
        }`}
        aria-label="Toggle mobile menu"
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center space-y-1">
          <div
            className={`w-5 sm:w-6 h-0.5 rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5 sm:translate-y-2" : ""
            } ${isDarkTheme ? "bg-gray-200" : "bg-gray-700"}`}
          />
          <div
            className={`w-5 sm:w-6 h-0.5 rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            } ${isDarkTheme ? "bg-gray-200" : "bg-gray-700"}`}
          />
          <div
            className={`w-5 sm:w-6 h-0.5 rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5 sm:-translate-y-2" : ""
            } ${isDarkTheme ? "bg-gray-200" : "bg-gray-700"}`}
          />
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Menu - Responsive width */}
      <div
        className={`fixed top-0 right-0 h-full w-64 xs:w-72 sm:w-80 transform transition-transform duration-300 z-50 shadow-xl
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          ${isDarkTheme ? "bg-gray-900 border-l border-gray-800" : "bg-white border-l border-gray-200"}
        `}
      >
        <div className="p-4 sm:p-6 pt-20">
          {/* Mobile action buttons */}
          <div className="mb-6 space-y-3">
            <button
              onClick={() => {
                setShowResume(true);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                isDarkTheme
                  ? 'bg-purple-600 text-white hover:bg-purple-500'
                  : 'bg-purple-500 text-white hover:bg-purple-600'
              }`}
            >
              <FiFileText className="text-lg" />
              <span>View Resume</span>
            </button>
            
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className={`w-full flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                isDarkTheme
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600'
              }`}
            >
              Get in Touch
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2 ">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(item.id);
                }}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer
                  ${
                    activeSection === item.id
                      ? isDarkTheme
                        ? "text-emerald-400 bg-gray-800"
                        : "text-emerald-600 bg-gray-100"
                      : isDarkTheme
                        ? "text-gray-300 hover:text-emerald-400 hover:bg-gray-800"
                        : "text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
</div>
    </>
  );
};

// Resume Modal Component
const ResumeModal = ({ isOpen, onClose, isDarkTheme }) => {
  if (!isOpen) return null;

  // Sample resume data - replace with your actual data
  const resumeData = {
    personalInfo: {
      name: "Vishal Rathod",
      title: "Full Stack Developer",
      email: "vishalrathod@example.com",
      phone: "+91 XXXXX XXXXX",
      location: "India",
      summary: "Passionate full-stack developer with expertise in modern web technologies. I create efficient, scalable solutions and have a strong foundation in both frontend and backend development."
    },
    experience: [
      {
        title: "Full Stack Developer",
        company: "Tech Company",
        duration: "2023 - Present",
        description: "Developed and maintained web applications using React, Node.js, and modern frameworks."
      },
      {
        title: "Frontend Developer",
        company: "Digital Agency",
        duration: "2022 - 2023",
        description: "Created responsive user interfaces and improved user experience across multiple projects."
      }
    ],
    education: [
      {
        degree: "Bachelor of Computer Science",
        school: "University Name",
        duration: "2019 - 2023",
        description: "Relevant coursework in software engineering, data structures, and algorithms."
      }
    ],
    skills: [
      "React", "JavaScript", "Node.js", "Python", "MongoDB", "PostgreSQL", 
      "HTML/CSS", "Tailwind CSS", "Git", "Docker", "AWS", "Express.js"
    ]
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative h-full flex items-center justify-center p-2 sm:p-4">
        <div className={`w-full max-w-4xl max-h-[95vh] rounded-xl shadow-2xl overflow-hidden ${
          isDarkTheme ? 'bg-gray-900' : 'bg-white'
        }`}>
          {/* Header */}
          <div className={`flex items-center justify-between p-4 sm:p-6 border-b ${
            isDarkTheme ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <h2 className={`text-xl sm:text-2xl font-bold ${
              isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'
            }`}>
              Resume
            </h2>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => window.print()}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isDarkTheme
                    ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                }`}
              >
                <FiDownload className="text-sm" />
                <span className="hidden sm:inline">Download</span>
              </button>
              <button
                onClick={onClose}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkTheme ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <FiX className="text-lg" />
              </button>
            </div>
          </div>

          {/* Resume Content */}
          <div className="overflow-y-auto max-h-[calc(95vh-80px)] p-4 sm:p-6 lg:p-8">
            <div className="space-y-6 sm:space-y-8">
              {/* Personal Info */}
              <div className="text-center">
                <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 ${
                  isDarkTheme ? 'text-white' : 'text-gray-900'
                }`}>
                  {resumeData.personalInfo.name}
                </h1>
                <p className={`text-lg sm:text-xl font-medium mb-4 ${
                  isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'
                }`}>
                  {resumeData.personalInfo.title}
                </p>
                <div className={`flex flex-wrap justify-center gap-4 text-sm ${
                  isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <div className="flex items-center space-x-1">
                    <FiMail className="text-xs" />
                    <span>{resumeData.personalInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiPhone className="text-xs" />
                    <span>{resumeData.personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiMapPin className="text-xs" />
                    <span>{resumeData.personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className={`text-lg sm:text-xl font-bold mb-3 ${
                  isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'
                }`}>
                  Professional Summary
                </h2>
                <p className={`text-sm sm:text-base leading-relaxed ${
                  isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {resumeData.personalInfo.summary}
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className={`text-lg sm:text-xl font-bold mb-4 flex items-center ${
                  isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'
                }`}>
                  <FiBriefcase className="mr-2" />
                  Experience
                </h2>
                <div className="space-y-4">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className={`p-4 rounded-lg ${
                      isDarkTheme ? 'bg-gray-800' : 'bg-gray-50'
                    }`}>
                      <h3 className={`font-semibold text-sm sm:text-base ${
                        isDarkTheme ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h3>
                      <p className={`font-medium text-sm ${
                        isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'
                      }`}>
                        {exp.company}
                      </p>
                      <p className={`text-xs sm:text-sm mb-2 ${
                        isDarkTheme ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {exp.duration}
                      </p>
                      <p className={`text-sm ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className={`text-lg sm:text-xl font-bold mb-4 flex items-center ${
                  isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'
                }`}>
                  <FiAward className="mr-2" />
                  Education
                </h2>
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className={`p-4 rounded-lg ${
                      isDarkTheme ? 'bg-gray-800' : 'bg-gray-50'
                    }`}>
                      <h3 className={`font-semibold text-sm sm:text-base ${
                        isDarkTheme ? 'text-white' : 'text-gray-900'
                      }`}>
                        {edu.degree}
                      </h3>
                      <p className={`font-medium text-sm ${
                        isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'
                      }`}>
                        {edu.school}
                      </p>
                      <p className={`text-xs sm:text-sm mb-2 ${
                        isDarkTheme ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {edu.duration}
                      </p>
                      <p className={`text-sm ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className={`text-lg sm:text-xl font-bold mb-4 ${
                  isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'
                }`}>
                  Technical Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                        isDarkTheme
                          ? 'bg-emerald-900/50 text-emerald-300 border border-emerald-700'
                          : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;