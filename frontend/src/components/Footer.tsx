import React from "react";
import "./Footer.css";
// import logo from "../assets/logo.png"; // Adjust path as needed
import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>
          FOR MORE <span>INFORMATION</span>
        </h2>

        <div className="contact-section">
          <div className="contact-item">
            <h3>Phone</h3>
            <p><strong>+91 9333511512</strong></p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>
              <a href="mailto:ashishk.9333@gmail.com">
                ashishk.9333@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* <div className="subscribe-section">
          <input type="email" placeholder="ashishk.9333@gmail.com" />
          <button>Subscribe</button>
        </div> */}

        <div className="social-icons">
          <a href="https://www.youtube.com/@thestocktrader9333" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/the.stock.trader_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* <div className="footer-logo">
        <img src={logo} alt="Company Logo" />
        </div> */}

        <div className="copyright">
          <p>Copyright 2025 - <span className="brand">THE STOCK TRADER</span></p>
          <p>Created with ❤️ And &lt;/&gt; By <span className="author">ASHISH</span></p>
        </div>

        <div className="whatsapp-icon">
        <a
          href="https://wa.me/919333511512"  // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
