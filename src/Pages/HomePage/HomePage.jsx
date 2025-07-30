import React from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Presence from "../../Components/Presence/Presence";
import AboutPreview from "../../Components/About/AboutPreview";
import ConnectWithUs from "../../Components/ConnectWithUs/ConnectWithUs";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        {/* <About /> */}
        <AboutPreview/>
      </section>

      {/* <section id="presence">
        <Presence />
      </section> */}

      <section id="connect">
        <ConnectWithUs />
      </section>

      <footer>
        <Footer />
      </footer>


    </>
  );
};

export default HomePage;
