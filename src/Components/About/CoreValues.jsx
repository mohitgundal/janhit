// CoreValues.jsx
import React from "react";
import "./CoreValues.css";
import { FaHandshake, FaStethoscope, FaGlobeAsia, FaBalanceScale, FaUsers, FaCheckCircle } from "react-icons/fa";

const CoreValues = () => {
  const values = [
    {
      icon: <FaHandshake />,
      title: "Trust & Transparency",
      description: "We believe in honest communication and ethical practices across all our outlets.",
    },
    {
      icon: <FaStethoscope />,
      title: "Affordable Healthcare",
      description: "Our goal is to make quality medicines accessible to everyone at fair prices.",
    },
    {
      icon: <FaGlobeAsia />,
      title: "Widespread Access",
      description: "We’re expanding our footprint to ensure health services reach even remote regions.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Integrity",
      description: "We uphold strong moral values in our operations and community dealings.",
    },
    {
      icon: <FaUsers />,
      title: "Customer-Centric",
      description: "Everything we do revolves around the well-being and satisfaction of our customers.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Consistency",
      description: "From product availability to service, we ensure reliable and consistent experiences.",
    },
  ];

  return (
    <section className="core-values-section">
      <h2>Our <span className="highlight"> Core Values</span></h2>
      <div className="core-values-grid">
        {values.map((value, index) => (
          <div className="value-card" key={index}>
            <div className="value-icon">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
