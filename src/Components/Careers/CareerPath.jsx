import React from "react";
import "./CareerPath.css";
import { FaUserGraduate, FaUserTie, FaChartLine, FaUsers, FaCrown } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserGraduate />,
    title: "Intern",
    desc: "Start your journey with guided mentorship.",
  },
  {
    icon: <FaUserTie />,
    title: "Associate",
    desc: "Build real-world experience and responsibility.",
  },
  {
    icon: <FaChartLine />,
    title: "Executive",
    desc: "Take ownership and drive projects.",
  },
  {
    icon: <FaUsers />,
    title: "Team Lead",
    desc: "Lead people and deliver results.",
  },
  {
    icon: <FaCrown />,
    title: "Manager / Leadership",
    desc: "Strategize, mentor, and grow the business.",
  },
];

const CareerPath = () => {
  return (
    <section className="careers-section career-path">
      <h2>Growth <span className="heading">Path</span></h2>
      <p>From interns to future leaders — we support every step of your journey.</p>

      <div className="path-timeline">
        {steps.map((step, idx) => (
          <div className="path-step" key={idx}>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerPath;
