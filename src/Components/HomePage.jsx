/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import CarouselFadeExample from './Carousel/Carousel';
import { FaLightbulb, FaMoon, FaHeart, FaScissors, FaLaptop, FaClock } from 'react-icons/fa6';
import { FaCogs,} from 'react-icons/fa';
import Footer from './Footer';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in ms.
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


  const [hoverText, setHoverText] = useState('');

  const items = [
    { title: 'Personalized Service', hoverText: 'Prompt, personalized service', icon: <FaCogs /> },
    { title: 'Product Expertise', hoverText: 'Extensive knowledge of products', icon: <FaLightbulb /> },
    { title: 'Technical Experience', hoverText: 'Decades of technical expertise', icon: <FaMoon /> },
    { title: 'Wide Range of Markets', hoverText: 'Serving multiple markets', icon: <FaHeart /> },
    { title: 'Quality-Controlled Lab', hoverText: 'Fully equipped, quality-controlled lab', icon: <FaScissors /> },
    { title: 'Fleet of Tractors', hoverText: 'Comprehensive fleet for delivery', icon: <FaLaptop /> },
    { title: '24/7 Logistics', hoverText: 'Round-the-clock logistics and services', icon: <FaClock /> },
  ];


  const itemCount = items.length;
  const radius = 200; // Adjust the radius as needed

  return (
    <>
      {/* This is carousel */}
      <CarouselFadeExample />

      {/* This SUSTAINABILITY section */}
      <section className="py-12 sm:flex-wrap">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Left Column */}
            <div className="md:w-1/2 flex flex-col" data-aos="fade-up" data-aos-delay="100">
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
        <div className="container mx-auto px-4 py-8 w-[90%] ">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">What We Offer</h1>
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={`${100 * (index + 1)}`}>
                <img src={service.imgSrc} alt={service.description} className="w-48 h-48 object-cover mb-4 "/>
                <p className="text-lg font-medium text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


  {/* this is another div section */}
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 p-4"  data-aos="fade-up" data-aos-delay="200">
      {/* First div with image */}
      <div className="w-full md:w-1/2">
        <img 
          src="https://img.freepik.com/premium-photo/microscope-lab-glassware-modern-medical-laboratory-design_1240525-74336.jpg?uid=R163215126&ga=GA1.1.332943406.1726205077&semt=ais_hybrid" 
          alt="Microscope Lab" 
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Second div with text content */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0" >
        <h2 className="text-2xl font-bold mb-2">Customized Product & Service Solutions</h2>
        <p className="text-gray-700 mb-4 text-xl">
          SolvChem emphasizes quality at every level. We supply top-grade bulk chemicals, packaged goods, 
          customized blends and factory-packaged solutions to customers in numerous industries including CASE, 
          HI&I, Chemical Manufacturing and others.
        </p>
        <button className="bg-[#21029E] text-white py-2 px-4 rounded hover:bg-blue-500">Learn More</button>
      </div>
    </div>
      

  {/* This is another div section*/}
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 p-4" data-aos="fade-up" data-aos-delay="200">
      {/* First div with text content */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-2">Driving Value by Focusing on Customer Success</h2>
          <p className="text-gray-700 mb-4 text-xl">
          SolvChem is a family-owned, minority-certified business founded in 1981. We are a leading independent chemical distributor based in Pearland, Texas, primarily serving the Texas, Louisiana and Arkansas regions. Our goal is to help our customers succeed by delivering high-quality product and service solutions tailored to their unique needs — enabling them to better manage their supply chain needs and achieve success! 
          <br />
          Whatever your business goals are, our team is here to help you meet them. To learn more about our chemical supply services, and to find out why so many business trust SolvChem with their chemical needs, contact us today.
          </p>
          <button className="bg-[#21029E] text-white py-2 px-4 rounded hover:bg-blue-500">More About Us</button>
        </div>


      {/*  Second div with image */}
        <div className="w-full md:w-1/2">
          <img 
            src="https://img.freepik.com/premium-vector/business-investment-growth-progress-increase-with-arrow-rising-up-technology-background_252172-1398.jpg?uid=R163215126&ga=GA1.1.332943406.1726205077&semt=ais_hybrid" 
            alt="Microscope Lab" 
            className="w-full h-auto rounded-md"
          />
        </div>
    </div>
      

{/* This is A Promise of Excellence section */}
    <section className="py-8 bg-[#F5F6F6]" data-aos="fade-up" data-aos-delay="200">
      <h2 className="text-4xl font-bold text-center mb-14">A Promise of Excellence</h2>
      <div className="flex flex-wrap justify-evenly gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
        <img
            src="https://www.aarti-industries.com/images/products.svg"
            alt="Products"
            className="w-28 h-28 mb-4 cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <p className="text-2xl font-bold">100 +</p>
          <p className="text-lg">Products</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://www.aarti-industries.com/images/indian-customers.svg" alt="Indian Customers" className="w-28 h-28 mb-4 cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-110"/>
          <p className="text-2xl font-bold">700 +</p>
          <p className="text-lg">Indian Customers</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://www.aarti-industries.com/images/manufacturing-plants.svg" alt="Manufacturing Plants" className="w-28 h-28 mb-4 cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-110"/>
          <p className="text-2xl font-bold">16 +</p>
          <p className="text-lg">Manufacturing Plants</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://www.aarti-industries.com/images/employees.svg" alt="Employees" className="w-28 h-28 mb-4 cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-110"/>
          <p className="text-2xl font-bold">6000 +</p>
          <p className="text-lg">Employees</p>
        </div>
      </div>
    </section>

   
   {/* 7 Reasion section */}
    <div className="py-10 text-center bg-[#21029E]" data-aos="fade-up" data-aos-delay="200">
      <h1 className="text-3xl font-bold text-white mb-20">7 Reasons to Make Sidharth Chem House <br /> Your Chemical Distribution Company</h1>
      <div className="space-y-6">
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-full hover:bg-gray-200 transition duration-300"
              onMouseEnter={() => setHoverText(`${item.title}: ${item.hoverText}`)}
              onMouseLeave={() => setHoverText('Hover over an icon')}
            >
              <div className="text-4xl text-blue-600 mb-4">{item.icon}</div>
              <h4 className="text-lg font-bold">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
          <p className="text-2xl font-medium text-white mt-14">{hoverText}</p>

    </div>


    {/* contact us  */}
    <div className='mt-10 mb-10' data-aos="fade-up" data-aos-delay="200">
      <div className=" bg-yellow-500 w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between p-6 shadow-lg rounded-lg">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold mb-2">
            Get Your Quote or Call: <a href="tel:800-622-3990" className="text-[#21029E]">800-622-3990 (Toll Free)</a>
          </p>
          <p className="text-lg font-semibold">
            Please contact us by calling or filling out the form on the contact us page.
          </p>
        </div>
        <a 
          href="tel:800-622-3990" 
          className="bg-[#21029E] text-white px-4 py-2 rounded hover:bg-blue-900 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
    

<Footer/>


    </>
  );
};

export default HomePage;
