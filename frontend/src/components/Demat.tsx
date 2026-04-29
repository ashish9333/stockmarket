import React from "react";
import "./Demat.css";
import dhanLogo from "../assets/dhan.png";
import sharkLogo from "../assets/shark.jpg";

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
            </ul>
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
            <img src={sharkLogo} alt="Kotak Neo" className="broker-logo" />
            <ul className="broker-points">
              <li>Crypto Perpetual Futures: Trade popular assets like Bitcoin (BTC), Ethereum (ETH), and Solana (SOL) without expiry dates</li>
              <li>High Leverage: Offers leverage up to 150x, allowing traders to gain significant market exposure with a small amount of capital</li>
              <li>No Crypto Ownership Required: Users profit from price movements using USDT-margined contracts, meaning you don't need to hold the underlying volatile assets</li>
            </ul>
            <a
              className="broker-cta"
              href="https://sharkexchange.in/referral?code=RZU990"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Shark Exchange Account
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Demat;
