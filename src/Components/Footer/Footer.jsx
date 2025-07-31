import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {

  const navigate = useNavigate();

    const handleNav = (route, targetId) => {
    navigate(route);
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Match the Navbar delay
  };
  
  return (
    <footer className="business-footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <h3>Janhit Chemist</h3>
          <p>
            Bringing trusted medicines and wellness essentials closer to you—powered by local chemists, driven by technology.
          </p>
        </div>

        {/* <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/product">Products</a></li>
            <li><a href="/presence">Presence</a></li>
            <li><a href="/business">Business</a></li>
            <li><a href="/career">Career</a></li>
          </ul>
        </div> */}

        <div className="footer-section links">
  <h4>Quick Links</h4>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/product">Products</Link></li>
    <li><Link to="/presence">Presence</Link></li>
    <li><Link to="/business-opportunity">Business</Link></li>
    <li><Link to="/careers">Career</Link></li>
  </ul>
</div>


        <div className="footer-section contact">
          <h4>Contact</h4>
          <p><FaMapMarkerAlt /> Shop No. 12, XYZ Complex, Andheri West, Mumbai - 400058</p>
          <p><FaPhoneAlt /> <a href="tel:+917021210265">+91 7021210265</a></p>
          <p><FaEnvelope /> <a href="mailto:mvswelljanhit@gmail.com">mvswelljanhit@gmail.com</a></p>
        </div>

        <div className="footer-section subscribe">
          <h4>Subscribe</h4>
          <p>Get updates & vendor news</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-circle">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/welljanhitchemist/" target="_blank" rel="noreferrer" className="social-icon-circle">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-bottom">© 2025 Janhit Chemist. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
