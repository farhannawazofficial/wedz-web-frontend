import React from "react";
import banquet1 from "../assets/images/banquet1.jpg";
import banquet2 from "../assets/images/banquet2.jpg";
import banquet3 from "../assets/images/banquet3.jpg";
import banquet4 from "../assets/images/banquet4.jpg";
import banquet5 from "../assets/images/banquet5.jpg";
import banquet6 from "../assets/images/banquet6.jpg";
import { FaSearch } from "react-icons/fa";



const BanquetSection = () => {
  const banquetHalls = [
    {
      id: 1,
      image: banquet1,
      name: "Online Grandstar",
      location: "Baldia Town, Karachi",
      rating: 4.8,
    },
    {
      id: 2,
      image: banquet2,
      name: "Royal Aero Banquet",
      location: "Saddar, Karachi",
      rating: 4.7,
    },
    {
      id: 3,
      image: banquet3,
      name: "Galaxy Event Hall",
      location: "Clifton, Karachi",
      rating: 4.9,
    },
    {
      id: 4,
      image: banquet4,
      name: "Golden Blossom Hall",
      location: "Korangi, Karachi",
      rating: 4.6,
    },
    {
      id: 5,
      image: banquet5,
      name: "Pearl Grand Hall",
      location: "Gulshan-e-Iqbal, Karachi",
      rating: 4.5,
    },
    {
      id: 6,
      image: banquet6,
      name: "Crystal Crown Banquet",
      location: "Nazimabad, Karachi",
      rating: 4.7,
    },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Banquets
        </h2>
        <p className="text-center">Your Favourite Banquets</p>

        {/* Filter and Search */}
        <div className="flex flex-wrap justify-between items-center mb-10">
          <div className="flex space-x-4 my-5">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-pink-500 hover:text-white transition">
              Around Me
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-pink-500 hover:text-white transition">
              Latest
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-pink-500 hover:text-white transition">
              Popular
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a venue or location"
              className=" px-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button className="absolute  right-2 top-3 text-pink-800">
            <FaSearch />

            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {banquetHalls.map((hall) => (
            <div
              key={hall.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
            >
              {/* Image */}
              <img
                src={hall.image}
                alt={hall.name}
                className="w-full h-48 object-cover"
              />
              {/* Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {hall.name}
                </h3>
                <p className="text-sm text-gray-500">{hall.location}</p>
                {/* Ratings */}
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="ml-1 text-gray-700">{hall.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-8">
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
            See More 
          </button>
        </div>
      </div>
    </section>
  );
};

export default BanquetSection;
