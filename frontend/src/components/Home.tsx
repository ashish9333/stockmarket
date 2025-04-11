import React, { useState, useEffect } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const words = [
    // "Master the Markets, Maximize Your Profits!",
    "Learn Support and Resistance Strategies",
    "Explore Candlesticks for Better Trading",
    "Understand Price Action Trading",
    "Master Candlestick Patterns",
    
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change every 3 seconds

    return () => clearTimeout(timeout);
  }, [index]); // Only re-run when index changes

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
        <button className="home-button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
