import React from "react";
import "./Demat.css";
import dhanLogo from "../assets/dhan.png";
import kotakLogo from "../assets/kotak.png";

const Demat: React.FC = () => {
  return (
    <div className="broker-account-container">
      <h1 className="page-title">Open Your Broker Account</h1>

      <div className="broker-section">
        <div className="broker-card dhan">
          <img src={dhanLogo} alt="Dhan Logo" className="broker-logo" />
          <p>
            Experience lightning-fast trading with Dhan. Zero brokerage on equity delivery.
          </p>
          <a
            href="https://join.dhan.co/?invite=AEQAF94174"
            target="_blank"
            rel="noopener noreferrer"
            className="broker-button"
          >
            Open Dhan Account
          </a>
        </div>

        <div className="broker-card kotak">
          <img src={kotakLogo} alt="Kotak Neo Logo" className="broker-logo" />
          <p>
            Trade with confidence using Kotak Neo. Flat brokerage and powerful tools.
          </p>
          <a
            href="https://kotaksecurities.ref-r.com/c/i/32531/86664963"
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
