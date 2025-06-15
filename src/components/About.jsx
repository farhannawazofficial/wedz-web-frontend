import React from "react";

const About = () => {
  return (
    <div className="bg-pink-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-10 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-pink-600">
              About Our Company
            </h1>
            <p className="text-gray-700 text-lg">
              Welcome to our company! We are passionate about providing the best
              services and solutions for our clients. With years of experience
              and a dedicated team, we strive to exceed expectations and bring
              innovation to every project we undertake.
            </p>
            <p className="text-gray-700 text-lg">
              Our mission is to empower individuals and businesses with
              cutting-edge technology, exceptional service, and a commitment to
              quality. Your satisfaction is our priority, and we work tirelessly
              to achieve it.
            </p>
            <button className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg w-full max-w-sm">
              <img
                src="https://img.freepik.com/free-vector/flat-illustration-secretary-s-day-celebration_23-2150229828.jpg"
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-pink-600">
                Innovation
              </h3>
              <p className="text-gray-600 mt-2">
                We embrace creativity and constantly seek new ways to improve
                our services.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-pink-600">
                Excellence
              </h3>
              <p className="text-gray-600 mt-2">
                We are committed to delivering the highest quality in everything
                we do.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-pink-600">
                Integrity
              </h3>
              <p className="text-gray-600 mt-2">
                We operate with honesty, transparency, and accountability at all
                times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
