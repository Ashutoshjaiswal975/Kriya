import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Services.css";

const servicesList = [
  { id: 1, name: "Health Department", duration: "2 hours", description: "Get immediate health assistance from certified professionals." },
  { id: 2, name: "Electrician Service", duration: "1.5 hours", description: "Experienced electricians to fix all your electrical issues." },
  { id: 3, name: "Food Service", duration: "30 minutes", description: "Delicious meals delivered to your doorstep." },
  { id: 4, name: "Plumber Service", duration: "2 hours", description: "Professional plumbers for all types of plumbing work." },
  { id: 5, name: "Carpenter Service", duration: "3 hours", description: "Expert carpenters for all your furniture needs." },
  { id: 6, name: "Salon & Parlour (Unisex)", duration: "1 hour", description: "A full salon experience for both men and women." },
  { id: 7, name: "Cloth Laundry", duration: "4 hours", description: "Hassle-free laundry services for your clothing needs." },
  { id: 8, name: "Tailor Service", duration: "2 hours", description: "Get custom tailoring services at your doorstep." },
  { id: 9, name: "Home Delivery", duration: "45 minutes", description: "Fast and reliable home delivery services." }
];

const workers = {
  1: ["Dr. Ankit Sharma", "Dr. Priya Mehta"],
  2: ["Raj Electrician", "Vikas Kumar"],
  3: ["Chef Rohan", "Chef Sanya"],
  4: ["Rahul Plumber", "Suresh Kumar"],
  5: ["Mohit Carpenter", "Amit Verma"],
  6: ["Stylist Neha", "Stylist Ravi"],
  7: ["Laundry Expert Ayesha", "Laundry Expert Rohit"],
  8: ["Tailor Ramesh", "Tailor Pooja"],
  9: ["Delivery Boy Arun", "Delivery Girl Nisha"]
};

function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [assignedWorker, setAssignedWorker] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isWorkStarted, setIsWorkStarted] = useState(false);
  const [instructions, setInstructions] = useState("");
  const [appointment, setAppointment] = useState({ date: "", time: "" });
  const [address, setAddress] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [workerProgress, setWorkerProgress] = useState("");

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setAssignedWorker(null);
    setProgress(0);
    setIsWorkStarted(false);
    setInstructions("");
    setAppointment({ date: "", time: "" });
    setAddress("");
    setWorkerProgress("");
  };

  const handleConfirmService = () => {
    const workerList = workers[selectedService.id];
    const assigned = workerList[Math.floor(Math.random() * workerList.length)];
    setAssignedWorker(assigned);
    setIsWorkStarted(true);
  };

  useEffect(() => {
    if (isWorkStarted && progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isWorkStarted, progress]);

  const filteredServices = servicesList.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="services-container">
      <nav className="navbar">
        <div className="logo"><Link to="/home">Kriya</Link></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/auth">Log In / Sign Up</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      <h2>Choose a Service</h2>

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
            className={`service-card ${selectedService?.id === service.id ? "selected" : ""}`}
            onClick={() => handleServiceClick(service)}
          >
            <h3>{service.name}</h3>
            <p>Estimated Time: {service.duration}</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="service-details">
          <h3>Selected Service: {selectedService.name}</h3>

          <label>Provide Instructions:</label>
          <textarea
            className="instructions-box"
            placeholder="Describe your issue..."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />

          <div className="appointment-box">
            <label>Select Date:</label>
            <input
              type="date"
              value={appointment.date}
              onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
            />

            <label>Select Time:</label>
            <input
              type="time"
              value={appointment.time}
              onChange={(e) => setAppointment({ ...appointment, time: e.target.value })}
            />
          </div>

          <label>Enter Address:</label>
          <input
            type="text"
            className="address-input"
            placeholder="Enter your address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button className="confirm-button" onClick={handleConfirmService}>
            Confirm Service
          </button>
        </div>
      )}

      {assignedWorker && (
        <div className="progress-report">
          <h3>Work Progress Report</h3>
          <p>Assigned Worker: {assignedWorker}</p>
          <p>Progress: {progress}%</p>
          <textarea
            className="worker-progress-box"
            placeholder="Worker updates..."
            value={workerProgress}
            onChange={(e) => setWorkerProgress(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default Services;
