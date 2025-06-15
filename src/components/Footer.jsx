import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import backgroundImage from "../assets/images/footer-bg.jpg"; 
import wedzlogo from "../assets/images/wedzlogo.png"

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-white py-10 px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section - About */}
        <div>
            <img className="w-20 m-0 p-0" src={wedzlogo} alt="wedz-logo" />
          <p className="text-sm leading-relaxed">
            Welcome to WEDZ, the premier platform where users can effortlessly
            find and book venues for any occasion, and venue owners can
            advertise their properties with ease.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Banquet
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Ballrooms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Halls
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              <span>Email Address: contact@wedz.com</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📍</span>
              <span>Office: Karachi</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              <span>Phone: 03179787123</span>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <SiTiktok size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
