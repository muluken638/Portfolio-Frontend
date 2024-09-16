import React, { useEffect } from "react";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="relative py-14 my-4" 
      style={{
        backgroundImage: 'url("https://thumbs.dreamstime.com/b/abstract-blur-luxury-hotel-lobby-background-abstract-blur-defocused-luxury-hotel-lobby-background-205933285.jpg")', // Set your background image here
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

      <div className="container relative bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 p-8 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src="https://th.bing.com/th/id/OIP.kNhF77lpNhseaPs8wxOIhwHaJ4?rs=1&pid=ImgDetMain"
              alt="About Us"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About Us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Welcome to Luxury Hotel, where your comfort and satisfaction are our top priorities. Our mission is to provide an exceptional lodging experience with unparalleled hospitality.
              </p>
              <p data-aos="fade-up">
                Our dedicated team ensures that every aspect of your stay is perfect, from our elegant rooms and world-class amenities to our attentive service. We strive to create a memorable experience for all our guests, whether you are here for business or leisure. Discover the luxury and warmth of our hotel and make your stay with us unforgettable.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Book Your Stay
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4" data-aos="fade-up">
            Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <img
              src="https://photos.smugmug.com/Africa/Eritrea/Asmara/i-Z9D6SR5/0/93341e18/L/Canva%20-%20Injera%20be%20wot%2C%20traditional%20Ethiopian%20Food-min-L.jpg"
              alt="Gallery Image 1"
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            />
            <img
              src="https://pngimg.com/uploads/cocktail/cocktail_PNG82.png"
              alt="Gallery Image 2"
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            />
            <img
              src="https://th.bing.com/th/id/R.dbeeaf4d661e8dfa23e512e2808a0d77?rik=eCZpOR4Pp%2fXPOg&pid=ImgRaw&r=0"
              alt="Gallery Image 3"
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="500"
            />
            <img
              src="https://th.bing.com/th/id/OIP.kNhF77lpNhseaPs8wxOIhwHaJ4?rs=1&pid=ImgDetMain"
              alt="Gallery Image 4"
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
