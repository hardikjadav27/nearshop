import React from "react";
import "./OfferBazaarMain.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const OfferBazaarMain = () => {
  return (
    <div>
      <header className="fixed-header">
        <div className="logo">OfferBazaar</div>
        <nav className="nav-menu">
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            About
          </a>
          <a className="nav-link" href="#">
            Contact
          </a>
          <div style={{ display: "flex", gap: "10px" }}>
            <FaFacebookF
              className="text-blue-600 hover:text-blue-800"
              size={24}
            />
            <FaInstagram
              className="text-blue-600 hover:text-blue-800"
              size={24}
            />
            <FaTwitter
              className="text-blue-600 hover:text-blue-800"
              size={24}
            />
          </div>
        </nav>
      </header>
      <section
        className="hero-section"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-text">Explore the Best Deals in Your City</div>
      </section>
    </div>
  );
};

export default OfferBazaarMain;
