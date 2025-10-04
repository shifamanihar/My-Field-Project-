import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../assets/rj-logo.png";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Botpress Shareable URL
  const BOTPRESS_SHARE_URL = "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/03/14/20251003141327-Q9TBGO8U.json";

  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  // New function to open Botpress URL in a new tab
  const handleOpenChatbot = () => {
    window.open(BOTPRESS_SHARE_URL, '_blank');
    setMobileMenu(false); // Mobile menu band karne ke liye
  };
  
  // Scroll to section
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); // pehle home par bhejo
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenu(false);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div
        className="logo"
        onClick={() => handleScroll("hero")}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="College Logo" />
      </div>

      {/* Navigation */}
      <nav className={`nav-links ${mobileMenu ? "active" : ""}`}>
        <ul>
          <li onClick={() => handleScroll("hero")}>Home</li>
          <li onClick={() => handleScroll("about")}>About</li>
          <li onClick={() => handleScroll("courses")}>Courses</li>
          <li onClick={() => handleScroll("testimonials")}>Testimonials</li>
          <li>
            <Link to="/contact" onClick={() => setMobileMenu(false)}>
              Contact
            </Link>
          </li>
          {/* 🛑 YAHAN PAR BADLAV KIYA GAYA HAI 🛑 */}
          <li onClick={handleOpenChatbot} style={{ cursor: 'pointer' }}>
            Chatbot
          </li>
        </ul>
      </nav>

      {/* CTA Button */}
      <div className="header-cta">
        <Link to="/inquiry-form" className="btn-enquire">
          Enquire Now
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}
