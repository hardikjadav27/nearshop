import React from "react";
import "./ContentPage.scss";
import { FaCcMastercard, FaTags, FaTruck, FaUsers } from "react-icons/fa";

const ContentPage = () => {
  return (
    <div className="content">
      <h2 className="section-title">Our Promises to You</h2>
      <div className="features-container">
        <div className="feature-box">
          <img
            className="feature-icon"
            src="https://cdn-icons-png.flaticon.com/128/1672/1672241.png"
            sizes="20px"
          />
          <h4>Always Fresh Deals</h4>
          <p>New store? New deals! Grab them before anyone else.</p>
        </div>

        <div className="feature-box">
          <img
            className="feature-icon"
            src="https://cdn-icons-png.flaticon.com/128/18152/18152434.png"
          />
          <h4>Verified Local Stores</h4>
          <p>Only trusted and local stores – shop stress-free.</p>
        </div>

        <div className="feature-box">
          <img
            className="feature-icon"
            src="https://cdn-icons-png.flaticon.com/128/1611/1611255.png"
          />
          <h4>Exclusive Local Offers</h4>
          <p>Rajkot-exclusive discounts you won’t find elsewhere.</p>
        </div>

        <div className="feature-box">
          <img
            className="feature-icon"
            src="https://cdn-icons-png.flaticon.com/128/584/584052.png"
          />
          <h4>Big Savings</h4>
          <p>Festive, seasonal, and surprise offers – all in one place.</p>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
