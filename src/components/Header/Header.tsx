import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`glass-header ${menuOpen ? "menu-active" : ""}`}>
      <div className="logo-area">
        <Link to="/" className="logo">
          Offer<span>Bazaar</span>
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </div>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>
          About
        </Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>
          Contact
        </Link>

        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
