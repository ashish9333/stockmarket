import React, { useState } from "react";
import "./Course.css";
import courseImage from "../assets/course.jpg"; // Add your image

const Course: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const whyChooseUs = [
    {
      title: "📊 Practical Learning",
      desc: "Hands-on sessions with real market case studies and examples.",
    },
    {
      title: "💡 Expert Mentorship",
      desc: "Learn directly from experienced traders with proven strategies.",
    },
    {
      title: "📈 Lifetime Access",
      desc: "Access all learning resources, recordings, and updates forever.",
    },
  ];

  return (
    <div className="course-container">
      <h1 className="course-title">Stock Market Mastery</h1>

      {/* Course Card */}
      <div className="course-card">
        <img
          src={courseImage}
          alt="Stock Market Course"
          className="course-image"
        />

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

      {/* Why Choose Us Accordion */}
      <div className="why-card">
        <h2 className="why-title">Why Choose The Stock Trader?</h2>
        <div className="accordion">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="accordion-item">
              <button
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                <span className="accordion-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="accordion-content">
                  <p>{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
