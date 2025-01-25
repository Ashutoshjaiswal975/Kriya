import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./ContactUs.css";
  // Correct CSS import

function ContactUs() {
  // Form state to manage input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    terms: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    alert("Thank you for contacting us!");
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Kriya</div>
        <ul className="nav-links">
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/auth" className="login-btn">Log In / Sign Up</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      <div className="contact-container">
        <h6 className="contact-subtitle">Contact us</h6>
        <h2 className="contact-title">Get in touch</h2>
        <p className="contact-description">
          We'd love to hear from you. Please fill out this form.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="grid">
            <div className="input-group">
              <label htmlFor="firstName">First name</label>
              <input
                id="firstName"
                className="contact-input"
                name="firstName"
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                className="contact-input"
                name="lastName"
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="contact-input"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              className="contact-input"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">How can we help?</label>
            <textarea
              id="message"
              className="contact-input"
              name="message"
              rows="5"
              placeholder="Tell us a little about your query..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="contact-checkbox">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms">
              You agree to our friendly privacy policy
            </label>
          </div>

          <button type="submit" className="contact-button">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
