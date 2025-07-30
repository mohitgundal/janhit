import React from "react";
import "./PresenceHero.css";
import mumbaiMap from "../../assets/mumbai_map.png";

const PresenceHero = () => {

  const scrollToConnectWithUs = () => {
    const section = document.getElementById("connectUs");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="presence-hero-section">
      <img src={mumbaiMap} alt="Map of Mumbai" className="presence-bg-image" />
      <div className="presence-overlay"></div>

      <div className="presence-content">
        <h1>Expanding Healthcare. One City at a Time.</h1>
        <p>
          Janhit Chemist is growing rapidly to make affordable healthcare
          accessible across India.
        </p>
        <button className="presence-button" onClick={scrollToConnectWithUs}>
          Become a Partner
        </button>
      </div>
    </section>
  );
};

export default PresenceHero;
