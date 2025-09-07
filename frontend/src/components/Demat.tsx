import React from "react";
import "./Demat.css";
import dhanLogo from "../assets/dhan.png";
import kotakLogo from "../assets/kotak.png";

const Demat: React.FC = () => {
  return (
    <section className="broker-wrap">
      <div className="broker-inner">
        <h1 className="broker-title">Open Your Trading Account</h1>
        <p className="broker-sub">
          Pick a trusted broker and start your journey today.
        </p>

        <div className="broker-grid">
          <article className="broker-card">
            <img src={dhanLogo} alt="Dhan" className="broker-logo" />
            <ul className="broker-points">
              <li>Zero brokerage on equity delivery</li>
              <li>Fast, reliable order execution</li>
              <li>Clean UI with powerful charts</li>
e           </ul>
            <a
              className="broker-cta"
              href="https://join.dhan.co/?invite=AEQAF94174"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Dhan Account
            </a>
          </article>

          <article className="broker-card">
            <img src={kotakLogo} alt="Kotak Neo" className="broker-logo" />
            <ul className="broker-points">
              <li>Flat brokerage, transparent pricing</li>
              <li>Backed by Kotak ecosystem</li>
              <li>Advanced tools & insights</li>
            </ul>
            <a
              className="broker-cta"
              href="https://kotaksecurities.ref-r.com/c/i/32531/86664963"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Kotak Neo Account
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Demat;
