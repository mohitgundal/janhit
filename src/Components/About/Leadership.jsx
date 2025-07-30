import React from "react";
import "./Leadership.css";
import management_img_1 from "../../assets/About/management_1.jpg"
import management_img_2 from "../../assets/About/management_2.jpg"

const leaders = [
  {
    name: "Mr. Vinod Shinkar",
    title: "Founder & Managing Director",
    image: management_img_1,
    quote: "Our mission is not just business — it’s a promise of well-being to every doorstep."
},
{
    name: "Mr. Aryan Shinkar",
    title: "Chief Operations Officer",
    // image: "/images/leader2.jpg",
    image: management_img_2,
    quote: "Every store, every medicine, every smile — reflects our commitment to quality."
  }
];

const Leadership = () => {
  return (
    <section className="leadership-section">
      <h2> <span className="highlight">Leadership </span>Team</h2>
      <div className="leadership-grid">
        {leaders.map((leader, index) => (
          <div className="leader-card" key={index}>
            <img src={leader.image} alt={leader.name} className="leader-img" />
            <h3>{leader.name}</h3>
            <p className="leader-title">{leader.title}</p>
            <p className="leader-quote">“{leader.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
