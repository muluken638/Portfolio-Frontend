import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Sample data for rooms
const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Luxurious room with king-size bed, private balcony, and sea view.",
    price: "$200 per night",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4e/97/59/guest-room.jpg?w=900&h=-1&s=1",
  },
  {
    id: 2,
    name: "Superior Room",
    description: "Spacious room with queen-size bed and a cozy seating area.",
    price: "$150 per night",
    image: "https://cache.marriott.com/marriottassets/marriott/KULDT/kuldt-guestroom-0065-hor-clsc.jpg?interpolation=progressive-bilinear&",
  },
  {
    id: 3,
    name: "Suite Room",
    description: "Exquisite suite with a living room, jacuzzi, and stunning views.",
    price: "$350 per night",
    image: "https://th.bing.com/th/id/OIP.dtj8RB31JQLMFLSigCztzwHaE7?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    name: "Single Room",
    description: "Affordable single room for a budget stay, includes free Wi-Fi.",
    price: "$100 per night",
    image: "https://s3.amazonaws.com/homestratosphere/wp-content/uploads/2014/05/shutterstock_30411274.jpg",
  },
];

const Booking = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "",
  });

  useEffect(() => {
    AOS.init();
  }, []);

  // Handle room selection
  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setFormData({ ...formData, roomType: room.name });
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} in ${formData.roomType}`);
    // Real form submission logic can go here
  };

  return (
    <div className="py-14 bg-gray-100 dark:bg-dark min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-center mb-10" data-aos="fade-up">
          Book Your Stay
        </h1>

        {/* Rooms Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-transform duration-300 ${selectedRoom?.id === room.id ? 'border-4 border-blue-500' : ''
                }`}
              onClick={() => handleRoomSelect(room)}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{room.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{room.description}</p>
              <p className="text-blue-500 font-bold mt-2">{room.price}</p>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <form
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Full Name */}
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter your full name"
            />
          </div>

          {/* Check-in Date */}
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Check-in Date
            </label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Check-out Date */}
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Check-out Date
            </label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Number of Guests */}
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              min={1}
            />
          </div>

          {/* Room Type (auto-filled by selecting a room) */}
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Room Type
            </label>
            <input
              type="text"
              name="roomType"
              value={selectedRoom ? selectedRoom.name : ""}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition duration-300"
            data-aos="fade-up"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
