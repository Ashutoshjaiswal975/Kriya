import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation
import "./AuthPage.css"; // External CSS for styling

function AuthPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For navigation

  // Simulate login process
  const handleLogin = (e) => {
    e.preventDefault();

    // For now, we just check if username and password are not empty
    if (username && password) {
      setError(""); // Clear any previous errors
      navigate("/services"); // Redirect to services page after login
    } else {
      setError("Both fields are required!"); // Show error if fields are empty
    }
  };

  return (
    <div className="auth-container">
      {/* Top Navigation Bar with Home Button */}
      <nav className="navbar">
        <div className="logo">Kriya</div>
        <ul className="nav-links">
          <li><Link to="/" className="home-link">Home</Link></li>
         
          
          <li><Link to="/auth" className="login-btn">Log In / Sign Up</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      <h2>Login / Sign Up</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>} {/* Error message */}
        <button type="submit" className="login-button">Log In</button>
      </form>

      <p>Don't have an account? <span className="signup-link">Sign Up</span></p>
    </div>
  );
}

export default AuthPage;
