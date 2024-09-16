/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import CarouselFadeExample from './Carousel/Carousel';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in ms
       // Whether animation should happen only once
    });
  }, []);

  const services = [
    {
      imgSrc: 'https://solvchem.com/wp-content/uploads/2018/11/Custom-Blending.png',
      description: 'Custom Blending',
    },
    {
      imgSrc: 'https://solvchem.com/wp-content/uploads/2018/11/Export-Services.png',
      description: 'Export Services',
    },
    {
      imgSrc: 'https://solvchem.com/wp-content/uploads/2018/11/Chemical-Distribution.png',
      description: 'Chemical Distribution',
    },
    {
      imgSrc: 'https://solvchem.com/wp-content/uploads/2018/11/Technical-Services.png',
      description: 'Technical Services',
    },
    {
      imgSrc: 'https://solvchem.com/wp-content/uploads/2018/11/Customer-Support.png',
      description: 'Customer Support',
    },
  ];

  return (
    <>
      {/* This is carousel */}
      <CarouselFadeExample />

      {/* This sustainable section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Left Column */}
            <div className="md:w-1/3 flex flex-col" data-aos="fade-up" data-aos-delay="100">
              <h2 className="font-bold text-[#21029B] text-xl md:text-2xl">SUSTAINABILITY</h2>
              <h2 className="text-xl md:text-2xl font-semibold mt-2">
                Responsible Workforce <br /> Responsible Chemistry
              </h2>
              <p className="text-lg mt-4">
                Sidharth Chem House embraces eco-conscious practices, enhancing resource efficiency in areas like raw material usage, energy conservation, waste reduction, water management, and workforce optimization to significantly reduce our environmental impact and foster long-term sustainability. Through innovative technologies and continuous process improvements.
              </p>
              <a className="font-light text-blue-500 mt-4 inline-block" href="#">
                Read more <span className="ml-2">→</span>
              </a>
            </div>

            {/* Right Column */}
            <div className="md:w-2/3 flex items-center justify-center mt-8 md:mt-0">
              <div className="relative w-full" data-aos="fade-up" data-aos-delay="200">
                <img
                  src="https://www.aarti-industries.com/Upload/homepage/home-sustainability1.jpg"
                  className="w-full h-auto rounded"
                  alt="Productivity"
                  title="Productivity"
                />
                <span className="absolute bottom-4 left-4 bg-blue-500 text-white py-1 px-2 rounded font-medium">
                  Productivity
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer section */}
      <div className="bg-[#F5F6F6]">
        <div className="container mx-auto px-4 py-8 w-[80%] ">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">What We Offer</h1>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={`${100 * (index + 1)}`}>
                <img src={service.imgSrc} alt={service.description} className="w-48 h-48 object-cover mb-4 " />
                <p className="text-lg font-medium text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
