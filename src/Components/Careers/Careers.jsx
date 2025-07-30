import React from "react";
import CareersHero from "./CareersHero";
import WhyWork from "./WhyWork";
import OpenRoles from "./OpenRoles";
import LifeAtJanhit from "./LifeAtJanhit";
import CoreValues from "./CoreValues";
// import CareerPath from "./CareerPath";
// import CareerApplyForm from "./CareerApplyForm";
import ConnectWithUs from "../ConnectWithUs/ConnectWithUs";
import Footer from "../Footer/Footer";
import "./Careers.css"

const Careers = () => {
  return (
    <div className="careers">
      <CareersHero />
      <WhyWork />
      <OpenRoles />
      <LifeAtJanhit />
      <CoreValues />
      {/* <CareerPath /> */}
      {/* <CareerApplyForm/> */}
      <ConnectWithUs
        title="Join Our Team"
        subtitle="Interested in a career at Janhit Chemist? We’d love to hear from you. Drop your details and let’s connect!"
      />
      <Footer/>
    </div>
  );
};

export default Careers;
