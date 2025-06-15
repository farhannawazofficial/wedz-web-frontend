import React from "react";
import banquetIcon from "../assets/images/banquet.jpeg";  
import ballroomsIcon from "../assets/images/ballrooms.jpeg";  
import hallsIcon from "../assets/images/halls.jpeg"; 
 

const FilterSection = () => {
  const filterOptions = [
    {
      id: 1,
      icon: banquetIcon, 
      label: "Banquet",
    },
    {
      id: 2,
      icon: ballroomsIcon, 
      label: "Ballrooms",
    },
    {
      id: 3,
      icon: hallsIcon, 
      label: "Halls",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filterOptions.map((option) => (
          <div
            key={option.id}
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300"
          >
            {/* Icon */}
            <img
              src={option.icon}
              alt={option.label}
              className="w-16 h-16 mb-4"
            />

            {/* Label */}
            <p className="text-gray-800 font-medium text-lg">{option.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
