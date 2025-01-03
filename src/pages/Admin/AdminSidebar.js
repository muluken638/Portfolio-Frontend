import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faBriefcase,
  faTruck,
  faMap,
  faClipboardList,
  faRecycle,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { FaSyncAlt } from 'react-icons/fa';
import Logout from '../Logout';

const Sidebar = ({ setActiveItem }) => {
  const mainLinks = [
    { name: 'Dashboard', icon: faTachometerAlt, path: 'admindashboard' },
    { name: 'Projects', icon: faBriefcase, path: 'projects' },
    { name: 'Cover Letter', icon: faRecycle, path: '/cover-letter' },
    { name: 'Technologiess', icon: faTruck, path: '/technologiess' },
    // { name: 'Daily Report by Routes', icon: faMap, path: '/routes-report' },
    // { name: 'Reconsilations', icon: faClipboardList, path: '/reconciliations' },
  ];

  const footerLinks = [
    // { name: 'Admin', icon: 'avatar', path: '/admin', isAdmin: true },
    { name: 'Profiles', icon: faCog, path: 'profiles' },
    { name: <Logout/>, icon: faSignOutAlt, path: '/login' },
  ];

  return (
    <div className="h-screen background-color w-full flex flex-col border-r bordercolor">
      {/* Site Name */}
      <div className="h-20vh py-5 bg-white text-black flex items-center justify-center text-2xl font-bold">
        Portfolio Management
      </div>
      <div className='border bordercolor mx-4'></div>

      {/* Main Links */}
      <div className="flex-1 h-70vh overflow-y-auto">
        <ul className="space-y-2 px-4 py-6">
          {mainLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                onClick={() => setActiveItem(link.name)} // Set the active item
                className={({ isActive }) =>
                  `flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer sidebar-text ${
                    isActive ? 'bg-primarycolor text-white' : 'hover:bg-blue-800 hover:text-white'
                  }`
                }
              >
                <FontAwesomeIcon icon={link.icon} className="text-xl textcolor" />
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="border bordercolor mx-4"></div>
      {/* Footer Links */}
      <div className="px-4 py-6">
        <ul className="space-y-2">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                onClick={() => setActiveItem(link.name)} // Set the active item
                className={({ isActive }) =>
                  `flex items-center gap-4 py-2 px-4 rounded-lg cursor-pointer sidebar-text ${
                    link.name === 'Admin'
                      ? 'bg-white text-white shadow-lg' // Special styles for Admin
                      : isActive
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-blue-500 hover:text-white'
                  }`
                }
              >
                {link.icon === 'avatar' ? (
                  <img
                    src="https://randomuser.me/api/portraits/men/30.jpg" // Replace with actual avatar image URL
                    alt="Admin Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <FontAwesomeIcon icon={link.icon} className="text-xl" />
                )}
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
