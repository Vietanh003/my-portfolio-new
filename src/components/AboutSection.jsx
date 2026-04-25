import React from "react";
import "../styles/AboutSection.css";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <span className="about-kicker">About</span>
        <h2 className="about-title">A few things about me.</h2>
        <p className="about-text">
          I'm a <span className="highlight">fullstack developer</span> who enjoys
          shaping ideas into clean, reliable software. Always learning,
          always curious, always shipping.
        </p>

        <p className="about-link">
          <Link to="/about">More about me</Link>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
