import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsApp.css";

const FloatingWhatsApp = () => {
  const [animateClass, setAnimateClass] = useState("animate");

  useEffect(() => {
    // After animation ends, switch to pulse if needed
    const timer = setTimeout(() => {
      setAnimateClass("pulse"); // Add pulsing effect after bounce
    }, 800); // Same as bounce duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`floating-whatsapp ${animateClass}`}>
      <a
        href="https://wa.me/917021210265"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "white" }}
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
