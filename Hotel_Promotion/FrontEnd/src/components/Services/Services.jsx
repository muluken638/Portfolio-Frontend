import React from "react";
import { FaBed, FaCocktail, FaConciergeBell } from "react-icons/fa";

const servicesData = [
  {
    name: "Luxurious Rooms",
    icon: (
      <FaBed className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Experience comfort and elegance in our well-appointed rooms. Enjoy top-notch amenities and a relaxing stay in a luxurious setting.",
    aosDelay: "0",
  },
  {
    name: "Gourmet Dining",
    icon: (
      <FaCocktail className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Indulge in a culinary delight with our gourmet dining options. Our restaurants offer a diverse menu with exquisite dishes crafted by top chefs.",
    aosDelay: "500",
  },
  {
    name: "Exceptional Service",
    icon: (
      <FaConciergeBell className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Our dedicated staff is here to provide exceptional service and ensure your stay is unforgettable. From check-in to check-out, we are at your service.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Stay With Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {servicesData.map((service) => (
              <div
                key={service.name}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{service.icon}</div>
                <h1 className="text-2xl font-bold">{service.name}</h1>
                <p>{service.description}</p>
                <a
                  href={service.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
