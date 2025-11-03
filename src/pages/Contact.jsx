import React from "react";
import "../styles/Contact.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">
        I’d love to connect — whether it’s a question, collaboration idea, or just a friendly hello.
      </p>

      <div className="contact-wrapper">
        {/* Left side */}
        <div className="contact-info">
          <div className="contact-info-item">
            <Mail className="contact-icon" />
            <p>vanhdz246@gmail.com</p>
          </div>
          <div className="contact-info-item">
            <Phone className="contact-icon" />
            <p>+84 917 386 544</p>
          </div>
          <div className="contact-info-item">
            <MapPin className="contact-icon" />
            <p>District 12, Ho Chi Minh City</p>
          </div>
          <p className="contact-note">
            I usually reply within 24 hours. Don’t hesitate to reach out!
          </p>
        </div>

        {/* Right side */}
        <form className="contact-form">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Message</label>
          <textarea rows="4" placeholder="Write your message..." required></textarea>

          <button type="submit" className="contact-button">
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>

      <p className="contact-footer">
        © {new Date().getFullYear()} <span>Viet Anh Nguyen</span> — Built with ❤️ & React.
      </p>
    </div>
  );
};

export default Contact;
