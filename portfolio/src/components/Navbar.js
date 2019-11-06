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
        <Link to="/aboutme" className="about-me">
          About me
        </Link>
        <Link to="/projects" className="projects">
          Projects
        </Link>
        <Link to="/contact" className="get-in-touch">
          Get in Touch
        </Link>
      </div>
    </nav>
  </div>
);

export default Navbar;
