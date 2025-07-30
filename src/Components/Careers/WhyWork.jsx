import React from "react";
import { GiPlantSeed } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";
import "./WhyWork.css";

const WhyWork = () => {
  return (
    <section className="careers-section why-us">
      <h2>
        Why Work <br /> <span className="highlight"> With Us </span>
      </h2>
      <p>We value growth, well-being, and impact. Here’s why people love working here.</p>
      <div className="reasons-container">
        <div className="reason-card">
          <GiPlantSeed className="reason-icon" />
          <h3>Personal Growth</h3>
          <p>We provide continuous learning opportunities for career advancement.</p>
        </div>
        <div className="reason-card">
          <FaHandsHelping className="reason-icon" />
          <h3>Collaborative Culture</h3>
          <p>Work with a supportive team that values your voice and ideas.</p>
        </div>
        <div className="reason-card">
          <HiOutlineBriefcase className="reason-icon" />
          <h3>Purposeful Work</h3>
          <p>Your work directly impacts the lives of people through accessible healthcare.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyWork;
