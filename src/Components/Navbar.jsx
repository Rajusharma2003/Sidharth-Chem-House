/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// import image.
import logo from '../Image/SiddharthLogo.png'

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

   // going on the top 
   const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-[#f0f0f0] text-black fixed w-full top-0 left-0 z-50 shadow-md ">
      <div className="container mx-auto flex items-center justify-between p-4 h-24">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/" onClick={handleScrollToTop} className="flex items-center">
            <img src={logo} alt="Logo" className="lg:w-64 lg:h-64 w-1/2 h-1/2 mr-2 lg:mt-3" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? <FaTimes className="inline-block" /> : <FaBars className="inline-block text-black" />}
          </button>

          {/* Sliding Menu */}
          <div
            className={`fixed top-0 right-0 w-64 bg-[#f0f0f0] h-full transform ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out shadow-lg`}
          >
            <div className="relative">
              {/* Close Icon */}
              {isOpen && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-0 right-4 text-white text-2xl"
                >
                  <FaTimes  className='text-black'/>
                </button>
              )}

              <div className="p-4 mt-5 relative top-4">
                <Link
                  to="/"
                  className="block py-2 px-4 hover:bg-black  hover:text-white rounded "
                  onClick={() => {
                    setIsOpen(false);
                    handleScrollToTop();
                  }}
                >
                  HOME
                </Link>
                <Link
                  to="/products"
                  className="block py-2 px-4 hover:bg-black  hover:text-white rounded"
                  onClick={() => {
                    setIsOpen(false);
                    handleScrollToTop();
                  }}
                >
                  PRODUCTS
                </Link>
                <Link
                  to="/about"
                  className="block py-2 px-4 hover:bg-black  hover:text-white rounded"
                  onClick={() => {
                    setIsOpen(false);
                    handleScrollToTop();
                  }}
                >
                  ABOUT
                </Link>
                <Link
                  to="/contact"
                  className="block py-2 px-4 hover:bg-black  hover:text-white rounded"
                  onClick={() => {
                    setIsOpen(false);
                    handleScrollToTop();
                  }}
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex md:items-center md:space-x-4 text-lg">
          <Link
            to="/"
            className="py-2 px-4 hover:bg-black  hover:text-white rounded font-semibold"
            onClick={handleScrollToTop}
          >
            HOME
          </Link>
          <Link
            to="/products"
            className="py-2 px-4 hover:bg-black  hover:text-white rounded font-semibold"
            onClick={handleScrollToTop}
          >
            PRODUCTS
          </Link>
          <Link
            to="/about"
            className="py-2 px-4 hover:bg-black  hover:text-white rounded font-semibold"
            onClick={handleScrollToTop}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="py-2 px-4 hover:bg-black  hover:text-white rounded font-semibold"
            onClick={handleScrollToTop}
          >
            CONTACT
          </Link>
        </div>

     {/* This is contact button section */}
        <div className='flex space-x-4 hidden sm:flex'>
          <button className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors'>
            <a href="tel:18004190505" className="hover:text-white">Contact us</a>
          </button>
          <button className='bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors'>
            <a href="mailto:smarthomeappliances84@gmail.com" className="hover:text-white">Send Mail</a>
          </button>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;