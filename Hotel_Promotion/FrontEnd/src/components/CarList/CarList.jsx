import React from "react"; // Replace with actual room image paths

const roomList = [
  {
    name: "Deluxe Room",
    price: 200,
    image: "https://cache.marriott.com/marriottassets/marriott/KULDT/kuldt-guestroom-0065-hor-clsc.jpg?interpolation=progressive-bilinear&",
    aosDelay: "0",
  },
  {
    name: "Suite Room",
    price: 350,
    image: "https://images.rosewoodhotels.com/is/image/rwhg/hi-hgv-26330925-rhgmodelbedroom-1",
    aosDelay: "500",
  },
  {
    name: "Standard Room",
    price: 150,
    image: "https://cache.marriott.com/marriottassets/marriott/MNLAP/mnlap-guestroom-0118-hor-clsc.jpg?interpolation=progressive-bilinear&",
    aosDelay: "1000",
  },
];

const RoomList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          "Luxurious and Comfortable Rooms!"
        </h1>
        <p data-aos="fade-up" data-aos-delay="400" className="text-sm pb-10">
          Our hotel offers a range of beautifully designed rooms to ensure a comfortable and luxurious stay. Explore our options to find the perfect room for your needs.
        </p>
        {/* Room listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {roomList.map((room) => (
              <div
                key={room.name}
                data-aos="fade-up"
                data-aos-delay={room.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-[120px] object-cover group-hover:scale-110 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{room.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${room.price}/Night</p>
                    <a href="#">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of room listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomList;
