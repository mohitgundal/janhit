import React from "react";
import "./BusinessFranchise.css"
import { MdStorefront } from "react-icons/md";
import { GiScooter } from "react-icons/gi";
import {
  FaTruck,
  FaUserSecret,
} from "react-icons/fa";



const BusinessFranchise = () => {
    return (
       <section className="franchise-models">
              <h2>
                Choose Your <span className="highlight">Business Model</span>
              </h2>
              <div className="model-cards">
                <div className="model-card">
                  <MdStorefront className="model-icon" />
                  <h3>Retail Store</h3>
                  <p>
                    Set up a physical Janhit outlet and serve your local community
                    with essential medicines.
                  </p>
                </div>
                <div className="model-card">
                  <FaTruck className="model-icon" />
                  <h3>Delivery Hub</h3>
                  <p>
                    Operate as a backend delivery point supporting local orders in
                    your area.
                  </p>
                </div>
                <div className="model-card">
                  <GiScooter className="model-icon" />
                  <h3>Mobile Van</h3>
                  <p>
                    Reach door-to-door customers in underserved areas using a mobile
                    medicine unit.
                  </p>
                </div>
                <div className="model-card">
                  {/* <FaHandsHolding className="model-icon" /> */}
                  <FaUserSecret className="model-icon" />
                  <h3>Silent Investor</h3>
                  <p>
                    Partner as an investor and earn without daily involvement in
                    operations.
                  </p>
                </div>
              </div>
            </section>
  );
};

export default BusinessFranchise;
