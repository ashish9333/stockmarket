import React, { useState, useEffect } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const words = [
    "Learn Support and Resistance Strategies",
    "Explore Candlesticks for Better Trading",
    "Understand Price Action Trading",
    "Master Candlestick Patterns",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="home-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="overlay">
        <div className="hero-content">
          <h1 className="home-title">
            <span className="gradient-text">Turn Passion into Profit</span>
          </h1>
          <p className="changing-text fade">{words[index]}</p>

          <div className="cta-buttons">
            <a href="/course">
              <button className="home-button primary">Get Started</button>
            </a>
            <a href="/course">
              <button className="home-button secondary">Explore Courses</button>
            </a>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="features-section">
        <h2 className="features-title">Why Choose The Stock Trader?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📊 Practical Learning</h3>
            <p>Hands-on sessions with real market case studies.</p>
          </div>
          <div className="feature-card">
            <h3>💡 Expert Mentorship</h3>
            <p>Learn directly from experienced market professionals.</p>
          </div>
          <div className="feature-card">
            <h3>📈 Lifetime Access</h3>
            <p>Access all materials and updates for life.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
