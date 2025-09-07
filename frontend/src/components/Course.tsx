import React from "react";
import "./Course.css";
import courseImage from "../assets/course.jpg"; // Add your image

const Course: React.FC = () => {
  return (
    <div className="course-container">
      <h1 className="course-title">Stock Market Mastery</h1>

      <div className="course-card">
        <img src={courseImage} alt="Stock Market Course" className="course-image" />

        <div className="course-content">
          <h2 className="course-card-title">What You’ll Learn</h2>
          <ul className="course-features">
            <li>✅ Introduction to Stock Markets</li>
            <li>✅ Technical & Fundamental Analysis</li>
            <li>✅ Risk Management Strategies</li>
            <li>✅ Live Market Trading Sessions</li>
            <li>✅ Lifetime Access to Resources</li>
          </ul>

          <a 
            href="https://forms.gle/ctbugW6tzm8zCD66A"
            target="_blank"
            rel="noopener noreferrer"
            className="enroll-button"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Course;
