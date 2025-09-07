import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const toggle = () => setOpen((p) => !p);
  const close = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <Link to="/" className="brand" onClick={close} aria-label="Go Home">
            <img src={logo} alt="The Stock Trader logo" className="brand-logo" />
            <span className="brand-text">The Stock Trader</span>
          </Link>

          <button className="hamburger" onClick={toggle} aria-label="Toggle menu">
            {open ? <FiX /> : <FiMenu />}
          </button>

          <ul className={`nav-links ${open ? "open" : ""}`}>
            <li>
              <Link
                to="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                onClick={close}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/course"
                className={`nav-link ${pathname.startsWith("/course") ? "active" : ""}`}
                onClick={close}
              >
                Course
              </Link>
            </li>
            <li>
              <Link
                to="/demat"
                className={`nav-link ${pathname.startsWith("/demat") ? "active" : ""}`}
                onClick={close}
              >
                Open Account
              </Link>
            </li>
            {/* <li>
              <Link
                to="/news"
                className={`nav-link ${pathname.startsWith("/news") ? "active" : ""}`}
                onClick={close}
              >
                Business News
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>

      {/* Backdrop for mobile */}
      {open && <div className="nav-backdrop" onClick={close} />}
    </>
  );
};

export default Navbar;
