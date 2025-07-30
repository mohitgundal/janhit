import React from "react";
import "./OpenRoles.css";
import { FaArrowRight } from "react-icons/fa";

const roles = [
  {
    title: "Pharmacist",
    type: "Full-time · Ghatkopar",
  },
  {
    title: "Store Manager",
    type: "Full-time · Mulund",
  },
  {
    title: "Logistics Coordinator",
    type: "Remote · Mumbai",
  },
];

const OpenRoles = () => {
  return (
    <section id="open-roles" className="careers-section open-roles">
      <h2>
        Open <span className="highlight">Positions</span>
      </h2>
      <p>We're always looking for passionate individuals to join our team.</p>

      <div className="roles-container">
        {roles.map((role, index) => (
          <div className="role-card" key={index}>
            <h3>{role.title}</h3>
            <p>{role.type}</p>
            <button className="apply-btn">
              Apply Now <FaArrowRight className="arrow-icon" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenRoles;
