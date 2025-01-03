import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminProfile() {
  const [profile, setProfile] = useState({
    name: "",
    last_name: "",
    email: "",
    profession: "",
    bio: "",
    image: "",
  });

  // Fetch profile data when component mounts
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/profile`)
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => console.error("There was an error fetching the profile data!", error));
  }, []);

  // Handle form submission for profile update
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/profile`, profile)
      .then(response => {
        alert("Profile updated successfully!");
      })
      .catch(error => {
        console.error("There was an error updating the profile!", error);
      });
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300"
                  src={profile.image}
                  alt="Profile Picture"
                />
                <div className="flex flex-col space-y-5 sm:ml-8">
                  <button
                    type="button"
                    className="py-3.5 px-7 text-base font-medium text-indigo-100 bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:outline-none"
                  >
                    Change Picture
                  </button>
                  <button
                    type="button"
                    className="py-3.5 px-7 text-base font-medium text-indigo-900 bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:outline-none"
                  >
                    Delete Picture
                  </button>
                </div>
              </div>
              <div className="mt-8 sm:mt-14 text-[#202142]">
                <div className="flex flex-col items-center w-full space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <div className="w-full">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-indigo-900"
                    >
                    Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                      placeholder="Your first name"
                      value={profile.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-indigo-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="your.email@mail.com"
                    value={profile.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="profession"
                    className="block mb-2 text-sm font-medium text-indigo-900"
                  >
                    Profession
                  </label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Your profession"
                    value={profile.profession}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="bio"
                    className="block mb-2 text-sm font-medium text-indigo-900"
                  >
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    className="block w-full text-sm bg-indigo-50 text-indigo-900 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
                    placeholder="Write your bio here..."
                    value={profile.bio}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    onClick={handleUpdate}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminProfile;
