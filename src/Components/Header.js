import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Header = () => {
  return (
    <nav className="header">
        <div className="header__logo">
            Ravindra
        </div>
        <ul className="header__nav-item">
        <li className="header__nav-link"><Link to='/'>Home</Link></li>
        <li className="header__nav-link"><Link to='/about'>About</Link></li>
        <li className="header__nav-link"><Link to='/projects'>Projects</Link></li>
        <li className="header__nav-link"><Link to='/skills'>Skills</Link></li>
        <li className="header__nav-link"><Link to='/contact'>Contact</Link></li></ul>
        <ul className="header__nav-item">
         <li className="header__nav-link"> <a href="https://www.linkedin.com/in/ravindra-birla-5a6a281b4 " target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a></li>
        <li className="header__nav-link"><a href="https://github.com/Birlaravi/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a></li>
        <li></li></ul>
    </nav>
  );
};

export default Header;
