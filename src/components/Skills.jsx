import React, { useState, useEffect } from "react";
import { Code2, Database, Cloud, Package, Terminal, Wrench, Layers, Award, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

const Skills = ({ isDarkTheme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "HTML", category: "frontend", level: 90 },
    { name: "CSS", category: "frontend", level: 85 },
    { name: "JavaScript", category: "frontend", level: 88 },
    { name: "TypeScript", category: "frontend", level: 85 },
    { name: "ReactJs", category: "frontend", level: 90 },
    { name: "NextJs", category: "frontend", level: 85 },
    { name: "Tailwind", category: "frontend", level: 88 },
    { name: "MongoDB", category: "database", level: 80 },
    { name: "SQL", category: "database", level: 75 },
    { name: "ExpressJs", category: "backend", level: 82 },
    { name: "NodeJs", category: "backend", level: 85 },
    { name: "RabbitMQ", category: "backend", level: 80 },
    { name: "Microservices", category: "backend", level: 82 },
    { name: "API Polling", category: "backend", level: 78 },
    { name: "MERN", category: "fullstack", level: 88 },
    { name: "Firebase", category: "cloud", level: 78 },
    { name: "AWS", category: "cloud", level: 70 },
    { name: "Docker", category: "devops", level: 72 },
    { name: "GitHub", category: "tools", level: 85 },
    { name: "Aeternity UI", category: "frontend", level: 75 },
    { name: "AI", category: "fullstack", level: 75 },
  ];

  const categories = [
    { id: "all", label: "All Skills", icon: Layers, color: "emerald" },
    { id: "frontend", label: "Frontend", icon: Code2, color: "blue" },
    { id: "backend", label: "Backend", icon: Terminal, color: "green" },
    { id: "database", label: "Database", icon: Database, color: "purple" },
    { id: "cloud", label: "Cloud", icon: Cloud, color: "orange" },
    { id: "devops", label: "DevOps", icon: Package, color: "red" },
    { id: "tools", label: "Tools", icon: Wrench, color: "gray" },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      frontend: "from-blue-500 to-blue-600",
      backend: "from-green-500 to-green-600",
      database: "from-purple-500 to-purple-600",
      cloud: "from-orange-500 to-orange-600",
      devops: "from-red-500 to-red-600",
      tools: "from-gray-500 to-gray-600",
      fullstack: "from-emerald-500 to-emerald-600",
    };
    return colors[category] || colors.frontend;
  };

  const getCategoryBgColor = (category) => {
    const colors = {
      frontend: isDarkTheme ? "bg-blue-500/10" : "bg-blue-50",
      backend: isDarkTheme ? "bg-green-500/10" : "bg-green-50",
      database: isDarkTheme ? "bg-purple-500/10" : "bg-purple-50",
      cloud: isDarkTheme ? "bg-orange-500/10" : "bg-orange-50",
      devops: isDarkTheme ? "bg-red-500/10" : "bg-red-50",
      tools: isDarkTheme ? "bg-gray-500/10" : "bg-gray-50",
      fullstack: isDarkTheme ? "bg-emerald-500/10" : "bg-emerald-50",
    };
    return colors[category] || colors.frontend;
  };

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const experiences = [
    {
      company: "Veloitsolution",
      location: "Mumbai, India",
      role: "Full Stack Developer Intern",
      duration: "Jun 2024 - Nov 2024",
      type: "5 Months Internship",
      achievements: [
        {
          title: "End-to-End Development",
          description: "Built core modules of a full-stack travel booking platform using the MERN stack. Developed responsive UI components, backend APIs, and secure authentication flows (JWT, role-based access)."
        },
        {
          title: "Backend Engineering",
          description: "Designed and optimized REST APIs in Node.js and Express.js, improving database query performance by 35%. Implemented pagination, filtering, and secure data-access layers to enhance scalability."
        },
        {
          title: "Frontend Optimization",
          description: "Refactored React components for reusability and performance, implemented Context API for global state management, and improved UI/UX using TailwindCSS and Framer Motion."
        },
        {
          title: "Cloud & Deployment",
          description: "Assisted in deploying the application using AWS EC2 and Vercel, integrating CI/CD pipelines with GitHub Actions for automated deployments."
        },
        {
          title: "Team Collaboration",
          description: "Worked in an Agile environment, participated in daily stand-ups, and collaborated with backend, QA, and design teams using Git, JIRA, and Figma."
        }
      ]
    }
  ];

  return (
    <div
      id="skills"
      className={`relative py-24 px-4 sm:px-8 lg:px-16 font-sans overflow-hidden transition-all duration-1000 ${
        isDarkTheme
          ? "bg-gray-900"
          : "bg-gradient-to-b from-white via-gray-50 to-white"
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float-1 ${
          isDarkTheme ? 'bg-emerald-500/5' : 'bg-emerald-300/20'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-2 ${
          isDarkTheme ? 'bg-blue-500/5' : 'bg-blue-300/20'
        }`} />
        <div className={`absolute top-1/2 right-1/3 w-72 h-72 rounded-full blur-3xl animate-float-3 ${
          isDarkTheme ? 'bg-purple-500/5' : 'bg-purple-300/15'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <GraduationCap className="w-4 h-4 text-emerald-500" />
            <span className={`text-sm font-medium ${
              isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'
            }`}>
              About & Expertise
            </span>
          </div>
          
          <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r ${
            isDarkTheme 
              ? 'from-white via-emerald-200 to-white' 
              : 'from-gray-900 via-emerald-600 to-gray-900'
          } bg-clip-text text-transparent`}>
            Skills & Experience
          </h2>
          
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${
            isDarkTheme ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Passionate about building scalable solutions with modern technologies
          </p>
        </div>

        {/* Stats Grid - Removed as requested */}

        {/* Experience Section */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
            isDarkTheme
              ? 'bg-gradient-to-br from-gray-800/80 to-gray-800/50 border-gray-700/50'
              : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg'
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-3xl font-bold ${
                isDarkTheme ? 'text-white' : 'text-gray-900'
              }`}>
                Professional Experience
              </h3>
            </div>

            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 mt-2" />
                
                <div className="ml-8 pb-8 border-l-2 border-gray-300 dark:border-gray-700 pl-8">
                  {/* Company Header */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div>
                        <h4 className={`text-2xl font-bold mb-1 ${
                          isDarkTheme ? 'text-white' : 'text-gray-900'
                        }`}>
                          {exp.role}
                        </h4>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={`text-lg font-semibold text-emerald-600`}>
                            {exp.company}
                          </span>
                          <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                            • {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                          isDarkTheme
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                            : 'bg-blue-100 text-blue-700 border border-blue-300'
                        }`}>
                          {exp.duration}
                        </div>
                        <div className={`text-xs mt-2 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    {exp.achievements.map((achievement, achieveIdx) => (
                      <div
                        key={achieveIdx}
                        className={`p-4 rounded-xl transition-all duration-300 hover:translate-x-2 ${
                          isDarkTheme
                            ? 'bg-gray-900/50 border border-gray-700/50 hover:bg-gray-900/70'
                            : 'bg-white border border-gray-200 hover:shadow-md'
                        }`}
                      >
                        <div className="flex gap-3">
                          <div className={`mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full ${
                            isDarkTheme ? 'bg-emerald-500' : 'bg-emerald-600'
                          }`} />
                          <div className="flex-1">
                            <h5 className={`font-semibold mb-2 text-base ${
                              isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'
                            }`}>
                              {achievement.title}
                            </h5>
                            <p className={`text-sm leading-relaxed ${
                              isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Used */}
                  <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <p className={`text-xs font-medium mb-3 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
                      TECHNOLOGIES USED
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["MERN Stack", "React", "Node.js", "Express.js", "MongoDB", "JWT", "TailwindCSS", "Framer Motion", "AWS EC2", "Vercel", "GitHub Actions", "Git", "JIRA", "Figma"].map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105 ${
                            isDarkTheme
                              ? 'bg-gray-800 text-gray-300 border border-gray-700'
                              : 'bg-gray-50 text-gray-700 border border-gray-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* About Section - Takes 1 column */}
          <div className={`lg:col-span-1 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className={`h-full p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:translate-y-[-4px] ${
              isDarkTheme
                ? "bg-gradient-to-br from-gray-800/80 to-gray-800/50 border-gray-700/50 hover:shadow-xl hover:shadow-emerald-500/10"
                : "bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:shadow-xl hover:shadow-emerald-500/20"
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${
                  isDarkTheme ? 'text-white' : 'text-gray-900'
                }`}>
                  About Me
                </h3>
              </div>

              <div className={`space-y-4 text-base leading-relaxed ${
                isDarkTheme ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p>
                  I am a <span className="font-semibold text-emerald-600">Full Stack Developer</span> specializing in building 
                  modern, scalable web applications that drive business success.
                </p>
                <p>
                  With deep expertise in the <span className="font-semibold text-blue-600">MERN stack</span>, 
                  <span className="font-semibold text-purple-600"> microservices architecture</span>, and 
                  <span className="font-semibold text-green-600"> message queuing systems</span>, I create solutions that solve real-world problems.
                </p>
                <p>
                  Passionate about <span className="font-semibold text-orange-600">competitive programming</span> with 350+ problems solved on LeetCode, 
                  constantly pushing the boundaries of what's possible with code.
                </p>
              </div>

              {/* <div id="contact"
               className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700">
                <button className={`w-full group px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:translate-y-[-2px] ${
                  isDarkTheme
                    ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:shadow-lg hover:shadow-emerald-500/30"
                    : "bg-gradient-to-r from-emerald-500 to-emerald-400 text-white hover:shadow-lg hover:shadow-emerald-500/30"
                }`}>
                  <span className="flex items-center justify-center gap-2">
                    Let's Connect
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div> */}
            </div>
          </div>

          {/* Skills Section - Takes 2 columns */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className={`h-full p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
              isDarkTheme
                ? "bg-gradient-to-br from-gray-800/80 to-gray-800/50 border-gray-700/50 hover:shadow-xl hover:shadow-emerald-500/10"
                : "bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:shadow-xl hover:shadow-emerald-500/20"
            }`}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${
                    isDarkTheme ? 'text-white' : 'text-gray-900'
                  }`}>
                    Technical Skills
                  </h3>
                </div>
                <div className={`text-sm font-medium ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  {filteredSkills.length} Skills
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      activeCategory === cat.id
                        ? isDarkTheme
                          ? `bg-${cat.color}-500/20 text-${cat.color}-400 border border-${cat.color}-500/30 shadow-lg`
                          : `bg-${cat.color}-100 text-${cat.color}-700 border border-${cat.color}-300 shadow-sm`
                        : isDarkTheme
                          ? "bg-gray-700/50 text-gray-400 border border-gray-600 hover:bg-gray-700"
                          : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative"
                    style={{ 
                      transitionDelay: `${index * 30}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(12px)'
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className={`relative p-4 rounded-xl text-center transition-all duration-300 hover:translate-y-[-4px] border ${getCategoryBgColor(skill.category)} ${
                      isDarkTheme
                        ? "border-gray-600 hover:border-gray-500 hover:shadow-lg"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}>
                      <div className={`text-sm font-semibold mb-1 ${
                        isDarkTheme ? 'text-white' : 'text-gray-900'
                      }`}>
                        {skill.name}
                      </div>
                      
                      {/* Progress Ring */}
                      <div className="flex justify-center">
                        <div className="relative w-12 h-12">
                          <svg className="transform -rotate-90 w-12 h-12">
                            <circle
                              cx="24"
                              cy="24"
                              r="20"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="none"
                              className={isDarkTheme ? 'text-gray-700' : 'text-gray-200'}
                            />
                            <circle
                              cx="24"
                              cy="24"
                              r="20"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 20}`}
                              strokeDashoffset={`${2 * Math.PI * 20 * (1 - skill.level / 100)}`}
                              className={`text-${skill.category === 'frontend' ? 'blue' : skill.category === 'backend' ? 'green' : skill.category === 'database' ? 'purple' : skill.category === 'cloud' ? 'orange' : skill.category === 'devops' ? 'red' : 'gray'}-500 transition-all duration-1000`}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className={`absolute inset-0 flex items-center justify-center text-xs font-bold ${
                            isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {skill.level}%
                          </div>
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${getCategoryColor(skill.category)} blur-sm -z-10`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Legend */}
        <div className={`text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className={`inline-flex flex-wrap justify-center gap-4 p-6 rounded-2xl backdrop-blur-sm ${
            isDarkTheme
              ? 'bg-gray-800/50 border border-gray-700/50'
              : 'bg-white border border-gray-200 shadow-sm'
          }`}>
            {categories.filter(cat => cat.id !== 'all').map((cat) => (
              <div key={cat.id} className="flex items-center gap-2">
                <cat.icon className={`w-4 h-4 text-${cat.color}-500`} />
                <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  {cat.label}
                </span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  isDarkTheme ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                  {skills.filter(s => s.category === cat.id).length}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.05); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -20px) rotate(5deg); }
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
      `}</style>
    </div>
  );
};

export default Skills;