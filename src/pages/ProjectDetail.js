import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa"; // Add FaArrowLeft for the back icon
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const ProjectDetail = () => {
  const { id } = useParams(); // Extract project id from URL
  const [project, setProject] = useState(null); // State to store project data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        // Replace with your actual API endpoint to fetch project by ID
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/portfolios/${id}`
        );
        setProject(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch project details.");
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  const handleBackClick = () => {
    navigate(-1); // This will navigate back to the previous page
  };

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

  if (!project) {
    return (
      <div className="text-center text-2xl font-bold mt-10">
        Project not found
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex items-center ">
      <div className="max-w-4xl w-full p-6 text-gray-800">
        {/* Back Button with Arrow */}
        <button
          onClick={handleBackClick}
          className="flex items-center text-blue-600 mb-6 hover:underline"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>

        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          {project.title}
        </h1>

        <img
          src={`http://localhost:5002/${project.coverImage}`}
          alt={project.title}
          className="w-full h-96 object-cover rounded-md"
        />
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Description
          </h3>
          <p className="text-lg text-gray-700">{project.description}</p>
        </div>

        {/* Technology Stack Section */}
        <div className="mt-4">
          <h3 className="font-semibold text-xl">Technology Stack:</h3>
          <ul className="list-disc pl-6">
            {Array.isArray(project.technologyStack) &&
            project.technologyStack.length > 0 ? (
              project.technologyStack.map((tech, index) => (
                <li key={index} className="text-gray-600">
                  {tech}
                </li>
              ))
            ) : (
              <li className="text-gray-600">No technology stack available</li>
            )}
          </ul>
        </div>

        {/* Gallery Images Section */}
        <div className="mt-10">
          <h3 className="font-semibold text-2xl text-blue-600 mb-4">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.isArray(project.galleryImages) &&
            project.galleryImages.length > 0 ? (
              project.galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={`http://localhost:5002/${
                      image ? image : "default-image.jpg"
                    }`}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">
                      Gallery Image {index + 1}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No gallery images available</p>
            )}
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-6 flex space-x-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Repository
            </a>
          )}
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
