import React, { useState, useEffect } from "react";

const Skills = ({ isDarkTheme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "HTML", category: "frontend", level: 90 },
    { name: "CSS", category: "frontend", level: 85 },
    { name: "JavaScript", category: "frontend", level: 88 },
    { name: "ReactJs", category: "frontend", level: 90 },
    { name: "NextJs", category: "frontend", level: 85 },
    { name: "Tailwind", category: "frontend", level: 88 },
    { name: "MongoDB", category: "database", level: 80 },
    { name: "SQL", category: "database", level: 75 },
    { name: "ExpressJs", category: "backend", level: 82 },
    { name: "NodeJs", category: "backend", level: 85 },
    { name: "MERN", category: "fullstack", level: 88 },
    { name: "Firebase", category: "cloud", level: 78 },
    { name: "AWS", category: "cloud", level: 70 },
    { name: "Docker", category: "devops", level: 72 },
    { name: "GitHub", category: "tools", level: 85 },
    { name: "Aeternity UI", category: "frontend", level: 75 },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      frontend: isDarkTheme ? "from-blue-600 to-blue-700" : "from-blue-500 to-blue-600",
      backend: isDarkTheme ? "from-green-600 to-green-700" : "from-green-500 to-green-600",
      database: isDarkTheme ? "from-purple-600 to-purple-700" : "from-purple-500 to-purple-600",
      cloud: isDarkTheme ? "from-orange-600 to-orange-700" : "from-orange-500 to-orange-600",
      devops: isDarkTheme ? "from-red-600 to-red-700" : "from-red-500 to-red-600",
      tools: isDarkTheme ? "from-gray-600 to-gray-700" : "from-gray-500 to-gray-600",
      fullstack: isDarkTheme ? "from-emerald-600 to-emerald-700" : "from-emerald-500 to-emerald-600",
    };
    return colors[category] || colors.frontend;
  };

  return (
    <div
      id="skills"
      className={`relative py-20 px-4 sm:px-8 lg:px-16 font-serif transition-all duration-1000 ${
        isDarkTheme
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-emerald-300"
          : "bg-gradient-to-b from-gray-50 to-white text-emerald-700"
      }`}
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className={`absolute top-1/4 left-1/3 w-64 h-64 rounded-full blur-3xl ${
          isDarkTheme ? 'bg-emerald-500/5' : 'bg-emerald-500/3'
        } animate-float-gentle`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl ${
          isDarkTheme ? 'bg-teal-500/5' : 'bg-teal-500/3'
        } animate-float-gentle-reverse`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light mb-4 ${
            isDarkTheme ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className={`w-20 h-px mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
          } bg-gradient-to-r from-transparent via-emerald-500 to-transparent`}></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* About Info Section */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:translate-y-[-4px] ${
              isDarkTheme
                ? "bg-gray-800/50 border-gray-700 hover:shadow-xl hover:shadow-emerald-500/10"
                : "bg-white/80 border-gray-200 hover:shadow-xl hover:shadow-emerald-500/20"
            }`}>
              {/* Section Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                  <h3 className={`text-2xl font-medium ${
                    isDarkTheme ? 'text-white' : 'text-gray-900'
                  }`}>
                    Professional Info
                  </h3>
                </div>
              </div>

              {/* About Text */}
              <div className={`space-y-4 text-base leading-relaxed font-light ${
                isDarkTheme ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p>
                  I am a <span className="font-medium text-emerald-600">Full Stack Web Developer</span> specializing in building 
                  modern websites and web applications that contribute to the overall success of products. 
                </p>
                <p>
                  With expertise in the <span className="font-medium text-teal-600">MERN stack</span> and modern development practices, 
                  I create scalable, user-friendly solutions that solve real-world problems.
                </p>
                <p>
                  I'm passionate about sharing knowledge with the developer community and am always eager to 
                  take on new challenges that allow me to learn, grow, and contribute meaningfully to innovative projects.
                </p>
              </div>

              {/* Contact CTA */}
              <div className="mt-8">
                <button className={`group px-6 py-3 rounded-full font-light transition-all duration-300 hover:translate-y-[-2px] ${
                  isDarkTheme
                    ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30"
                    : "bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30"
                }`}>
                  <span className="flex items-center gap-2">
                    Let's Connect
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:translate-y-[-4px] ${
              isDarkTheme
                ? "bg-gray-800/50 border-gray-700 hover:shadow-xl hover:shadow-emerald-500/10"
                : "bg-white/80 border-gray-200 hover:shadow-xl hover:shadow-emerald-500/20"
            }`}>
              {/* Section Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></div>
                  <h3 className={`text-2xl font-medium ${
                    isDarkTheme ? 'text-white' : 'text-gray-900'
                  }`}>
                    Technical Skills
                  </h3>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative"
                    style={{ 
                      transitionDelay: `${600 + index * 50}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(12px)'
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <button className={`w-full p-3 rounded-lg text-sm font-light transition-all duration-300 hover:translate-y-[-2px] border ${
                      isDarkTheme
                        ? "bg-gray-700/50 text-gray-200 border-gray-600 hover:bg-gray-600/50 hover:shadow-md"
                        : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-white hover:shadow-md"
                    }`}>
                      <span className="relative z-10">{skill.name}</span>
                      
                      {/* Hover overlay with category color */}
                      <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r ${getCategoryColor(skill.category)}`}></div>
                    </button>

                    {/* Skill level tooltip */}
                    {hoveredSkill === skill.name && (
                      <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap z-20 ${
                        isDarkTheme
                          ? "bg-gray-900 text-white border border-gray-700"
                          : "bg-white text-gray-900 border border-gray-200 shadow-lg"
                      }`}>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 w-16 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} transition-all duration-500`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span>{skill.level}%</span>
                        </div>
                        {/* Tooltip arrow */}
                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${
                          isDarkTheme ? "bg-gray-900 border-r border-b border-gray-700" : "bg-white border-r border-b border-gray-200"
                        }`}></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Skills Legend */}
              <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600">
                <div className="flex flex-wrap gap-3 text-xs">
                  {[
                    { category: "frontend", label: "Frontend", color: "blue" },
                    { category: "backend", label: "Backend", color: "green" },
                    { category: "database", label: "Database", color: "purple" },
                    { category: "cloud", label: "Cloud", color: "orange" },
                    { category: "devops", label: "DevOps", color: "red" },
                    { category: "tools", label: "Tools", color: "gray" },
                  ].map(({ category, label, color }) => (
                    <div key={category} className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full bg-${color}-500`}></div>
                      <span className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
          }
          33% { 
            transform: translate(8px, -8px) rotate(1deg); 
          }
          66% { 
            transform: translate(-5px, 5px) rotate(-0.5deg); 
          }
        }
        
        @keyframes float-gentle-reverse {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
          }
          33% { 
            transform: translate(-10px, 8px) rotate(-1deg); 
          }
          66% { 
            transform: translate(6px, -6px) rotate(0.5deg); 
          }
        }
        
        .animate-float-gentle {
          animation: float-gentle 10s ease-in-out infinite;
        }
        
        .animate-float-gentle-reverse {
          animation: float-gentle-reverse 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;