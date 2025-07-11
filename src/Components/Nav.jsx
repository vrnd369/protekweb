import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Nav.css";
import logo from "../Assets/protek logo.png"; // Adjust the path as necessary

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToHero = () => {
    setIsOpen(false);
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait a bit for the navigation to complete, then scroll
      setTimeout(() => {
        const heroSection = document.querySelector('.homepage-container');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const heroSection = document.querySelector('.homepage-container');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>

        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <button onClick={scrollToHero} className="nav-link-btn">HOME</button>
          <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
          <a href="#gallery" onClick={() => setIsOpen(false)}>GALLERY</a>
          <a href="#blogs" onClick={() => setIsOpen(false)}>BLOGS</a>
          <a href="#services" onClick={() => setIsOpen(false)}>SERVICES</a>
          <a href="#contactus" onClick={() => setIsOpen(false)}>CONTACT US</a>
        </div>
      </div>
    </nav>
  );
}
