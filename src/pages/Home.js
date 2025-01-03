import React from "react";
import About from "./About";
import Image from "../images/image3.png";
import ProjectCarousel from "./ProjectCarousel";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

// Import social media icons from react-icons
import {
  FaTelegram,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const projects = [
  {
    name: "Project 1",
    description: "A full-stack application built with React and Node.js.",
    github: "https://github.com/username/project1",
    demo: "https://project1-demo.com",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Movie-project-one",
    description: "A mobile app built with Flutter and Firebase.",
    github: "https://github.com/muluken638/Movie-project-one",
    demo: "https://project2-demo.com",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Project 3",
    description: "A dynamic website built with Laravel and MySQL.",
    github: "https://github.com/username/project3",
    demo: "https://project3-demo.com",
    image: "https://via.placeholder.com/300",
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-screen h-90vh bg-black flex items-center justify-center flex-col md:flex-row relative">
        {/* Background Color behind the image */}
        <div className="absolute inset-0 bgcover opacity-60"></div>

        {/* Left Side (Text Section) */}
        <div className="w-full md:w-1/2 px-8 text-center md:text-left relative ">
          <h2 className="text-4xl font-bold text-blue-600 mb-4 animate-typing md:text-2xl sm:text-sm overflow-hidden">
            Hello, I'm a Software Developer!
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            I specialize in building responsive and dynamic websites. With
            expertise in React, Node.js, Laravel, and more, I create solutions
            that empower businesses to succeed.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300">
              View Portfolio
            </button>
            <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-600 transition duration-300">
              Hire Me
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-6 gap-4 text-white animate-fade-up">
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              <FaTelegram size={30} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="mailto:example@example.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <FaEnvelope size={30} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 "
            >
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>

        {/* Right Side (Image Section) */}
        <div className="w-full md:w-1/2 flex justify-center pb-6 mb-8 md:mt-0 relative z-10">
          <div className="relative w-40vw h-40vh">
            <img
              src={Image}
              alt="Full-Stack Developer"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div>
        <About />
      </div>

      {/* Project Carousel Section */}
      <div>
        <ProjectCarousel projects={projects} />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
