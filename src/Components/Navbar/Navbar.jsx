import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS styles
import img from "./img/LumaExpress.jpeg"; // Update the path accordingly
import NavMenu from "./NavMenu";
import CustomNavbar from "./CustomNavbar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={img} alt="Logo" height="25" />
        </Link>
        <div className="navbar-menu ">
          <NavMenu />
        </div>
        <div>
        <CustomNavbar/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
