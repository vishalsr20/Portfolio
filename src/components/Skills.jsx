import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = ({ isDarkTheme }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <div
      className={`font-serif py-20 px-4 w-full  md:px-8 lg:px-10 ${
        isDarkTheme ? "bg-gray-900 text-emerald-300" : "bg-gray-100 text-emerald-600"
      }`}
    >
        <h1 className="text-4xl font-bold  flex justify-center mb-10">About Me</h1>
      <div className="w-full mx-auto shadow-sm shadow-teal-300 rounded flex flex-col lg:flex-row gap-6 lg:gap-10">
      
        <div
          className="lg:w-1/2 border border-gray-300 p-6 rounded-lg bg-opacity-25 shadow-lg"
          data-aos="fade-up"
        >
          <h2 className="w-[30%] bg-green-500 text-gray-100 py-2 px-4  rounded
          text-4xl font-bold  flex justify-center
          ">
            Info
          </h2>
          <p className="mt-4 text-gray-400">
            I am a Full Stack Web Developer specializing in building Websites and Web Applications
            that contribute to the overall success of the product. You can check out some of my work
            in the Projects section. I also enjoy sharing insights and content based on my
            experience in Web Development to help others in the Dev Community. Feel free to Connect
            or Follow me on LinkedIn, where I regularly post useful content related to Web
            Development and Programming. I am always open to Job Opportunities where I can
            contribute, learn, and grow. If you have a great opportunity that aligns with my skills
            and experience, don't hesitate to reach out to me!
          </p>
        </div>

       
        <div
          className="lg:w-1/2 border border-gray-300 p-6 rounded-lg bg-opacity-25 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-4xl font-bold bg-green-500 text-gray-100 py-2 px-4 inline-block rounded">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "MongoDB",
              "ExpressJs",
              "ReactJs",
              "NodeJs",
              "Tailwind",
              "NextJs",
              "MERN",
              "Aeternity UI",
              "Firebase",
            ].map((skill, index) => (
              <button
                key={skill}
                className="hover:bg-green-500 shadow-lg shadow-emerald-300  text-teal-300 py-2 px-4 rounded-lg hover:shadow-lg transition ease-in-out duration-200"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
