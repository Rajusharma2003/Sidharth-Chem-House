/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa6';


const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in ms.
    });
  }, []);
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Flex Container for Footer Sections */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
          {/* About Section */}
          <div className="text-center md:w-full lg:w-1/4" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-xl font-semibold mb-4">About Sidharth Chem House</h2>
            <p className="mb-4">
              Established in the year 1974, Sidharth Chem House is a widely recognized manufacturer and trader of SCH Precipitated Silica Powder, Spray Dried Silica Powder, Titanium Dioxide etc. These products are procured through various advance methods. We keep high industrial standards and safety measurements that are required to obtain and process offered range of products. It exhibits our dedication to formulate products with ethical business practices.
            </p>
          </div>
          
          {/* Address Section */}
          <div className="text-center md:w-1/3 flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-xl font-semibold mb-4">Address</h2>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-green-400 mr-2" />
                <address className="not-italic">D41, Sector 4, Bawana Industrial Area, Delhi- 110 039, Delhi, India</address>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-green-400 mr-2" />
                <a href="tel:9312369690" className="hover:underline">9312369690</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-green-400 mr-2" />
                <a href="mailto:sidharthchemhouse@gamil.com" className="hover:underline">sidharthchemhouse@gamil.com</a>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="text-center md:w-1/3" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-xl font-semibold mb-4">Subscribe To Newsletter</h2>
            <form className="flex flex-col items-center space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-3 py-2 border border-gray-300 rounded w-full"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-3 py-2 border border-gray-300 rounded w-full"
                required
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Call Button */}
      <div className="z-50 fixed bottom-8 left-10 flex flex-col space-y-4">
        <a
          href="tel:+919312369690"
          className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=53438&format=png&color=ffffff"
            alt="Call Icon"
            className="w-10 h-10"
          />
        </a>
      </div>

      {/* WhatsApp and Scroll to Top Buttons */}
      <div className="z-50 fixed bottom-8 right-10 flex flex-col space-y-4 items-center">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/+919312369690"
          className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-4xl" />
        </a>

        {/* Scroll to Top Button */}
        <button
          onClick={handleScrollToTop}
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-transform duration-300"
        >
          <FaArrowUp className="text-3xl" />
        </button>
      </div>
      
    </footer>
  );
};

export default Footer;
