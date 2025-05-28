import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Home = ({ isDarkTheme }) => {
  const phrases = ["Software Developer", "Problem Solver"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, phrases]);

  return (
    <div
      id="home"
<<<<<<< HEAD
      className={`font-serif w-full flex justify-center items-center mx-auto py-20 px-4 sm:px-8 lg:px-16 text-center ${
        isDarkTheme ? "bg-gray-900 text-emerald-300" : "bg-gray-100 text-emerald-600"
      }`}
      style={{overflowX:"hidden"}}
    >
      <div className="h-full w-full mx-auto flex flex-col items-center space-y-8">
        <p className="text-lg sm:text-xl lg:text-2xl">Welcome to my portfolio!</p>
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Hello, I'm <span className="text-teal-500">Vishal Rathod</span>
        </p>
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-6">
          I am a <span className="text-teal-400">{currentText}|</span>
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mt-4">
          Hello! I'm Vishal Rathod, a passionate Software Developer and a dedicated Problem Solver. With a strong
          foundation in programming and a knack for building innovative solutions, I thrive on challenges that demand
          creative problem-solving skills. My journey in the world of technology has been fueled by my love for coding
          and my drive to continuously learn and evolve.
=======
      className={`font-serif py-20 px-4 sm:px-8 lg:px-16 text-center  ${
        isDarkTheme ? "bg-gray-900 text-emerald-300" : "bg-gray-100 text-emerald-600"
      }`}
      style={{ overflowX: "hidden" }}
    >
      <div className="w-[90%] h-full mx-auto flex flex-col items-center space-y-8">
     
        <p className="text-lg sm:text-xl lg:text-2xl">Welcome to my portfolio!</p>

  
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Hello, I'm <span className="text-teal-500">Vishal Rathod</span>
        </p>

    
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-6">
          I am a <span className="text-teal-400">{currentText}|</span>
        </p>

      
        <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mt-4">
          Hello! I'm Vishal Rathod, a passionate Software Developer and a dedicated Problem Solver. With a strong foundation in programming and a knack for building innovative solutions, I thrive on challenges that demand creative problem-solving skills. My journey in the world of technology has been fueled by my love for coding and my drive to continuously learn and evolve.
>>>>>>> 6b36d154910b953f7b3505d093d52d78eb979771
        </p>

       
        <button className="mt-10 bg-green-500 px-8 py-3 text-white font-semibold rounded-lg hover:bg-green-600 transition-all">
          <Link to="projects" smooth={true} duration={500}>
            View Projects
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
