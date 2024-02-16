import React from "react";
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <div className="nav">
      <Link to="about-container" smooth={true} duration={500}>
        <div><h3>About</h3></div>
      </Link>
      <Link to="background-container" smooth={true} duration={500}>
        <div><h3>Background</h3></div>
      </Link>
      <Link to="projects-container" smooth={true} duration={500}>
        <div><h3>Projects</h3></div>
      </Link>
      <Link to="blog-container" smooth={true} duration={500}>
        <div><h3>Blog</h3></div>
      </Link>
      <Link to="contact-container" smooth={true} duration={500}>
        <div><h3>Contact</h3></div>
      </Link>
    </div>
  );
};

export default NavBar;

