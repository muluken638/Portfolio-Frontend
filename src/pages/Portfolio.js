import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/portfolio`
        );
        console.log(response.data); // Log the response data to check the structure
        const data = Array.isArray(response.data) ? response.data : [];
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch projects.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-2xl font-bold mt-10">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 text-2xl font-bold mt-10">
        {error}
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-6xl w-full p-6 text-gray-800">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project._id}
              to={`/project/${project._id}`} // Navigate to the project details page
              className="p-2 bg-white rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 flex flex-col max-w-xs"
            >
              <img
                  src={`http://localhost:5002/${project.coverImage ? project.coverImage : 'default-image.jpg'}`}

                alt={project.title}
                className="object-cover w-full h-60 rounded-md"
              />

              <div className="flex flex-col flex-grow mt-4">
                <h2 className="text-2xl font-bold truncate">{project.title}</h2>
                <p className="mt-2 text-gray-600 text-sm truncate">
                  {project.description}
                </p>
                <div className="mt-auto space-x-4 flex justify-between">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-2 text-sm"
                    >
                      <FaGithub /> GitHub Repository
                    </a>
                  )}
                  {project.liveDemoLink && (
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-2 text-sm"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
