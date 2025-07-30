import React from "react";
import "./AboutPreview.css";
import aboutImage from "../../assets/about_1.jpg";
import { useNavigate } from "react-router-dom";

const AboutPreview = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/about"); // Change this path if your route is different
  };

  return (
    <section className="about-preview">
          <h2>About <span className="highlight">Janhit Chemist</span></h2>
      <div className="about-preview-container">
        <div className="about-preview-left">
          <img src={aboutImage} alt="About Janhit Chemist" />
        </div>
        <div className="about-preview-right">
          <p className="about-description">
            Janhit Chemist is committed to making quality healthcare accessible
            across India through innovation, trust, and community outreach.
          </p>

          <div className="vm-boxes">
            <div className="vm-box">
              <h3>Our Vision</h3>
              <p>To be India’s most trusted and accessible medical partner.</p>
            </div>
            <div className="vm-box">
              <h3>Our Mission</h3>
              <p>Delivering affordable healthcare to every doorstep with compassion and technology.</p>
            </div>
          </div>

          <button className="read-more-btn" onClick={handleRedirect}>
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
