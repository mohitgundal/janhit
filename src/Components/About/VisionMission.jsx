// VisionMission.jsx
import React from "react";
import "./VisionMission.css"
import { FaBullseye, FaLightbulb } from "react-icons/fa"; // FontAwesome icons

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      <h2>Our <span className="heading"> Vision & Mission </span></h2>
      <div className="vision-mission-grid">
        <div className="vision-card">
          <FaLightbulb className="vision-icon" />
          <h3>Our Vision</h3>
          <p>
            To be India’s most trusted healthcare partner by ensuring every individual has access
            to affordable, quality medicines - regardless of where they live.
          </p>
        </div>
        <div className="mission-card">
          <FaBullseye className="vision-icon" />
          <h3>Our Mission</h3>
          <p>
            To build a nationwide network of pharmacies that uphold ethics, affordability, and
            care - driven by technology, community, and compassion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
