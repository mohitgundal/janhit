import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Priya Deshmukh",
    location: "Mulund, Mumbai",
    feedback:
      "Janhit Chemist has always been my go-to for affordable medicines. Their staff is kind and helpful. Truly grateful!",
  },
  {
    name: "Rahul Patil",
    location: "Ghatkopar, Mumbai",
    feedback:
      "Their service quality and variety of medicines are unmatched. Even during emergencies, they were there for us.",
  },
  {
    name: "Dr. Meenal Joshi",
    location: "Sakinaka, Mumbai",
    feedback:
      "As a doctor, I trust Janhit for both my clinic and personal needs. They’ve built an honest, reliable pharmacy network.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What <span className="highlight"> People Say</span></h2>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-feedback">“{item.feedback}”</p>
            <h4 className="testimonial-name">— {item.name}</h4>
            <p className="testimonial-location">{item.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
