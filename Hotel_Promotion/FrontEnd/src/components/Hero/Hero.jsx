import React, { useEffect } from "react";
import carPng from "../../assets/car.png"; // Keeping the dark theme car
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="relative dark:text-white duration-300">
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-[url('https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/237/2017/12/26070458/One-World-Hotel-Petaling-Jaya-Malaysia-restaurant-Cinnamon-Coffee-House-image02.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-md"></div>
      </div>

      <div className="container min-h-[620px] flex relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={
                theme === "dark"
                  ? carPng
                  : "https://th.bing.com/th/id/R.7d28aba53ea4bd655969d1bc436d2ced?rik=%2bV6CsnJJZZ1OnA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffood-png-hd-burger-png-picture-png-image-2008.png&ehk=NkWpcLL%2bKw8sumh6BqCvrO3%2bIKGPl46250bET0yyR%2bo%3d&risl=1&pid=ImgRaw&r=0"
              }
              alt="Hero Car"
              className="sm:scale-125 relative -z-10 max-h-[200px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Thorough
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car Inspections
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Ensuring your vehicle's safety and reliability is our priority. At
              Car Inspection, we provide meticulous assessments that give you
              confidence on the road.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* <div className="items-center flex justify-center mb-2">
        <Customer />
      </div> */}
    </div>
  );
};

export default Hero;
