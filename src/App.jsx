// src/App.jsx
// import React from "react";
import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import FloatingWhatsApp from "./Components/FloatingWhatsApp/FloatingWhatsApp";
import Navbar from "./Components/Navbar/Navbar.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import BusinessPage from "./Pages/BusinessPage/BusinessPage.jsx";
import CareersPage from "./Pages/CareersPage/CareersPage.jsx";
// import BlogsPage from "./Pages/BlogsPage/BlogsPage.jsx";
// import FAQPage from "./Pages/FAQPage/FAQPage.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import ProductsPage from "./Pages/ProductsPage/ProductsPage.jsx";
import PresencePage from "./Pages/PresencePage/PresencePage.jsx";
import ContactPage from "./Pages/ContactPage/ContactPage.jsx";
// import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";
// import ScrollToHash from "./Utils/ScrollToHash.jsx"
import 'aos/dist/aos.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animate only once
    });
  }, []);
  return (
    <Router basename="/janhit">
      {/* <ScrollToTop /> */}
      {/* <ScrollToHash/> */}
      <Navbar />

      <FloatingWhatsApp/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/presence" element={<PresencePage />} />
        <Route path="/business-opportunity" element={<BusinessPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/blogs" element={<BlogsPage />} /> */}
        {/* <Route path="/faqs" element={<FAQPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
