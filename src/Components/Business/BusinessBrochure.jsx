import React from "react";
import "./BusinessBrochure.css"



const BusinessBrochure = () => {
    return (
      <section className="brochure-section">
        <h2>📄 Want Detailed Info?</h2>
        <p className="subtitle">
          Download our business brochure to explore the full potential,
          requirements, and FAQs before you partner with us.
        </p>

        <a
          href="/brochures/janhit-partner-brochure.pdf" // Adjust path as per your project
          download
          className="download-btn"
        >
          Download Brochure
        </a>
      </section>
  );
};

export default BusinessBrochure;
