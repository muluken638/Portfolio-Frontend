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

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/technologies');
        setTechnologies(response.data);
      } catch (error) {
        console.error('Error fetching technologies:', error);
      }
    };

    fetchTechnologies();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {technologies.map((tech) => (
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
  );
};

export default TechnologyList;
