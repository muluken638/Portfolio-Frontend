import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, description, status, value, color }) => {
  return (
    <div className="flex flex-col bg-white p-6 rounded-lg shadow-md space-y-4 border border-gray-200">
      <div className="flex items-center space-x-2">
        {/* <FontAwesomeIcon icon="fa-solid fa-briefcase" className="text-3xl text-blue-700" /> */}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      <div className="flex justify-between w-full">
        <div className="text-lg font-semibold">Status: {status}</div>
        <div className={`text-xl font-medium ${color === 'green' ? 'text-green-500' : color === 'red' ? 'text-red-500' : 'text-yellow-500'} bg-opacity-20 p-1 rounded-lg`}>
          {value} Projects
        </div>
      </div>
    </div>
  );
};

export default Card;
