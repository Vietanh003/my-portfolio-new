import React from "react";
import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-col">
          <h6><strong>Meet me at</strong></h6>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Linked</a></li>
            <li><a href="#">Github</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h6><strong>Address</strong></h6>
          <p>Nguyen Van Qua</p>
          <p>District 12, Ho Chi Minh City</p>
        </div>

        <div className="footer-col">
          <h6><strong>Contact</strong></h6>
          <p>
            Email:{" "}
            <a href="vanhdz246@gmail.com">mail</a>
          </p>
          <p>Tel: 0917386544</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
