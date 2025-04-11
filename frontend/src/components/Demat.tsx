import React from "react";
import "./Demat.css";

const Demat: React.FC = () => {
  return (
    <div className="broker-account-container">
      <h1 className="page-title">Open Your Broker Account</h1>

      <div className="broker-section">
        <div className="broker-card dhan">
          <h2>Dhan Account</h2>
          <p>Experience lightning-fast trading with Dhan. Zero brokerage on equity delivery.</p>
          <a
            href="https://dhan.co"
            target="_blank"
            rel="noopener noreferrer"
            className="broker-button"
          >
            Open Dhan Account
          </a>
        </div>

        <div className="broker-card kotak">
          <h2>Kotak Neo Account</h2>
          <p>Trade with confidence using Kotak Neo. Flat brokerage and powerful tools.</p>
          <a
            href="https://neo.kotaksecurities.com"
            target="_blank"
            rel="noopener noreferrer"
            className="broker-button"
          >
            Open Kotak Neo Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Demat;
