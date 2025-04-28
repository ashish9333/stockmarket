import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate
import "./Home.css";

const Home: React.FC = () => {
  const words = [
    "Learn Support and Resistance Strategies",
    "Explore Candlesticks for Better Trading",
    "Understand Price Action Trading",
    "Master Candlestick Patterns",
  ];

  const [index, setIndex] = useState(0);
  const navigate = useNavigate(); // <-- Setup navigate hook

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [index]);

  // Handle button click
  const handleGetStarted = () => {
    navigate("/course"); // <-- Redirect to Course page
  };

  return (
    <div className="home-container">
      {/* Video Background */}
      <video autoPlay loop muted className="background-video">
        <source src="/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="overlay">
        <h1 className="home-title">Turn Your Trading Passion into Profit – Join Our Course!</h1>
        <p className="changing-text">{words[index]}</p>

        {/* Updated Button */}
        <button className="home-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
