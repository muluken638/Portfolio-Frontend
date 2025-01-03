import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaReact, FaNodeJs, FaLaravel, FaWordpress, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { SiNestjs, SiFlutter, SiTailwindcss, SiMongodb, SiMysql, SiBootstrap, SiFigma, SiExpress, SiNextdotjs } from "react-icons/si";

// Icon mapping for the icons stored in the database
const iconMap = {
  "FaReact": <FaReact className="text-blue-500 text-3xl" />,
  "FaNodeJs": <FaNodeJs className="text-green-500 text-3xl" />,
  "FaLaravel": <FaLaravel className="text-red-500 text-3xl" />,
  "FaWordpress": <FaWordpress className="text-blue-600 text-3xl" />,
  "FaCss3Alt": <FaCss3Alt className="text-blue-600 text-3xl" />,
  "FaHtml5": <FaHtml5 className="text-orange-600 text-3xl" />,
  "FaJs": <FaJs className="text-yellow-500 text-3xl" />,
  "SiNestjs": <SiNestjs className="text-red-400 text-3xl" />,
  "SiFlutter": <SiFlutter className="text-blue-400 text-3xl" />,
  "SiTailwindcss": <SiTailwindcss className="text-blue-400 text-3xl" />,
  "SiMongodb": <SiMongodb className="text-green-500 text-3xl" />,
  "SiMysql": <SiMysql className="text-blue-600 text-3xl" />,
  "SiBootstrap": <SiBootstrap className="text-purple-600 text-3xl" />,
  "SiFigma": <SiFigma className="text-purple-600 text-3xl" />,
  "SiExpress": <SiExpress className="text-gray-700 text-3xl" />,
  "SiNextdotjs": <SiNextdotjs className="text-gray-800 text-3xl" />
};

const TechnologyList = () => {
  const [technologies, setTechnologies] = useState([]);

  // Fetch technologies from the API
  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/technologies');
        setTechnologies(response.data); // Assuming the response is an array of technologies
      } catch (error) {
        console.error('Error fetching technologies:', error);
      }
    };

    fetchTechnologies();
  }, []);

  // Group technologies by category
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full p-6 text-gray-800">
        {Object.keys(groupedTechnologies).map((category) => (
          <div key={category} className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {groupedTechnologies[category].map((tech) => (
                <div key={tech._id} className="p-4 border rounded-lg shadow-lg">
                  <div className="flex items-center justify-center mb-4">
                    {/* Render icon dynamically */}
                    {iconMap[tech.icon]}
                  </div>
                  <h3 className="text-xl font-bold">{tech.name}</h3>
                  <p className="text-gray-600">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyList;
