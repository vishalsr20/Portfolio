import { useState, useRef } from "react";
import { FaLinkedin, FaGithub,FaCode , FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FiSend, FiCheck, FiLoader } from "react-icons/fi";
import "aos/dist/aos.css";
import AOS from "aos";
import emailjs from "@emailjs/browser";

const Contact = ({ isDarkTheme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false); 
  const [isSent, setIsSent] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const formRef = useRef();

  AOS.init({
    duration: 1000,
    once: true,
  });

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID, 
        {
          name: formData.name,       
          email: formData.email,    
          contact: formData.contact,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_ID,
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSending(false);
          setIsSent(true);
          setFormData({ name: "", email: "", contact: "", message: "" });
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setIsSending(false);
        }
      );
  }

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      username: "Vishal Rathod",
      url: "https://www.linkedin.com/in/vishal-rathod-b739182a6/",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      hoverColor: "hover:bg-blue-500/20"
    },
    {
      icon: FaGithub,
      name: "GitHub",
      username: "Rathod-vishal-20",
      url: "https://github.com/Rathod-vishal-20",
      color: isDarkTheme ? "from-gray-400 to-gray-500" : "from-gray-700 to-gray-800",
      bgColor: isDarkTheme ? "bg-gray-400/10" : "bg-gray-700/10",
      hoverColor: isDarkTheme ? "hover:bg-gray-400/20" : "hover:bg-gray-700/20"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      username: "VishalSR191918",
      url: "https://x.com/VishalSR191918",
      color: "from-sky-400 to-sky-500",
      bgColor: "bg-sky-400/10",
      hoverColor: "hover:bg-sky-400/20"
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      username: "vishalsr20",
      url: "https://www.instagram.com/vishalsr20/",
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-gradient-to-r from-pink-500/10 to-purple-500/10",
      hoverColor: "hover:from-pink-500/20 hover:to-purple-500/20"
    },
    {
    icon: FaCode, // temporary until you add a custom LeetCode SVG
    name: "LeetCode",
    username: "Vishal718",
    url: "https://leetcode.com/u/Vishal718/",
    color: "from-yellow-500 to-orange-500", // LeetCode brand colors
    bgColor: "bg-gradient-to-r from-yellow-500/10 to-orange-500/10",
    hoverColor: "hover:from-yellow-500/20 hover:to-orange-500/20"
  }
    
  ];

  return (
    <div
      className={`relative min-h-screen w-full px-4 py-20 ${
        isDarkTheme
          ? "bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-900/20"
          : "bg-gradient-to-br from-gray-50 via-white to-emerald-50/50"
      }`}
      id="contact"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${isDarkTheme ? '#10b981' : '#059669'} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
            isDarkTheme 
              ? "from-emerald-400 via-teal-300 to-cyan-400" 
              : "from-emerald-600 via-teal-600 to-cyan-600"
          } bg-clip-text text-transparent`}>
            Let's Connect
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDarkTheme ? "text-gray-300" : "text-gray-600"
          }`}>
            Ready to bring your ideas to life? I'd love to hear from you. 
            Drop me a message or connect through social media.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info & Social Links */}
          <div className="space-y-8" data-aos="fade-right">
            {/* Contact Methods */}
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
              isDarkTheme 
                ? "bg-gray-800/50 border-gray-700/50" 
                : "bg-white/70 border-gray-200/50"
            } shadow-xl`}>
              <h2 className={`text-2xl font-bold mb-6 ${
                isDarkTheme ? "text-emerald-400" : "text-emerald-600"
              }`}>
                Get In Touch
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    isDarkTheme ? "bg-emerald-500/20" : "bg-emerald-100"
                  }`}>
                    <FaEnvelope className={`text-lg ${
                      isDarkTheme ? "text-emerald-400" : "text-emerald-600"
                    }`} />
                  </div>
                  <div>
                    <p className={`font-medium ${
                      isDarkTheme ? "text-gray-300" : "text-gray-700"
                    }`}>
                      Email
                    </p>
                    <p className={`${
                      isDarkTheme ? "text-gray-400" : "text-gray-600"
                    }`}>
                      vishalrathod191918@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    isDarkTheme ? "bg-emerald-500/20" : "bg-emerald-100"
                  }`}>
                    <FaPhone className={`text-lg ${
                      isDarkTheme ? "text-emerald-400" : "text-emerald-600"
                    }`} />
                  </div>
                  <div>
                    <p className={`font-medium ${
                      isDarkTheme ? "text-gray-300" : "text-gray-700"
                    }`}>
                      Phone
                    </p>
                    <p className={`${
                      isDarkTheme ? "text-gray-400" : "text-gray-600"
                    }`}>
                      +91 9867486139
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    isDarkTheme ? "bg-emerald-500/20" : "bg-emerald-100"
                  }`}>
                    <FaMapMarkerAlt className={`text-lg ${
                      isDarkTheme ? "text-emerald-400" : "text-emerald-600"
                    }`} />
                  </div>
                  <div>
                    <p className={`font-medium ${
                      isDarkTheme ? "text-gray-300" : "text-gray-700"
                    }`}>
                      Location
                    </p>
                    <p className={`${
                      isDarkTheme ? "text-gray-400" : "text-gray-600"
                    }`}>
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
              isDarkTheme 
                ? "bg-gray-800/50 border-gray-700/50" 
                : "bg-white/70 border-gray-200/50"
            } shadow-xl`}>
              <h2 className={`text-2xl font-bold mb-6 ${
                isDarkTheme ? "text-emerald-400" : "text-emerald-600"
              }`}>
                Follow Me
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      social.bgColor
                    } ${social.hoverColor} ${
                      isDarkTheme ? "hover:shadow-lg" : "hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${social.color}`}>
                        <social.icon className="text-white text-xl" />
                      </div>
                      <div>
                        <p className={`font-medium ${
                          isDarkTheme ? "text-gray-200" : "text-gray-800"
                        }`}>
                          {social.name}
                        </p>
                        <p className={`text-sm ${
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        }`}>
                          @{social.username}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="" data-aos="fade-left">
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
              isDarkTheme 
                ? "bg-gray-800/50 border-gray-700/50" 
                : "bg-white/70 border-gray-200/50"
            } shadow-xl`}>
              <h2 className={`text-2xl font-bold mb-6 ${
                isDarkTheme ? "text-emerald-400" : "text-emerald-600"
              }`}>
                Send a Message
              </h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                    placeholder="Your Full Name"
                    required
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 ${
                      isDarkTheme
                        ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-400 focus:bg-gray-700"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:bg-white"
                    } focus:outline-none focus:ring-4 ${
                      isDarkTheme ? "focus:ring-emerald-400/20" : "focus:ring-emerald-500/20"
                    }`}
                  />
                  {focusedField === "name" && (
                    <div className={`absolute -top-2 left-3 px-2 text-sm font-medium ${
                      isDarkTheme ? "bg-gray-800 text-emerald-400" : "bg-white text-emerald-600"
                    }`}>
                      Name
                    </div>
                  )}
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    placeholder="your.email@example.com"
                    required
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 ${
                      isDarkTheme
                        ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-400 focus:bg-gray-700"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:bg-white"
                    } focus:outline-none focus:ring-4 ${
                      isDarkTheme ? "focus:ring-emerald-400/20" : "focus:ring-emerald-500/20"
                    }`}
                  />
                  {focusedField === "email" && (
                    <div className={`absolute -top-2 left-3 px-2 text-sm font-medium ${
                      isDarkTheme ? "bg-gray-800 text-emerald-400" : "bg-white text-emerald-600"
                    }`}>
                      Email
                    </div>
                  )}
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("contact")}
                    onBlur={() => setFocusedField("")}
                    placeholder="Your Phone Number"
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 ${
                      isDarkTheme
                        ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-400 focus:bg-gray-700"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:bg-white"
                    } focus:outline-none focus:ring-4 ${
                      isDarkTheme ? "focus:ring-emerald-400/20" : "focus:ring-emerald-500/20"
                    }`}
                  />
                  {focusedField === "contact" && (
                    <div className={`absolute -top-2 left-3 px-2 text-sm font-medium ${
                      isDarkTheme ? "bg-gray-800 text-emerald-400" : "bg-white text-emerald-600"
                    }`}>
                      Phone
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField("")}
                    placeholder="Tell me about your project or just say hello!"
                    rows="5"
                    required
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 resize-none ${
                      isDarkTheme
                        ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-400 focus:bg-gray-700"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:bg-white"
                    } focus:outline-none focus:ring-4 ${
                      isDarkTheme ? "focus:ring-emerald-400/20" : "focus:ring-emerald-500/20"
                    }`}
                  />
                  {focusedField === "message" && (
                    <div className={`absolute -top-2 left-3 px-2 text-sm font-medium ${
                      isDarkTheme ? "bg-gray-800 text-emerald-400" : "bg-white text-emerald-600"
                    }`}>
                      Message
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 transform ${
                    isSending
                      ? `${isDarkTheme ? "bg-gray-600" : "bg-gray-400"} cursor-not-allowed`
                      : `bg-gradient-to-r ${
                          isDarkTheme 
                            ? "from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400" 
                            : "from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500"
                        } hover:scale-105 hover:shadow-lg ${
                          isDarkTheme ? "hover:shadow-emerald-500/25" : "hover:shadow-emerald-300/50"
                        }`
                  } text-white focus:outline-none focus:ring-4 ${
                    isDarkTheme ? "focus:ring-emerald-400/30" : "focus:ring-emerald-500/30"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {isSending ? (
                      <>
                        <FiLoader className="animate-spin text-xl" />
                        <span>Sending...</span>
                      </>
                    ) : isSent ? (
                      <>
                        <FiCheck className="text-xl" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="text-xl" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </button>

                {/* Success Message */}
                {isSent && (
                  <div className={`p-4 rounded-xl border ${
                    isDarkTheme 
                      ? "bg-emerald-900/30 border-emerald-500/50 text-emerald-400" 
                      : "bg-emerald-50 border-emerald-200 text-emerald-700"
                  }`}>
                    <div className="flex items-center space-x-2">
                      <FiCheck className="text-xl" />
                      <p className="font-medium">
                        Thanks for reaching out! I'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;