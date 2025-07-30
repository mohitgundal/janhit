import React from "react";
import "./PresenceStats.css";
import { FaStore, FaMapMarkedAlt, FaUsers, FaPills, FaClock } from "react-icons/fa";

const stats = [
  { icon: <FaStore />, label: "Stores", value: "38+" },
  { icon: <FaMapMarkedAlt />, label: "Districts", value: "5" },
  { icon: <FaUsers />, label: "Daily Customers", value: "5000+" },
  { icon: <FaPills />, label: "Medicines Available", value: "1000+" },
  { icon: <FaClock />, label: "Years of Service", value: "10+" },
];

const PresenceStats = () => {
  return (
    <section className="stats-section">
      <h2> <span className="highlight">Numbers </span>that <span className="highlight">Speak</span></h2>
      <p className="stats-subtitle">Our reach, trust, and community impact in numbers.</p>
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{item.icon}</div>
            <h3 className="stat-value">{item.value}</h3>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PresenceStats;
