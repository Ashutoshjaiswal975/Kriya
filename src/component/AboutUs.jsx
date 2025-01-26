import React from 'react';
import { Link } from "react-router-dom"; 

function AboutUs()  {
    return (
      <>
        {/* Navbar */}
        <nav className="navbar bg-gray-800 p-4 fixed w-full top-0 left-0 z-10">
          <div className="logo"><Link to="/home">Kriya</Link></div>
          <ul className="nav-links flex space-x-6 ml-auto">
            <li><Link to="/home" className="text-white">Home</Link></li>
            <li><Link to="/auth" className="text-white bg-blue-600 px-4 py-2 rounded-lg">Log In / Sign Up</Link></li>
            <li><Link to="/contact" className="text-white">Contact Us</Link></li>
          </ul>
        </nav>

        {/* About Us Content */}
        <div className="bg-gradient-to-r from-[#ff9966] via-[#ff5e62] to-[#ff9966] text-white py-12 px-6 sm:px-12 min-h-screen mt-20">


          <div className="max-w-screen-xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About KRIYA</h1>
            <p className="text-lg sm:text-xl mb-10">
            At KRIYA, we are dedicated to providing a seamless and professional service experience, ensuring that every client’s needs are met with efficiency and expertise. Our platform serves as a one-stop solution where individuals and businesses can request a wide range of services, and we guarantee fulfillment within the promised time frame through our highly skilled professionals.

With our commitment to excellence, KRIYA connects clients with trusted service providers across various sectors, including home cleaning, salon and beauty care, healthcare assistance, business support, and many more. Whether it’s a household requirement or a corporate necessity, our platform ensures convenience, reliability, and superior service quality.

Guided by our motto, "Your Needs Are Our Job," we strive to redefine service accessibility, making professional assistance just a request away.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Our Strengths</h2>
                <p className="text-base mb-4">
                
At KRIYA, we combine technology and skilled professionals to deliver seamless, high-quality services. Our dedicated teams work remotely, ensuring accessibility across time zones and locations. With a focus on innovation, reliability, and professionalism, we strive to meet every client’s needs efficiently and effectively.
                </p>
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
                  alt="Teamwork"
                />
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Our Goal</h2>
                <p className="text-base mb-4">
                  
                Our goal at KRIYA is to be a one-stop platform for all service needs, 
                connecting clients with skilled professionals for timely, efficient, 
                and high-quality solutions. Whether it's home cleaning, salon services, 
                healthcare, or any other service, we ensure reliability, professionalism, 
                and customer satisfaction.
                </p>
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
                  alt="Business Goal"
                />
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-base mb-4">
                Our vision at KRIYA is to revolutionize the service industry by 
                seamlessly connecting clients with trusted professionals. We aim 
                to create a hassle-free, efficient, and customer-centric platform
                 where every need is met with quality, reliability, and professionalism.
                </p>
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
                  alt="Business Partnership"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
            <p className="text-lg sm:text-xl">
            Our team at KRIYA is composed of highly skilled professionals
             dedicated to delivering top-quality services across various 
             domains. Whether it's home cleaning, salon services, healthcare,
              or any other requirement, we ensure reliable, efficient, and 
              professional solutions tailored to your needs
            </p>
          </div>
        </div>
      </>
    );
}

export default AboutUs;
