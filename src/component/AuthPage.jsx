import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./AuthPage.css";

const AuthPage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo"><Link to="/home">Kriya</Link></div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
           <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/auth" className="login-btn">Log In / Sign Up</Link></li> {/* Corrected to '/auth' */}
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Auth Form */}
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <form className="w-50">
          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              className="form-control custom-input"
            />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
          </div>

          {/* Password input */}
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control custom-input"
            />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>

          {/* Checkbox & Forgot Password */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="form2Example31">
                  Remember me
                </label>
              </div>
            </div>
            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="button"
            className="btn btn-primary btn-block mb-4"
          >
            Sign in
          </button>

          {/* Register buttons */}
          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <button
              type="button"
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-facebook-f"></i>
            </button>

            <button
              type="button"
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-google"></i>
            </button>

            <button
              type="button"
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-twitter"></i>
            </button>

            <button
              type="button"
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthPage;
