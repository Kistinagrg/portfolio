import "./../App.css";
import React from "react";
import { Link, HashRouter } from "react-router-dom";

const Navbar = () => (
  <div className="navbar">
    <nav>
      <Link to="/" className="left-side">
        Home
      </Link>
      <div className="right-side">
        <Link to="/aboutme">About me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Get in Contact</Link>
      </div>
    </nav>
  </div>
 
);

export default Navbar;
