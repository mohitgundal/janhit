import React from "react";
import "./ConnectWithUs.css";

const ConnectWithUs = ({ title = "Connect With Us", subtitle = "Have questions, feedback, or looking to collaborate? We’re here to help!" }) => {
  return (
    <section id="connectUs" className="connect-section">
      <div className="connect-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <form className="connect-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />

          <select required>
            <option value="">I'm reaching out regarding</option>
            <option value="general">General Inquiry</option>
            <option value="career">Career Opportunities</option>
            <option value="partnership">Partnership/Franchise</option>
            <option value="vendor">Vendor Collaboration</option>
            <option value="feedback">Customer Feedback</option>
            <option value="other">Other</option>
          </select>

          <textarea rows="5" placeholder="Your Message..." required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ConnectWithUs;
