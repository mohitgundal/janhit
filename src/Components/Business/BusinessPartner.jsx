import React from "react";
import "./BusinessPartner.css"
import { BiBadgeCheck } from "react-icons/bi";
import {
  FaMoneyBillWave,
  FaHandsHelping,
  FaChartLine,
} from "react-icons/fa";



const BusinessPartner = () => {
    return (
      <section className="partner-benefits">
              <h2>
                What You Get as a <br /> <div className="heading">Janhit Partner</div>
              </h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="icon-circle">
                    <FaChartLine className="icon" />
                  </div>
                  <h3>Proven Model</h3>
                  <p>
                    Time-tested business strategy built on success and scalability.
                  </p>
                </div>
                <div className="benefit-card">
                  <div className="icon-circle">
                    <FaHandsHelping className="icon" />
                  </div>
                  <h3>End-to-End Support</h3>
                  <p>
                    Guidance in setup, inventory, staff training, and daily
                    operations.
                  </p>
                </div>
                <div className="benefit-card">
                  <div className="icon-circle">
                    <FaMoneyBillWave className="icon" />
                  </div>
                  <h3>Affordable Investment</h3>
                  <p>Start with low capital and unlock high long-term returns.</p>
                </div>
                <div className="benefit-card">
                  <div className="icon-circle">
                    <BiBadgeCheck className="icon" />
                  </div>
                  <h3>Marketing Materials</h3>
                  <p>
                    Posters, banners, and digital creatives to boost visibility and
                    trust.
                  </p>
                </div>
              </div>
            </section>
      
  );
};

export default BusinessPartner;
