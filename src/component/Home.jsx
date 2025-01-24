import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css"; // External CSS for styling

function Home() {
  const navigate = useNavigate(); // For navigation

  // Navigate to home page
  const handleGetStarted = () => {
    navigate("/home"); // Redirect to home page
  };

  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Kriya</div>
        <ul className="nav-links">
          
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="auth" className="login-btn">Log In / Sign Up</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to Kriya</h1>
        <p>Your journey towards innovation starts here</p>
        <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
      </header>
    </div>
  );
}

export default Home;
