import React from 'react';
import ProfileImage from '../images/images.png'; // Replace with your actual image path

const About = () => {
  return (
    <div className="w-screen h-auto bg-gray-100 flex flex-col items-center justify-center md:flex-row md:h-screen p-4">
      {/* Left Side - Profile Image */}
      <div className="flex justify-center items-center mb-6 md:mb-0 md:mr-8">
        <div className="w-100 h-100 md:w-50 md:h-50 rounded-full bgcover p-2 shadow-glow">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
        </div>
      </div>

      {/* Right Side - About Text */}
      <div className="max-w-2xl w-fit-content text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 text-center  border-4 border-white md:text-left bgcover">
          About Me
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
          Hi, I'm Muluken Zeleke, a passionate developer who thrives on creating dynamic, responsive, and user-friendly web applications. With expertise in <strong>React</strong>, <strong>Laravel</strong>, and <strong>WordPress</strong>, I focus on delivering modern solutions that enhance user experiences and drive business success.
        </p>
        <p className="text-base md:text-lg leading-relaxed mt-4 text-center md:text-left">
          Whether building scalable web apps with <strong>React</strong> or crafting robust back-end systems with <strong>Laravel</strong>, I aim to turn ideas into reality with clean, efficient code. My <strong>WordPress</strong> skills allow me to create customizable and SEO-friendly websites that provide value to clients and end-users alike.
        </p>
        <p className="text-base md:text-lg leading-relaxed mt-4 text-center md:text-left">
          I’m always excited to take on new challenges, explore cutting-edge technologies, and work collaboratively to build impactful digital solutions. Let's create something amazing together!
        </p>
        {/* Download CV Button */}
        <div className="mt-6 flex justify-center md:justify-start">
          <a
            href="/CV Updated (2).pdf" // Replace this with the correct path to your PDF
            download
            className="bg-blue-600 text-white py-2 px-6 border-4 border-white rounded-lg hover:bg-blue-700 bgcover transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
