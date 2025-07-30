import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import hero_img from "../../assets/hero_1.jpg";
import business_opp from "../../assets/business_opp_1.jpg";
import career_img from "../../assets/career_1.jpg";
import contact_img from "../../assets/contact_1.jpg";

const Hero = () => {
  const scrollRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      if (index < 4) {
        scrollRef.current.scrollLeft += window.innerWidth;
        index++;
      } else {
        clearInterval(interval);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= window.innerWidth;
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += window.innerWidth;
    }
  };

  return (
    <div className="hero-container">
      {/* Scroll Buttons */}
      {/* <button className="scroll-btn left" onClick={handleScrollLeft}>⬅️</button> */}
      <button className="scroll-btn left" onClick={handleScrollLeft}>
        &larr;
      </button>
      {/* <button className="scroll-btn right" onClick={handleScrollRight}>➡️</button> */}
      <button className="scroll-btn right" onClick={handleScrollRight}>
        &rarr;
      </button>

      {/* Slides */}
      <div className="hero-wrapper" ref={scrollRef}>
        <section className="hero-section first-slide">
          <img src={hero_img} alt="" draggable="false" />
          <div className="first-slide-section">
            <h1>
              Welcome to <br />
              <span className="heading">Well Janhit Chemist</span>
            </h1>
            <h5>Mumbai’s Trusted Chain of Healthcare & Wellness Centers</h5>
            {/* <button>Learn More</button> */}
             <button onClick={() => navigate("/about")}>Learn More</button>
          </div>
        </section>

        <section className="hero-section second-slide">
          <img src={business_opp} alt="" draggable="false" />
          <div className="second-slide-section">
            <h1>Own a Franchise</h1>
            <p>Become a part of our rapidly growing medical retail chain.</p>
            {/* <button>Get Started</button> */}
            <button onClick={() => navigate("/business-opportunity")}>Get Started</button>
          </div>
        </section>

        <section className="hero-section third-slide">
          <img src={career_img} alt="Career Opportunities" draggable="false" />
          <div className="third-slide-section">
            <h1>
              Build Your <br /> <span className="career">Career with Us</span>
            </h1>
            <p>
              Join a team that’s transforming healthcare retail across India.
            </p>
            {/* <button>Apply Now</button> */}
            <button onClick={() => navigate("/careers")}>Apply Now</button>
          </div>
        </section>

        <section className="hero-section fourth-slide">
          <img src={contact_img} alt="" draggable="false" />
          <div className="fourth-slide-section">
            <h1>Let’s Connect</h1>
            <p>
              Have questions or want to partner with us? Reach out — we're here
              to help.
            </p>
            {/* <button>Get in Touch</button> */}
            <button
              onClick={() =>
                document
                  .getElementById("connect")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in Touch
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
