import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Menu items array for easier management
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/project' },
    { name: 'Skills', path: '/skills' },
  ];

  return (
    <header className="bgcover text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg font-bold">Miller .Z</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hire Me Button */}
          <Link
            to="/hire-me"
            className="ml-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Hire Me
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleDrawer}
            className="focus:outline-none flex flex-col space-y-1"
          >
            <span
              className={`h-1 w-6 bg-white transform transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`h-1 w-6 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`h-1 w-6 bg-white transform transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bgcover text-white transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        
        <nav className="mt-16">
          <ul className="space-y-4 p-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block hover:underline"
                  onClick={toggleDrawer}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {/* Mobile Hire Me Button */}
            <li>
              <Link
                to="/hire-me"
                className="block mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={toggleDrawer}
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
