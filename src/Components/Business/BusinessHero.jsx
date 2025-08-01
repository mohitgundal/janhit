import React from "react";
import "./BusinessHero.css";
import business_img_1 from "../../assets/business_opp_1.jpg";

const BusinessHero = ({ scrollToForm }) => {
  return (
    <section id="businessTop" className="business-landing-page scroll-offset">
      <div className="landing-image">
        <img src={business_img_1} alt="" />
      </div>
      <div className="landing-content">
        <h1>
          Partner with <br />
          <span className="highlight">Janhit Chemist</span>
        </h1>
        <p>
          Be a part of India’s growing healthcare revolution. Start your
          profitable medical business today.
        </p>
        {/* <button onClick={scrollToForm}>Apply Now</button> */}
        <button className="apply-button" onClick={scrollToForm}>
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default BusinessHero;
