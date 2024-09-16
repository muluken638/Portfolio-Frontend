import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  return (
    <div 
      className="relative py-14"
      style={{
        backgroundImage: 'url("https://media.istockphoto.com/photos/-picture-id1311934969?b=1&k=20&m=1311934969&s=170667a&w=0&h=UQ3F8CE5zam5mT5swIliZ9nO7dhX4ZzsALMufFdv6Ys=")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay with opacity */}
      <div
        className="absolute inset-0 bg-black opacity-50 z-[-1]"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Semi-transparent black overlay
      ></div>

      <div className="container bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 p-8 rounded-lg relative">
        {/* Contact Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div data-aos="fade-right" className="space-y-5">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p>
              Feel free to reach out to us for any inquiries or reservations.
              We're here to assist you and ensure your stay at our hotel is
              comfortable and enjoyable.
            </p>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Address:</span>
              <p>123 Hotel Street, City, Country</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <span className="font-semibold">Phone:</span>
              <p>+123-456-7890</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <span className="font-semibold">Email:</span>
              <p>contact@hotelname.com</p>
            </div>
          </div>
          {/* Contact Form */}
          <div data-aos="fade-left" className="space-y-5">
            <h1 className="text-3xl font-bold">Get in Touch</h1>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 border border-gray-300 rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="p-3 border border-gray-300 rounded w-full"
              />
              <textarea
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded w-full"
                rows="4"
              />
              <button className="bg-primary text-white py-2 px-6 rounded hover:bg-primary/80 transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div data-aos="fade-up" className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Find Us Here</h2>
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.338354870519!2d-122.41941808468073!3d37.77492927975829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808df4b11f43%3A0x2a7a3359df8f37f8!2sSan%20Francisco%2C%20CA%2094111!5e0!3m2!1sen!2sus!4v1630623941234!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Hotel Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
