import React, { useEffect, useState } from "react";
import "./ImpactStats.css";

// ✅ Import icons
import { FaStore, FaSmile, FaMapMarkedAlt, FaHistory } from "react-icons/fa";

const stats = [
  { label: "Stores Across Mumbai", value: 35, icon: <FaStore /> },
  { label: "Happy Customers", value: 50000, icon: <FaSmile /> },
  { label: "Years of Service", value: 11, icon: <FaHistory /> },
  { label: "Cities Reached", value: 5, icon: <FaMapMarkedAlt /> },
];

const ImpactStats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector(".impact-stats");
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 1000;
        const increment = Math.ceil(end / (duration / 20));

        const interval = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(interval);
          }
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = start;
            return updated;
          });
        }, 20);
      });
    }
  }, [hasAnimated]);

  return (
    <section className="impact-stats">
      <h2>Our <span className="highlight"> Reach & Impact</span></h2>
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <h3 className="stat-value">{counts[idx].toLocaleString()}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
