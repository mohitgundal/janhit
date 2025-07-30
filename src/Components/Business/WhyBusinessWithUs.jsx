import React from "react";
import "./WhyBusinessWithUs.css"
import { BiBadgeCheck } from "react-icons/bi";
import {
  FaMoneyBillWave,
  FaHandsHelping,
  FaChartLine,
} from "react-icons/fa";



const WhyBusinessWithUs = () => {
    return (
        <div className="whybusinesswithus">
             <section className="why-partner">
                    <h2>
                      Why Partner with <br /> <div className="highlight">Janhit</div>
                    </h2>
                    <div className="reasons">
                      <div className="reason-card">
                        <BiBadgeCheck className="icon" />
                        <h3>Trusted Brand</h3>
                        <p>
                          Established name with years of trust in the healthcare industry.
                        </p>
                      </div>
                      <div className="reason-card">
                        <FaMoneyBillWave className="icon" />
                        <h3>High ROI</h3>
                        <p>Proven business model with attractive returns on investment.</p>
                      </div>
                      <div className="reason-card">
                        <FaHandsHelping className="icon" />
                        <h3>Support & Training</h3>
                        <p>Comprehensive onboarding, marketing, and operational support.</p>
                      </div>
                      <div className="reason-card">
                        <FaChartLine className="icon" />
                        <h3>Growing Demand</h3>
                        <p>
                          Tap into the booming demand for quality and affordable medicines.
                        </p>
                      </div>
                    </div>
                  </section>
            
      </div>
  );
};

export default WhyBusinessWithUs;
