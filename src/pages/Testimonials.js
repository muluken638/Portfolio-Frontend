import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "John Doe",
      role: "Parent",
      text: "The school management system has completely transformed the way we interact with the school. It's user-friendly and very effective!",
    },
    {
      name: "Jane Smith",
      role: "Teacher",
      text: "Managing class schedules and student data has never been easier. I highly recommend this system!",
    },
    {
      name: "Michael Johnson",
      role: "Student",
      text: "The platform is very intuitive and helps me stay organized with my assignments and classes.",
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-gray-50 flex flex-col items-center ">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-semibold text-blue-600">{review.name}</h3>
            <p className="text-gray-500 text-sm">{review.role}</p>
            <p className="text-gray-700 mt-4">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
