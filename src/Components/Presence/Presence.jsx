import React from "react";
import PresenceHero from "./PresenceHero";
// import MapSection from "./MapSection";
// import MapIndia from "./MapIndia";
import LocationGrid from "./LocationGrid";
import PresenceStats from "./PresenceStats";
// import ConnectWithUs from "./ConnectWithUs";
import ConnectWithUs from "../ConnectWithUs/ConnectWithUs";
import Footer from "../Footer/Footer"

const Presence = () => {
  return (
    <div className="presence">
      <PresenceHero />
      {/* <MapSection/> */}
      {/* <MapIndia/> */}
      <LocationGrid />
      <PresenceStats />
      {/* <ConnectWithUs/> */}
      <ConnectWithUs
        title="Partner With Us"
        subtitle="Own a store or want to collaborate with Janhit Chemist? Let's explore growth opportunities together."
      />
      <Footer/>
    </div>
  );
};

export default Presence;
