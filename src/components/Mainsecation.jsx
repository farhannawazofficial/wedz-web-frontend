
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import coupleImage from "../assets/images/couple.png";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";


const MainSection = () => {
  return (
    <div className="relative bg-white py-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">
              When your{" "}
              <span className="text-pink-500">
                Dream Wedding
              </span>{" "}
              comes true
            </h1>
            <p className="text-gray-600">
              “Once in a while, right in the middle of an ordinary life, love gives us a fairy tale.”
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Find Photographers, Catering, etc"
                className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="absolute right-3 top-2 bg-pink-500 text-white p-2 rounded-full">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={coupleImage}
              alt="Wedding Couple"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-4">
            <img src={icon1} alt="Icon" className="w-12 h-12" />
            <span className="font-medium text-gray-800">Cakes and Catering</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src={icon2} alt="Icon" className="w-12 h-12" />
            <span className="font-medium text-gray-800">Photography</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src={icon3} alt="Icon" className="w-12 h-12" />
            <span className="font-medium text-gray-800">Dinner</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src={icon4} alt="Icon" className="w-12 h-12" />
            <span className="font-medium text-gray-800">Other Services</span>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="bg-pink-50 py-12 px-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          className="max-w-4xl mx-auto "
        >
          <SwiperSlide>
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-pink-600">
                Wedding Packages
              </h2>
              <p className="text-gray-600">
                Customizable wedding packages tailored to your needs.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-pink-600">
                Expert Photographers
              </h2>
              <p className="text-gray-600">
                Capture your special moments with top-tier photographers.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-pink-600">
                Destination Weddings
              </h2>
              <p className="text-gray-600">
                Plan your dream wedding in stunning destinations.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MainSection;
