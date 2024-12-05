import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/ZOHO-logo.png";
import navicon from "../assets/nav-icon.png";
import textlogo from "../assets/logo-text.png";
import { motion } from "framer-motion";


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo-totel">
        <div className="icon-div">
          <div className="logo">
            <img className="logoa" src={navicon} alt="" />
          </div>
          <div className="logo">
            <img className="logob" src={logo} alt="" />
          </div>
        </div>
        <div className="icon-divv">
          <motion.div
            className="logo"
            animate={{ x: 10 }}
            transition={{ duration: 0.5 }}
          >
            <img className="logoc" src={textlogo} alt="" />
          </motion.div>
        </div>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? "mobile" : ""}`}>

        {/* <Link to="/inp"><button>pre</button></Link> */}
        <button className="end-btn">Check out Zoho Invoice</button>
        <button className="end-btn2">Sign up.it'sFree</button>
      </ul>
    </div>
  );
}

export default Navbar;
