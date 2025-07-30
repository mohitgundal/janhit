import React from "react";
import "./CareersHero.css";
import career_img_1 from "../../assets/career_1.jpg";

const CareersHero = () => {
  const scrollToOpenRoles = () => {
    const section = document.getElementById("open-roles");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="careers-hero">
      <img
        src={career_img_1}
        alt="Careers at Janhit Chemist"
        className="careers-hero-img"
      />
      <div className="careers-hero-section">
        <h1>
          Join the <br />
          <span className="highlight"> Janhit Chemist Family </span>
        </h1>
        <p>
          Be a part of something meaningful. Build your career with purpose
          and passion.
        </p>
        <button className="primary-btn" onClick={scrollToOpenRoles}>
          Explore Roles
        </button>
      </div>
    </section>
  );
};

export default CareersHero;
