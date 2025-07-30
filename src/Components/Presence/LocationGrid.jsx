import React from "react";
import "./LocationGrid.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  { name: "Ghatkopar", count: 8, mapUrl: "https://www.google.com/maps/search/janhit+chemist+ghatkopar" },
  { name: "Mulund", count: 6, mapUrl: "https://www.google.com/maps/search/janhit+chemist+mulund" },
  { name: "Thane", count: 10, mapUrl: "https://www.google.com/maps/search/janhit+chemist+thane" },
  { name: "Sakinaka", count: 7, mapUrl: "https://www.google.com/maps/search/janhit+chemist+sakinaka" },
  { name: "Dadar", count: 7, mapUrl: "https://www.google.com/maps/search/janhit+chemist+dadar" },
];

const LocationGrid = () => {
  return (
    <section className="presence-section">
      <div className="presence-container">
        <h2>Our <span className="highlight">Presence </span> Across <span className="highlight">Mumbai </span></h2>
        <p>Delivering trust, care, and wellness across 5 key districts and 38+ stores.</p>
        <div className="location-grid">
          {locations.map((loc, index) => (
            <a
              key={index}
              href={loc.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location-card"
            >
              <FaMapMarkerAlt className="map-icon" />
              <div className="location-info">
                <span className="location-name">{loc.name}</span>
                <span className="store-count">{loc.count}+ Stores</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationGrid;
