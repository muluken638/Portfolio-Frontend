import React from "react";

const testimonialData = [
  {
    name: "John Doe",
    image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain",
    description: "An unforgettable stay! The hotel provided outstanding service and luxurious rooms. The staff was friendly and attentive. I will definitely return!",
    aosDelay: "0",
  },
  {
    name: "Jane Smith",
    image: "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
    description: "The gourmet dining experience was top-notch. Every meal was a delight, and the room service was prompt and professional. Highly recommended!",
    aosDelay: "300",
  },
  {
    name: "Emily Johnson",
    image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/profile_4x.jpg",
    description: "Exceptional hospitality! The staff went above and beyond to make our stay comfortable. The amenities were fantastic, and the overall experience was superb.",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <>
      <span id="testimonials"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Guests Say About Their Stay
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              At our hotel, guest satisfaction is our top priority. Here’s what some of our guests have to say about their experience with our exceptional services and luxurious accommodations:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.name}
                data-aos="fade-up"
                data-aos-delay={testimonial.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-20 h-20 object-cover"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{testimonial.description}</p>
                <p className="text-center font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
