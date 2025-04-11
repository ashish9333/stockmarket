import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Adjust path as needed
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking on overlay
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-image" />
            <h1 className="logo-text">The Stock Trader</h1>
          </div>

          {/* Hamburger Menu Button */}
          <button className="menu-button" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Navigation Links */}
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/demat" className="nav-link" onClick={closeMenu}>Account</Link></li>
            <li><Link to="/course" className="nav-link" onClick={closeMenu}>Courses</Link></li>
          </ul>
        </div>
      </nav>

      {/* Overlay Effect */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
