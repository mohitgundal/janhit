import React from "react";
import { FaHandshake, FaLightbulb, FaUserFriends, FaHeart, FaShieldAlt, FaStar } from "react-icons/fa";
import "./CoreValues.css";

const values = [
  {
    icon: <FaHandshake />,
    title: "Customer First",
    desc: "We prioritize customer satisfaction and well-being above all.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Integrity & Trust",
    desc: "We uphold the highest standards of honesty and ethics.",
  },
  {
    icon: <FaHeart />,
    title: "Empathy & Care",
    desc: "We listen, understand, and care for every life we touch.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation for Impact",
    desc: "We embrace smart solutions to create real-world healthcare impact.",
  },
  {
    icon: <FaUserFriends />,
    title: "Teamwork",
    desc: "We grow stronger together through collaboration and support.",
  },
  {
    icon: <FaStar />,
    title: "Excellence",
    desc: "We strive to deliver the best in everything we do.",
  },
];

const CoreValues = () => {
  return (
    <section className="careers-section core-values">
      <h2>Our <span className="heading">Core Values</span></h2>
      <p>These values guide how we work, make decisions, and treat each other.</p>

      <div className="values-grid">
        {values.map((value, idx) => (
          <div className="value-card" key={idx}>
            <div className="icon">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
