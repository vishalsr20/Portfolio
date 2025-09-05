import React, { useState, useEffect } from "react";
import shop from "../assets/ShopEssential.png";
import razorpay from "../assets/Razorpay.png";
import todo from "../assets/Todo.png";
import clever from "../assets/clevarbook.png";
import music from "../assets/music.png";
import health from "../assets/health.png";
import blog from "../assets/blog.png"
const Project = ({ isDarkTheme }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Sample project data (you'll replace with your actual imports)
  const projects = [
    { id: 1, title: "ShopEssential", tech: "MERN Stack", category: "Mern", link: "https://shopessential-fronted.onrender.com/", img: shop },
    { id: 2, title: "Tech Blog", tech: "MERN", category: "Mern", link: "https://techthinkersblog.onrender.com/", img: blog },
    { id: 3, title: "Razorpay Clone", tech: "Tailwind CSS", category: "ReactJs", link: "https://razorpayclone-self.vercel.app/", img:razorpay },
    { id: 4, title: "Healthcare App", tech: "NextJS", category: "NextJs", link: "https://github.com/Rathod-vishal-20/HealthCare-App", img: health },
    { id: 5, title: "Todo App", tech: "Vanilla JS", category: "ReactJs", link: "https://todo-app-drab-three-27.vercel.app/", img: todo },
    { id: 6, title: "Clevarbook", tech: "ReactJS", category: "ReactJs", link: "https://creast.vercel.app/", img: clever },
    { id: 7, title: "Music App", tech: "NextJS", category: "NextJs", link: "https://github.com/Rathod-vishal-20/musicapp", img: music },
  ];

  const filters = ["All", "ReactJs", "NextJs", "Mern"];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div
      id="projects"
      className={`relative py-20 px-4 sm:px-8 lg:px-16 font-serif transition-all duration-1000 ${
        isDarkTheme
          ? "bg-gradient-to-b from-gray-800 to-gray-900 text-emerald-300"
          : "bg-gradient-to-b from-white to-gray-50 text-emerald-700"
      }`}
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className={`absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl ${
          isDarkTheme ? 'bg-emerald-500/5' : 'bg-emerald-500/3'
        } animate-float-gentle`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light mb-4 ${
            isDarkTheme ? 'text-white' : 'text-gray-900'
          }`}>
            My Projects
          </h2>
          <div className={`w-20 h-px mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
          } bg-gradient-to-r from-transparent via-emerald-500 to-transparent`}></div>
          <p className={`mt-6 text-lg font-light max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            A collection of projects that showcase my skills in modern web development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {filters.map((filter, idx) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3  font-light text-sm transition-all duration-300 hover:translate-y-[-2px] ${
                selectedFilter === filter
                  ? isDarkTheme
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                    : "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                  : isDarkTheme
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm"
              }`}
              style={{ 
                transitionDelay: `${400 + idx * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)'
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:translate-y-[-8px] hover:shadow-xl ${
                isDarkTheme
                  ? "bg-gray-800 border border-gray-700 hover:shadow-emerald-500/10"
                  : "bg-white border border-gray-100 hover:shadow-emerald-500/20"
              }`}
              style={{ 
                transitionDelay: `${600 + index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br transition-all duration-500 ${
                  isDarkTheme 
                    ? "from-gray-700 to-gray-600" 
                    : "from-emerald-100 to-teal-100"
                }`}>
                  {/* Placeholder for project image */}
                  <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
                          hoveredProject === project.id ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="absolute bottom-4 left-4 right-4">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 font-medium text-sm transition-transform duration-200 hover:scale-105"
                          >
                            <span>View Live</span>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`text-6xl ${
                      isDarkTheme ? 'text-gray-500' : 'text-emerald-300'
                    }`}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-16 h-16">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 font-medium text-sm transition-transform duration-200 hover:scale-105"
                    >
                      <span>View Live</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className={`text-xl font-medium mb-2 transition-colors duration-300 group-hover:text-emerald-600 ${
                  isDarkTheme ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm font-light ${
                  isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.tech}
                </p>
                
                {/* Category badge */}
                <div className="mt-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-light ${
                    isDarkTheme
                      ? "bg-emerald-900/30 text-emerald-700 border border-emerald-900/50"
                      : "bg-emerald-100 text-emerald-700 border border-emerald-200"
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
          }
          33% { 
            transform: translate(5px, -5px) rotate(0.5deg); 
          }
          66% { 
            transform: translate(-3px, 3px) rotate(-0.5deg); 
          }
        }
        
        .animate-float-gentle {
          animation: float-gentle 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Project;