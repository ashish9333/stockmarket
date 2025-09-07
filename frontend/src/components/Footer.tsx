import React from "react";
import "./Footer.css";
import { FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="foot-brand">
          <img src={logo} alt="The Stock Trader" />
          <p>Learn proven strategies with live sessions & lifetime access.</p>
        </div>

        <div className="foot-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/course">Course</a>
          <a href="/demat">Open Account</a>
          {/* <a href="/news">Business News</a> */}
        </div>

        <div className="foot-contact">
          <h4>Contact</h4>
          <p><strong>Phone:</strong> +91 9333511512</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:ashishk.9333@gmail.com">ashishk.9333@gmail.com</a>
          </p>
          <div className="social">
            <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            {/* <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a> */}
          </div>
        </div>
      </div>

      <div className="foot-bottom">
        <p>© {new Date().getFullYear()} THE STOCK TRADER — All rights reserved.</p>
        <p>Built with ❤️ by ASHISH</p>
      </div>

      {/* Floating WhatsApp */}
      <a
        className="wa-float"
        href="https://wa.me/919333511512?text=Hi%20The%20Stock%20Trader%2C%20I%27m%20interested%20in%20your%20course."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;
