// components/ProjectCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import 'swiper/swiper-bundle.css'; // Correct Swiper CSS import

const ProjectCarousel = ({ projects }) => {
  return (
    <div className="w-screen  bg-gray-100 pb-6 pl-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">My Projects</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-80 bg-white shadow-lg rounded-lg p-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-blue-600 mt-4">{project.name}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 flex items-center"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 flex items-center"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
