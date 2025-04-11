import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter,FaGithub, FaSquareInstagram } from "react-icons/fa6";
import "aos/dist/aos.css";
import AOS from "aos";
import emailjs from "@emailjs/browser";

const Contact = ({ isDarkTheme }) => {
  const [value, setValues] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false); 
  const [isSent, setIsSent] = useState(false); 

  AOS.init({
    duration: 1000,
    once: true,
  });

  function ChangeHandler(e) {
    setValues({
      ...value,
      [e.target.name]: e.target.value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsSending(true);

   
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID, 
        {
          name: value.name,       
          email: value.email,    
          contact: value.contact,
          message: value.message,
        },
        import.meta.env.VITE_PUBLIC_ID,
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSending(false);
          setIsSent(true);
        },
        (error) => {
          console.error("FAILED...", error);
          setIsSending(false);
        }
      );
  }

  return (
    <div
      className={`font-serif w-full  min-h-screen flex flex-col items-center justify-center px-4 ${
        isDarkTheme
          ? "bg-gray-900 text-emerald-300"
          : "bg-gray-100 text-emerald-600"
      }`}
      id="contact"
      data-aos="fade-up"
    >
      <h1 className="text-4xl font-bold mb-10">Contact Me...</h1>

      <div
        className="flex flex-col  md:flex-row justify-center items-start md:space-x-10 space-y-8 md:space-y-0"
        data-aos="fade-up"
      >
       
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center mx-auto ">
      
          <div className="shadow-lg shadow-teal-300 rounded-lg p-6 text-center border border-teal-300">
            <FaLinkedin className="mx-auto text-blue-700 text-5xl mb-4" />
            <h3 className="font-bold text-blue-500">LinkedIn</h3>
            <p className="text-sm">Vishal Rathod</p>
            <a
              href="https://www.linkedin.com/in/vishal-rathod-b739182a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 font-semibold hover:underline"
            >
              Let's Connect
            </a>
          </div>





          <div className="shadow-lg shadow-teal-300 rounded-lg p-6 text-center border border-teal-300">
            <FaGithub className="mx-auto text-blue-400 text-5xl mb-4" />
            <h3 className="font-bold text-blue-400"></h3>Git Hub
            <p className="text-sm">Vishal Rathod</p>
            <a
              href="https://github.com/Rathod-vishal-20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 font-semibold hover:underline"
            >
              Let's Connect
            </a>
          </div>


          <div className="shadow-lg shadow-teal-300 rounded-lg p-6 text-center border border-teal-300">
            <FaSquareXTwitter className="mx-auto text-blue-400 text-5xl mb-4" />
            <h3 className="font-bold text-blue-400">Twitter</h3>
            <p className="text-sm">Vishal Rathod</p>
            <a
              href="https://x.com/VishalSR191918"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 font-semibold hover:underline"
            >
              Let's Connect
            </a>
          </div>

        
          <div className="shadow-lg shadow-teal-300 rounded-lg p-6 text-center border border-teal-300">
            <FaSquareInstagram className="mx-auto text-pink-400 text-5xl mb-4" />
            <h3 className="font-bold text-pink-400">Instagram</h3>
            <p className="text-sm">vishalsr</p>
            <a
              href="https://www.instagram.com/vishalsr20/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-700 font-semibold hover:underline"
            >
              Let's Connect
            </a>
          </div>
        </div>

        
        <div
          className="w-full max-w-md shadow-teal-300 mb-20 bg-gray-700 p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={submitHandler} className="space-y-4">
            <input
              type="text"
              name="name"
              onChange={ChangeHandler}
              placeholder="Enter Full Name"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring focus:ring-emerald-500"
            />
            <input
              type="email"
              name="email"
              onChange={ChangeHandler}
              placeholder="Enter E-mail"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring focus:ring-emerald-500"
            />
            <input
              type="number"
              name="contact"
              onChange={ChangeHandler}
              placeholder="Enter Contact Number"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring focus:ring-emerald-500"
            />
            <textarea
              name="message"
              onChange={ChangeHandler}
              placeholder="Enter Message"
              rows="4"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring focus:ring-emerald-500"
            ></textarea>
            <button
              type="submit"
              className={`w-full py-2 text-white font-bold rounded transition ${
                isSending
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-emerald-500 hover:bg-emerald-600"
              }`}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Submit"}
            </button>
            {isSent && (
              <p className="text-emerald-500 mt-4 text-center font-semibold">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
