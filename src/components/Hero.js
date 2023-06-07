/* eslint-disable no-unused-vars */
// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styles & Images
import "./hero.css";
import heroBg from "../assets/images/bg1.png";
import ytb from "../assets/images/Youtube.png";
import telegram from "../assets/images/Telegram.png";
import twitter from "../assets/images/Twitter.png";

function Hero(props) {
  return (
    <section className="hero-section">
      <img src={heroBg} alt="hero-bg" className="hero-bg" />
      <div className="hero-info">
        <div className="hero-inner">
          <h2 className="hero-heading">
            THE WORLD'S NUMBER ONE DECENTRALIZED FINANCIAL COMMUNITY FUND
          </h2>
          <h5 className="hero-sub">
            The presence of Finaldefi Chain in the global market is long-term,
            the world home in the city of Metaverse will be the place to welcome
            the residents of Finaldefi.
          </h5>
          <div className="hero-socials">
            <a className="nav-link"  href="/"><img src={ytb} alt="hero-bg" className="hero-icon"/></a>
            <a className="nav-link"  href="/"><img src={telegram} alt="hero-bg" className="hero-icon"/></a>
            <a className="nav-link"  href="/"><img src={twitter} alt="hero-bg" className="hero-icon"/></a>
          </div>
        </div>
      </div>
      <div className="bg-line"></div>
    </section>
  );
}

Hero.defaultProps = {};
Hero.propTypes = {};

export default Hero;
