import React, { useEffect, useState } from "react";
import "./OfferBazaarMain.scss";

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
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="hero-section"
      aria-label="Promotional Hero Section"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Explore the Best Deals in Your City</h1>
        <p className="hero-subtitle">
          Find top offers, discounts & local favorites — all in one place
        </p>
        {/* <button className="hero-btn">Browse Offers</button> */}
      </div>
    </section>
  );
};

export default OfferBazaarMain;
