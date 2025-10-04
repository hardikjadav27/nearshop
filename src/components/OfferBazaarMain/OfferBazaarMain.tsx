import React, { useEffect, useState } from "react";
import "./OfferBazaarMain.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1400&q=80",
];

const OfferBazaarMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <header className="fixed-header">
        <div className="logo">OfferBazaar</div>
        {/* <nav className="nav-menu">
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
        </nav> */}
      </header>
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-text">Explore the Best Deals in Your City</div>
        {/* <div className="hero-text-inside">
          Find the best offers, exclusive discounts, and trending stores near
          you
        </div> */}
      </section>
    </div>
  );
};

export default OfferBazaarMain;
