import React from "react";
import "./Course.css";
import courseImage from "../assets/course.jpg"; // Add your course image here

const Course: React.FC = () => {
  return (
    <div className="course-container">
      <h1 className="course-title">Our Course</h1>

      <div className="course-card">
        <img src={courseImage} alt="Stock Market Course" className="course-image" />
        
        <div className="course-content">
          <h2 className="course-card-title">Stock Market Mastery</h2>
          <div className="course-card-description">
            <ul className="course-features">
              <li>Introduction to Stock Markets</li>
              <li>Technical & Fundamental Analysis</li>
              <li>Support and Resistance</li>
              <li>Risk Management Techniques</li>
              <li>Live Market Trading Sessions</li>
              <li>Lifetime Access to Whatsapp Group</li>
            </ul>
          </div>

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
