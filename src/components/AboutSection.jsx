import React from "react";
import "../styles/AboutSection.css";
import { Link } from "react-router-dom";


const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I’m a passionate <span className="highlight">IT Developer</span> who loves exploring
          new technologies and creating modern, efficient solutions.  
          I’m driven by curiosity, always learning to improve my technical
          skills and contribute to products that make a difference.
        </p>

        <h6 className="about-link">
    <Link to="/about"><u>More about me</u></Link>
      </h6>
      </div>
    </section>
  );
};

export default AboutSection;
