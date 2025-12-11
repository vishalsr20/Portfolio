import React, { useState, useEffect } from "react";
import { ExternalLink, Github, Code, Sparkles, Zap } from "lucide-react";
import shop from "../assets/ShopEssential.png";
import razorpay from "../assets/Razorpay.png";
import todo from "../assets/Todo.png";
import clever from "../assets/clevarbook.png";
import music from "../assets/music.png";
import health from "../assets/health.png";
import blog from "../assets/blog.png";
import micro from "../assets/microservices.jpg";
import zomareel from "../assets/zomareel.png";

const Project = ({ isDarkTheme }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeView, setActiveView] = useState("grid"); // grid or featured

  const projects = [
    { 
      id: 0, 
      title: "Zomareel", 
      tech: "MERN Stack", 
      category: "Mern", 
      link: "https://zomareel-com.onrender.com/",
      img: zomareel,
      description: "Full-stack food delivery platform with real-time order tracking",
      featured: true,
      tags: ["MongoDB", "Express", "React", "Node.js"]
    },
    { 
      id: 1, 
      title: "ShopEssential", 
      tech: "MERN Stack", 
      category: "Mern", 
      link: "https://shopessential-fronted.onrender.com/",
      img: shop,
      description: "E-commerce platform with payment integration and inventory management",
      featured: true,
      tags: ["E-commerce", "Payment Gateway", "Admin Panel"]
    },
    { 
      id: 2, 
      title: "Tech Blog", 
      tech: "MERN", 
      category: "Mern", 
      link: "https://techthinkersblog.onrender.com/",
      img: blog,
      featured: true,
      description: "Modern blogging platform with rich text editor and commenting system",
      tags: ["Blog", "CMS", "Authentication"]
    },
    { 
      id: 4, 
      title: "RideEasy – Microservices", 
      tech: "Node.js, RabbitMQ", 
      category: "Backend", 
      link: "https://github.com/vishalsr20/MicroServices",
      img: micro,
      description: "Scalable ride-sharing backend with message queuing",
      featured: true,
      tags: ["Microservices", "RabbitMQ", "Architecture"]
    },
    { 
      id: 3, 
      title: "Razorpay Clone", 
      tech: "Tailwind CSS", 
      category: "ReactJs", 
      link: "https://razorpayclone-self.vercel.app/",
      img: razorpay,
      description: "Pixel-perfect recreation of Razorpay's landing page",
      tags: ["Tailwind", "Responsive", "Animation"]
    },

    { 
      id: 5, 
      title: "Healthcare App", 
      tech: "NextJS", 
      category: "NextJs", 
      link: "https://github.com/Rathod-vishal-20/HealthCare-App",
      img: health,
      description: "Patient management system with appointment scheduling",
      tags: ["Next.js", "Healthcare", "SSR"]
    },
    { 
      id: 6, 
      title: "Todo App", 
      tech: "Vanilla JS", 
      category: "ReactJs", 
      link: "https://todo-app-drab-three-27.vercel.app/",
      img: todo,
      description: "Minimalist task management with local storage",
      tags: ["JavaScript", "LocalStorage", "UI/UX"]
    },
    { 
      id: 7, 
      title: "Clevarbook", 
      tech: "ReactJS", 
      category: "ReactJs", 
      link: "https://creast.vercel.app/",
      img: clever,
      description: "Social platform for book enthusiasts and readers",
      tags: ["React", "Social", "Books"]
    },
    { 
      id: 8, 
      title: "Music App", 
      tech: "NextJS", 
      category: "NextJs", 
      link: "https://github.com/Rathod-vishal-20/musicapp",
      img: music,
      description: "Streaming music application with playlist management",
      tags: ["Next.js", "Audio", "Streaming"]
    },
  ];

  const filters = ["All", "ReactJs", "NextJs", "Mern", "Backend"];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const featuredProjects = projects.filter(p => p.featured);

  const ProjectCard = ({ project, index, isFeatured = false }) => (
    <div
      className={`group relative overflow-hidden transition-all duration-500 ${
        isFeatured 
          ? 'col-span-1 md:col-span-2' 
          : ''
      } ${
        isDarkTheme
          ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-emerald-500/50"
          : "bg-white border border-gray-200 hover:border-emerald-400"
      } rounded-2xl hover:shadow-2xl hover:translate-y-[-4px]`}
      style={{ 
        transitionDelay: `${index * 50}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
      }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Gradient Overlay on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
            isDarkTheme
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              : "bg-emerald-100 text-emerald-700 border border-emerald-300"
          }`}>
            <Sparkles className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}

      {/* Project Image */}
      {project.img && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Image Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${
            hoveredProject === project.id ? 'opacity-100' : 'opacity-60'
          }`} />
          
          {/* Quick View Button on Image */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/95 backdrop-blur-sm rounded-full text-gray-900 font-semibold text-sm shadow-xl hover:bg-white transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Preview Live</span>
            </a>
          </div>
        </div>
      )}

      <div className={`p-6 ${isFeatured ? 'md:p-8' : ''}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className={`text-2xl font-semibold mb-2 group-hover:text-emerald-500 transition-colors ${
              isDarkTheme ? 'text-white' : 'text-gray-900'
            }`}>
              {project.title}
            </h3>
            <p className={`text-sm mb-3 ${
              isDarkTheme ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {project.description}
            </p>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Code className={`w-4 h-4 ${isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'}`} />
          <span className={`text-sm font-medium ${
            isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'
          }`}>
            {project.tech}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                isDarkTheme
                  ? "bg-gray-700/50 text-gray-300 group-hover:bg-gray-700"
                  : "bg-gray-100 text-gray-700 group-hover:bg-gray-200"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
              isDarkTheme
                ? "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/20"
                : "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/30"
            }`}
          >
            <span>View Live</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          
          {project.link.includes('github.com') && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                isDarkTheme
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
              }`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Hover Indicator */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 transform origin-left transition-transform duration-500 ${
          hoveredProject === project.id ? 'scale-x-100' : 'scale-x-0'
        }`} />
      </div>
    </div>
  );

  return (
    <div
      id="projects"
      className={`relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden transition-colors duration-500 ${
        isDarkTheme
          ? "bg-gray-900"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-float-slow ${
          isDarkTheme ? 'bg-emerald-500/5' : 'bg-emerald-300/20'
        }`} />
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float-slower ${
          isDarkTheme ? 'bg-blue-500/5' : 'bg-blue-300/20'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Zap className="w-4 h-4 text-emerald-500" />
            <span className={`text-sm font-medium ${
              isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'
            }`}>
              Portfolio Showcase
            </span>
          </div>
          
          <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r ${
            isDarkTheme 
              ? 'from-white via-emerald-200 to-white' 
              : 'from-gray-900 via-emerald-600 to-gray-900'
          } bg-clip-text text-transparent`}>
            Featured Projects
          </h2>
          
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${
            isDarkTheme ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Explore my latest work in full-stack development, microservices architecture, 
            and modern web applications
          </p>
        </div>

        {/* View Toggle */}
        <div className={`flex justify-center gap-4 mb-12 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <button
            onClick={() => setActiveView("grid")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeView === "grid"
                ? isDarkTheme
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                : isDarkTheme
                  ? "bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveView("featured")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
              activeView === "featured"
                ? isDarkTheme
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                : isDarkTheme
                  ? "bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Featured ({featuredProjects.length})
          </button>
        </div>

        {/* Filter Buttons - Only show in grid view */}
        {activeView === "grid" && (
          <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {filters.map((filter, idx) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:translate-y-[-2px] ${
                  selectedFilter === filter
                    ? isDarkTheme
                      ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-600/30"
                      : "bg-gradient-to-r from-emerald-500 to-emerald-400 text-white shadow-lg shadow-emerald-500/30"
                    : isDarkTheme
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {/* Projects Display */}
        <div className={`grid grid-cols-1 ${
          activeView === "featured" ? 'md:grid-cols-2' : 'lg:grid-cols-2 xl:grid-cols-3'
        } gap-6 lg:gap-8`}>
          {(activeView === "featured" ? featuredProjects : filteredProjects).map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isFeatured={activeView === "featured"}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { label: "Projects", value: projects.length, icon: "📁" },
            { label: "Technologies", value: "12+", icon: "⚡" },
            { label: "Code Quality", value: "A+", icon: "✨" },
            { label: "Deployments", value: "100%", icon: "🚀" }
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                isDarkTheme
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200 shadow-sm"
              }`}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className={`text-3xl font-bold mb-1 ${
                isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm ${
                isDarkTheme ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
          }
          50% { 
            transform: translate(30px, -30px) scale(1.1); 
          }
        }
        
        @keyframes float-slower {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
          }
          50% { 
            transform: translate(-30px, 30px) scale(1.05); 
          }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Project;