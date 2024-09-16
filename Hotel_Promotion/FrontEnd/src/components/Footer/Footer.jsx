import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Rooms",
    link: "/rooms",
  },
  {
    title: "Amenities",
    link: "/amenities",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "About Us",
    link: "/about",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Hotel Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Luxury Hotel
            </h1>
            <p className="text-sm">
              At Luxury Hotel, we offer a luxurious stay with top-notch amenities and exceptional service. Whether you're here for business or leisure, our spacious rooms, fine dining, and outstanding hospitality will ensure a memorable experience. Trust us to make your stay comfortable and enjoyable.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>123 Elegant Street, City, Country</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+123-456-7890</p>
            </div>
            {/* Social Media */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {footerLinks.map((link) => (
                    <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Explore
                </h1>
                <ul className="flex flex-col gap-3">
                  {footerLinks.map((link) => (
                    <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact Us
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="text-gray-500 dark:text-gray-200">
                    <FaLocationArrow className="inline mr-2" />
                    123 Elegant Street, City, Country
                  </li>
                  <li className="text-gray-500 dark:text-gray-200">
                    <FaMobileAlt className="inline mr-2" />
                    +123-456-7890
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
