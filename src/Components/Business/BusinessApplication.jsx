import React from "react";
import "./BusinessApplication.css";
import { HiPhoneIncoming } from "react-icons/hi";
import { RiFileList3Fill } from "react-icons/ri";
import { FaWpforms, FaChalkboardTeacher, FaRocket } from "react-icons/fa";


const BusinessApplication = () => {
  return (
    <section className="application-process">
      <h2>
        How to <span className="highlight">Get Started</span>
      </h2>
      <p className="subtitle">
        Follow these 5 simple steps to become a Janhit Partner
      </p>

      {/* Row 1 – 3 steps */}
      <div className="process-steps-row">
        <div className="step">
          <div className="icon">
            <FaWpforms />
          </div>
          <h3>Apply Online</h3>
          <p>Fill the franchise interest form and share your basic details.</p>
        </div>
        <div className="step">
          <div className="icon">
            <HiPhoneIncoming />
          </div>
          <h3>Screening Call</h3>
          <p>Our team will connect with you for a short discussion.</p>
        </div>
        <div className="step">
          <div className="icon">
            <RiFileList3Fill />
          </div>
          <h3>Submit Documents</h3>
          <p>Complete KYC and business verification process.</p>
        </div>
      </div>

      {/* Row 2 – 2 steps centered */}
      <div className="process-steps-row second-row">
        <div className="step">
          <div className="icon">
            <FaChalkboardTeacher />
          </div>
          <h3>Training & Setup</h3>
          <p>We’ll guide you on setup, inventory, billing & support.</p>
        </div>
        <div className="step">
          <div className="icon">
            <FaRocket />
          </div>
          <h3>Launch!</h3>
          <p>Start serving your area as an official Janhit Chemist partner!</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessApplication;
