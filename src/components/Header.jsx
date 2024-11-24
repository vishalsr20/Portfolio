import React, { useState } from "react";
import { Link } from "react-scroll";
import Home from "./Home";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  function ToggleClick() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <>
      {/* Fixed Header */}
      <div
        className={`fixed border rounded border-teal-300 shadow-sm shadow-emerald-200 top-0 left-0 w-full flex flex-col sm:flex-row justify-between sm:justify-evenly font-serif font-bold items-center text-center px-4 py-9 z-50 ${
          isDarkTheme ? "bg-gray-900 text-emerald-300" : "bg-gray-100 text-emerald-600"
        }`}
      >
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6">
          <ul className="flex gap-6">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-sm md:text-2xl hover:text-teal-700 transition-all duration-100 ease-in-out shadow-xl shadow-teal-600 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="text-sm md:text-2xl hover:text-teal-700 transition-all duration-100 ease-in-out shadow-lg shadow-teal-600 cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-sm md:text-2xl hover:text-teal-700 transition-all duration-100 ease-in-out shadow-xl shadow-teal-600 cursor-pointer"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Theme Toggle and Contact */}
        <div className="flex gap-6 items-center">
          <button className="text-sm md:text-lg shadow-lg transition-all duration-100 ease-in-out text-shadow shadow-teal-600 hover:text-teal-700">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-sm md:text-2xl hover:text-teal-700 transition-all duration-100 ease-in-out shadow-xl shadow-teal-600 cursor-pointer"
            >
              Contact
            </Link>
          </button>
          <button
            className="text-sm md:text-lg shadow-lg transition-all duration-100 ease-in-out text-shadow shadow-teal-600 hover:text-teal-700"
            onClick={ToggleClick}
          >
            {isDarkTheme ? <MdOutlineDarkMode /> : <MdDarkMode />}
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="pt-20">
        <div id="home">
          <Home isDarkTheme={isDarkTheme} />
        </div>
        <div id="skills">
          <Skills isDarkTheme={isDarkTheme} />
        </div>
        <div id="projects">
          <div className="">
            <h1>
              <Project isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
            </h1>
          </div>
          <div>
            <Contact isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
