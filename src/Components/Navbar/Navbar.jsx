// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/janhitlogo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Janhit Logo" />

      <nav className={showMenu ? "menu-mobile": "menu-web"}>
      <ul className="nav-menu">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/presence">Presence</Link></li>
        <li><Link to="/business-opportunity">Business</Link></li>
        <li><Link to="/careers">Careers</Link></li>
      </ul>
      </nav>

      <div className="ham-menu">
        <button onClick={handleButtonToggle}>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
