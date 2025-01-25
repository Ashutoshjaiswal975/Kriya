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
        <div className="bg-gray-900 text-white py-12 px-6 sm:px-12 min-h-screen mt-20">

          <div className="max-w-screen-xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About KRIYA</h1>
            <p className="text-lg sm:text-xl mb-10">
              Welcome to KRIYA! Our goal is to bridge technical and financial
              barriers, empowering individuals and businesses to create websites,
              sell online, and reach global audiences. We provide innovative solutions
              for both beginners and experts alike!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Our Strengths</h2>
                <p className="text-base mb-4">
                  We are committed to utilizing technology and human resources
                  effectively, ensuring that every client gets a dedicated team
                  working remotely, bridging the gap of time zones and physical
                  distances.
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
                  Our unique business principle is ‘Same quality, but significantly
                  lower cost’. We help small and medium-sized businesses overcome
                  outsourcing challenges while providing cost-effective solutions.
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
                  We strive to deliver end-to-end solutions using the latest
                  technology, all while ensuring that every project is executed
                  successfully, meeting our clients' expectations and needs.
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
              Our team consists of skilled professionals who work remotely to
              provide innovative solutions and ensure top-quality service for all
              clients.
            </p>
          </div>
        </div>
      </>
    );
}

export default AboutUs;
