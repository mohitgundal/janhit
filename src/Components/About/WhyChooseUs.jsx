import React from "react";
import "./WhyChooseUs.css";
import { FaCheckCircle, FaClock, FaHandHoldingHeart, FaTags } from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle />,
    title: "Trusted Quality",
    description: "All products are sourced from reputed and certified suppliers.",
  },
  {
    icon: <FaClock />,
    title: "24/7 Availability",
    description: "Our services ensure healthcare is accessible anytime, anywhere.",
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Customer-Centric",
    description: "Every decision we make is to benefit our customers’ well-being.",
  },
  {
    icon: <FaTags />,
    title: "Affordable Pricing",
    description: "We believe in fair pricing with no compromise on quality.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <h2>Why Choose Us</h2>
      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
