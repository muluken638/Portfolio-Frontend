import React, { useEffect } from "react";
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

const roomsData = [
  {
    id: 1,
    image: "https://th.bing.com/th/id/R.945e552b58c25f526ad089bc493d4516?rik=42BmhcZYWlYxGA&riu=http%3a%2f%2fcache.marriott.com%2fmarriottassets%2fmarriott%2fLASJW%2flasjw-guestroom-0111-hor-clsc.jpg%3finterpolation%3dprogressive-bilinear%26&ehk=VcnNojNooaxympMvDdeRVdz3JfYVtglQmJmdSktonXM%3d&risl=&pid=ImgRaw&r=0",
    title: "Deluxe Room",
    description: "Spacious room with king-sized bed, luxurious bathroom, and a beautiful view of the city.",
    price: "$200 per night"
  },
  {
    id: 2,
    image: "https://cache.marriott.com/marriottassets/marriott/KULDT/kuldt-guestroom-0065-hor-clsc.jpg?interpolation=progressive-bilinear&",
    title: "Superior Room",
    description: "Comfortable room with queen-sized bed, modern decor, and all necessary amenities for a relaxing stay.",
    price: "$150 per night"
  },
  {
    id: 3,
    image: "https://s3.amazonaws.com/homestratosphere/wp-content/uploads/2014/05/shutterstock_30411274.jpg",
    title: "Suite Room",
    description: "Large suite with a separate living area, premium furnishings, and a panoramic view.",
    price: "$350 per night"
  }
];

const Rooms = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  return (
    <div className="py-14 bg-gray-100 dark:bg-dark">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-center mb-10" data-aos="fade-up">
          Our Rooms
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {roomsData.map((room, index) => (
            <div
              key={room.id}
              className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${index * 200}`}
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-3">{room.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{room.description}</p>
                <p className="text-xl font-semibold">{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
