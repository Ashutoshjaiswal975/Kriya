import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation
import "./Services.css"; // External CSS for styling

// List of services offered
const servicesList = [
  { id: 1, name: "Health Department", duration: "2 hours", description: "Get immediate health assistance from certified professionals." },
  { id: 2, name: "Electrician Service", duration: "1.5 hours", description: "Experienced electricians to fix all your electrical issues." },
  { id: 3, name: "Food Service", duration: "30 minutes", description: "Delicious meals delivered to your doorstep." },
  { id: 4, name: "Plumber Service", duration: "2 hours", description: "Professional plumbers for all types of plumbing work." },
  { id: 5, name: "Carpenter Service", duration: "3 hours", description: "Expert carpenters for all your furniture needs." },
  { id: 6, name: "Salon & Parlour (Unisex)", duration: "1 hour", description: "A full salon experience for both men and women." }
];

// Workers assigned to each service
const workers = {
  1: ["Dr. Ankit Sharma", "Dr. Priya Mehta"],
  2: ["Raj Electrician", "Vikas Kumar"],
  3: ["Chef Rohan", "Chef Sanya"],
  4: ["Rahul Plumber", "Suresh Kumar"],
  5: ["Mohit Carpenter", "Amit Verma"],
  6: ["Stylist Neha", "Stylist Ravi"]
};

function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [assignedWorker, setAssignedWorker] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isWorkStarted, setIsWorkStarted] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Handle service selection
  const handleServiceClick = (service) => {
    setSelectedService(service);
    setProgress(0);
    setIsWorkStarted(false);
    const workerList = workers[service.id];
    const assigned = workerList[Math.floor(Math.random() * workerList.length)];
    setAssignedWorker(assigned);
  };

  // Simulate progress update when work is started
  useEffect(() => {
    if (isWorkStarted && progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
      }, 3000);

      return () => clearInterval(interval); // Cleanup interval when the component unmounts or progress reaches 100
    }
  }, [isWorkStarted, progress]);

  // Filter services based on search input
  const filteredServices = servicesList.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="services-container">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="logo"><Link to="/home">Kriya</Link></div>
        <ul className="nav-links">
          <li><Link to="/" className="home-link">Home</Link></li>
          
           <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/auth" className="login-btn">Log In / Sign Up</Link></li> {/* Corrected link */}
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      <h2>Choose a Service</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search services..."
        className="search-box"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="services-grid">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => handleServiceClick(service)}
          >
            <h3>{service.name}</h3>
            <p>Estimated Time: {service.duration}</p>

            {/* Hover effect to show service details */}
            <div className="service-hover-details">
              <p>{service.description}</p>
              <p><strong>Assigned Worker:</strong> {workers[service.id].join(", ")}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Display selected service and assigned worker */}
      {selectedService && assignedWorker && (
        <div className="assigned-service">
          <h3>Service Selected: {selectedService.name}</h3>
          <p><strong>Assigned Worker:</strong> {assignedWorker}</p>
          <p><strong>Time Limit:</strong> {selectedService.duration}</p>

          {/* Confirm Button to Start Work */}
          {!isWorkStarted ? (
            <button className="confirm-button" onClick={() => setIsWorkStarted(true)}>Start Work</button>
          ) : (
            <div className="progress-container">
              <p>Work Progress: {progress}%</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
              </div>
              {progress === 100 && <p className="completed-text">Work Completed ✅</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Services;

