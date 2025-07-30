import React, { useEffect, useRef } from "react";
import "./OurJourney.css";

const timeline = [
  { year: "2014", event: "Inception of Janhit Chemist with our first store in Asalfa, Mumbai." },
  { year: "2018", event: "Expanded to 10+ outlets across Mumbai." },
  { year: "2020", event: "Introduced affordable generic medicine initiative." },
  { year: "2024", event: "Launched tech-enabled operations and doorstep delivery." },
  { year: "2025", event: "Crossed 35+ stores with a strong community presence." },
];

const OurJourney = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const items = container.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.3,
        root: container,
      }
    );

    items.forEach((item) => observer.observe(item));
    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const scrollPercent = (scrollLeft / maxScroll) * 100;
      line.style.width = `${scrollPercent}%`;
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Drag to scroll
  useEffect(() => {
    const container = containerRef.current;
    let isDown = false;
    let startX, scrollLeft;

    container.addEventListener("mousedown", (e) => {
      isDown = true;
      container.classList.add("dragging");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });
    container.addEventListener("mouseleave", () => {
      isDown = false;
      container.classList.remove("dragging");
    });
    container.addEventListener("mouseup", () => {
      isDown = false;
      container.classList.remove("dragging");
    });
    container.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    });
  }, []);
    
    
    // Auto-scroll timeline
useEffect(() => {
  const container = containerRef.current;
  let scrollDirection = 1;
  let paused = false;

  const scroll = () => {
    if (!container || paused) return;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll) scrollDirection = -1;
    else if (container.scrollLeft <= 0) scrollDirection = 1;

    container.scrollLeft += scrollDirection * 1.2; // Control speed
  };

  const interval = setInterval(scroll, 16); // ~60fps smooth scroll

  container.addEventListener("mouseenter", () => (paused = true));
  container.addEventListener("mouseleave", () => (paused = false));

  return () => {
    clearInterval(interval);
    container.removeEventListener("mouseenter", () => (paused = true));
    container.removeEventListener("mouseleave", () => (paused = false));
  };
}, []);


  return (
    <section className="journey-section">
      <h2>Our Journey</h2>
      <p className="scroll-hint">Swipe to explore →</p>

      <div className="timeline-wrapper" ref={containerRef}>
        <div className="timeline">
          <div className="timeline-line" ref={lineRef}></div>
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">{item.event}</div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
