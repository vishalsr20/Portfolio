import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import shop from "../assets/ShopEssential.png";
import razorpay from "../assets/Razorpay.png";
import todo from "../assets/Todo.png";
import clever from "../assets/clevarbook.png";
import music from "../assets/music.png";
import health from "../assets/health.png";

const Project = ({ isDarkTheme }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div
      className={`flex justify-center items-center mx-auto font-serif ${
        isDarkTheme
          ? "bg-gray-900 text-emerald-300"
          : "bg-gray-100 text-emerald-600"
      }`}
    >
      <div>
        <h1 className="text-4xl flex justify-center font-bold mb-10" data-aos="fade-up">
          Projects
        </h1>
        <div
          className="flex gap-5 mb-10 justify-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <button className="hover:bg-green-600 rounded-lg px-8 shadow-md text-gray-100 text-xl font-sans shadow-emerald-400">
            All
          </button>
          <button className="hover:bg-green-600 rounded-lg px-8 shadow-md text-gray-100 text-xl font-sans shadow-emerald-400">
            ReactJs
          </button>
          <button className="hover:bg-green-600 rounded-lg px-8 shadow-md text-gray-100 text-xl font-sans shadow-emerald-400">
            NextJs
          </button>
          <button className="hover:bg-green-600 px-8 shadow-md text-gray-100 text-xl font-sans shadow-emerald-400 rounded-lg">
            Mern
          </button>
        </div>
        <div
          className="grid grid-cols-1 mx-auto justify-center items-center gap-8 md:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
        >
          {/* Project Cards */}
          {[{ img: shop, desc: "MERN Stack", link: "https://shop-essential-sxmu.vercel.app/" },
            { img: razorpay, desc: "Tailwind", link: "https://razorpayclone-self.vercel.app/" },
            { img: todo, desc: "HTML, CSS, JS", link: "https://razorpayclone-self.vercel.app/" },
            { img: clever, desc: "ReactJS", link: "https://razorpayclone-self.vercel.app/" },
            { img: music, desc: "NextJS", link: "https://github.com/Rathod-vishal-20/musicapp" },
            { img: health, desc: "NextJS", link: "https://github.com/Rathod-vishal-20/HealthCare-App" }].map((project, index) => (
            <div
              key={index}
              className="relative hover:scale-105 flex mx-auto px-4 justify-center items-center hover:cursor-pointer shadow-lg shadow-emerald-400 w-[450px] h-[300px] transition-transform duration-300 ease-in-out"
              data-aos="flip-left"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={project.img}
                alt="Project Screenshot"
                className="border w-full h-full rounded object-cover border-teal-500 transition-transform duration-300 ease-linear"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-200 ease-linear rounded">
                <div className="text-center">
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  <a
                    href={project.link}
                    className="bg-teal-600 rounded-md py-3 px-10 text-white"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
