import React from "react";
import specialityImg from "../assets/images/speciality.jpg"; // Replace with actual image

const SpecialitySection = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 relative">
          <img
            src={specialityImg}
            alt="Our Speciality"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
          {/* Pink Decorative Box */}
          <div className="absolute bottom-[-10px] left-[-10px] bg-pink-500 w-16 h-16 rounded-lg -z-10"></div>
        </div>

        {/* Right Side - Text and Features */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <p className="text-gray-500 text-sm mb-2">Our Speciality ..</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Comprehensive All Great Destination Here
          </h2>

          {/* Feature 1 */}
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-lg text-pink-500">
              🗂️
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Find What You Want
              </h3>
              <p className="text-gray-600 text-sm">
                Simplify your wedding planning with easy venue search and
                booking.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-lg text-pink-500">
              🏛️
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Perfect Places, Simple Booking
              </h3>
              <p className="text-gray-600 text-sm">
                Discover stunning venues and enjoy a hassle-free booking
                experience.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-lg text-pink-500">
              📞
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Live Online Assistance
              </h3>
              <p className="text-gray-600 text-sm">
                Get real-time help to find and book your perfect wedding venue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialitySection;
