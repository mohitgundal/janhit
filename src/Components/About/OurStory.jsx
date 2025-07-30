import React from "react";
import "./OurStory.css"
import OurStory_img from "../../assets/About/ourstory.jpg"

const OurStory = () => {
  return (
    <section className="our-story-section">
      <div className="our-story-container">
        <div className="our-story-text">
          <h2>Our Story</h2>
          <p>
            Janhit Chemist began with a simple vision — to make healthcare
            accessible, affordable, and trustworthy for every individual,
            regardless of location or background. From a single outlet to a
            growing network across India, our journey has been powered by
            dedication, transparency, and the trust of our customers.
          </p>
          <p>
            With each passing year, we’ve not just grown in numbers, but in
            impact — empowering communities, supporting families, and ensuring
            that no one is denied the medicines they need.
          </p>
        </div>
        <div className="our-story-image">
          <img src={OurStory_img} alt="Our Story" />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
