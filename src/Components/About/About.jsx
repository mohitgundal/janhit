import React from "react";
import AboutHero from "./AboutHero"
import OurStory from "./OurStory";
import VisionMission from "./VisionMission";
import CoreValues from "./CoreValues";
import Leadership from "./Leadership";
import Testimonials from "./Testimonials";
import OurJourney from "./OurJourney";
import WhyChooseUs from "./WhyChooseUs";
import ImpactStats from "./ImpactStats";
import ConnectWithUs from "../ConnectWithUs/ConnectWithUs";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="about">
      <AboutHero />
      <OurStory />
      <VisionMission />
      <CoreValues />
      <Leadership />
      <Testimonials />
      <OurJourney />
      <WhyChooseUs />
      <ImpactStats />
      <ConnectWithUs />
      <Footer/>
    </div>
  );
};

export default About;
