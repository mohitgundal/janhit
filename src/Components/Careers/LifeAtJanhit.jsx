import React from "react";
import "./LifeAtJanhit.css";
import life1 from "../../assets/Life/life1.jpg";
import life2 from "../../assets/Life/life2.jpg";
// import life3 from "../../assets/Life/life3.jpg";
// import life4 from "../../assets/Life/life4.jpg";
// import life5 from "../../assets/Life/life5.jpg";
import life6 from "../../assets/Life/life6.jpg";


const lifeImages = [
  { src: life1, caption: "Team bonding session" },
  { src: life2, caption: "In-store celebration" },
  // { src: life3, caption: "Community outreach program" },
  // { src: life4, caption: "Annual award night" },
  // { src: life5, caption: "Pharmacist day celebration" },
  { src: life6, caption: "Training workshop" },
];


const LifeAtJanhit = () => {
  return (
    <section className="careers-section life-at-janhit">
      <h2>Life at <span className="highlight">Janhit Chemist</span></h2>
      <p>We work hard, grow together, and celebrate every moment.</p>

      <div className="life-gallery">
        {lifeImages.map((img, index) => (
          <div className="life-card" key={index}>
            <img src={img.src} alt={img.caption} />
            <p>{img.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifeAtJanhit;
