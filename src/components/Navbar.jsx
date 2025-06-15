import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For desktop dropdown
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // For mobile dropdown

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-pink-600">
            Home
          </Link>

          {/* Desktop Dropdown Menu for Services */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-pink-600 flex items-center">
              Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-50 bg-white shadow-lg rounded-lg overflow-hidden"
                style={{
                  animation: "fadeIn 0.3s ease-in-out",
                }}
              >
                <Link
                  to="/wedding-planning"
                  className="block px-4  py-2 text-gray-700 hover:bg-gray-100 hover:text-pink-600"
                >
                  Wedding Planning
                </Link>
                <Link
                  to="/catering"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pink-600"
                >
                  Catering
                </Link>
                <Link
                  to="/decorations"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pink-600"
                >
                  Decorations
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-pink-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-pink-600">
            Contact
          </Link>
        </div>

        {/* Sign In button */}
        <div className="hidden md:block">
        <button className="w-full bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
            <Link
            to="/authforms">
              Sign In
            </Link>
            
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="block md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pink-600"
          >
            Home
          </Link>

          {/* Mobile Dropdown for Services */}
          <div>
            <button
              className="w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pink-600 focus:outline-none"
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              Services
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileDropdownOpen ? "M6 18L18 6M6 6l12 12" : "M19 9l-7 7-7-7"}
                />
              </svg>
            </button>
            {isMobileDropdownOpen && (
              <div
                className="ml-4 border-l-2 border-gray-200"
                style={{
                  animation: "fadeIn 0.3s ease-in-out",
                }}
              >
                <Link
                  to="/wedding-planning"
                  className="block px-4  py-2 text-gray-700 hover:bg-gray-100 hover:text-pink-600"
                >
                  Wedding Planning
                </Link>
                <Link
                  to="/catering"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pink-600"
                >
                  Catering
                </Link>
                <Link
                  to="/decorations"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pink-600"
                >
                  Decorations
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pink-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pink-600"
          >
            Contact
          </Link>
          <button className="w-full bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
            <Link
            to="/authforms">
              Sign In
            </Link>
            
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
