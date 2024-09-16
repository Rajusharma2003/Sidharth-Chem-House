/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS


function CarouselFadeExample() {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative ">
      <Carousel fade className="relative  overflow-hidden">
        <Carousel.Item className="relative">
          <img
            className="d-block w-full h-full object-cover"
            src="https://www.aarti-industries.com/Upload/homepage/slider1.jpg"
            alt="First slide"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white p-4">
            <h1 className="text-2xl font-bold mb-4">
              A High-Performing <br />
              Team Co-Creating a <br />
              World-Class Company
            </h1>
            <p className="text-lg mb-4">
              Our talent strategy has been formulated specifically with the aim of being a net talent exporter
            </p>
           
          </div>
        </Carousel.Item>

        <Carousel.Item className="relative">
          <img
            className="d-block w-full h-full object-cover"
            src="https://www.aarti-industries.com/Upload/homepage/ail-banner3(1).jpg"
            alt="Second slide"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white p-4">
            <h1 className="text-2xl font-bold mb-4">
              Innovating for a <br />
              Brighter Future
            </h1>
            <p className="text-lg mb-4">
              Our solutions are designed to lead the way in innovation and sustainability.
            </p>
            
          </div>
        </Carousel.Item>

        <Carousel.Item className="relative">
          <img
            className="d-block w-full h-full object-cover"
            src="https://www.aarti-industries.com/Upload/homepage/aarti-industries-banner-2b.jpg"
            alt="Third slide"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white p-4">
            <h1 className="text-2xl font-bold mb-4">
              Pioneering Excellence <br />
              in Every Endeavor
            </h1>
            <p className="text-lg mb-4">
              Committed to delivering exceptional quality and value through our products and services.
            </p>
            
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
