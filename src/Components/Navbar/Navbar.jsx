import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/janhitlogo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

const NAV_ITEMS = [
  // { name: "Home", route: "/home", scrollId: "homeTop" },
  { name: "Home", route: "/home", scrollId: "hero" },
  { name: "About", route: "/about", scrollId: "aboutTop" },
  { name: "Products", route: "/products", scrollId: "productsTop" },
  { name: "Presence", route: "/presence", scrollId: "presenceTop" },
  { name: "Business", route: "/business-opportunity", scrollId: "businessTop" },
  { name: "Careers", route: "/careers", scrollId: "careersTop" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleNav = (route, targetId) => {
    navigate(route);
    setShowMenu(false);
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Adjust if needed
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Janhit Logo" />

      <nav className={showMenu ? "menu-mobile" : "menu-web"}>
        <ul className="nav-menu">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <button
                className="nav-link-button"
                onClick={() => handleNav(item.route, item.scrollId)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="ham-menu">
        <button onClick={() => setShowMenu(!showMenu)}>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
