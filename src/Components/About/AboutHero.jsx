import React from "react";
import "./AboutHero.css";
import about_hero from "../../assets/about_1.jpg"

const AboutHero = () => {

  const scrollToConnectWithUs = () => {
    const section = document.getElementById("connectUs");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="aboutTop"
      className="about-hero scroll-offset"
      style={{ backgroundImage: `url(${about_hero})` }}
    >
      <div className="about-overlay">
        <div className="about-hero-content">
          <h1>About <span className="highlight"> Janhit Chemist</span></h1>
          <p>
            Bridging the gap between quality healthcare and accessibility across
            India.
          </p>
          <button className="about-button" onClick={scrollToConnectWithUs}>
          Join Now
        </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
