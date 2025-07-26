import React from "react";
import "./ContentPage.scss";
import { FaCcMastercard, FaTags, FaTruck, FaUsers } from "react-icons/fa";

const ContentPage = () => {
  return (
    <div className="content">
      <h2 className="section-title">Top Most Store</h2>
      <div className="features-container">
        <div className="feature-box">
          <FaCcMastercard className="feature-icon" />
          <h4>Secure Payment</h4>
          <p>Elementum feugiat diam, fast & encrypted checkout.</p>
        </div>

        <div className="feature-box">
          <FaUsers className="feature-icon" />
          <h4>Trusted by Customers</h4>
          <p>Thousands of happy buyers & growing daily.</p>
        </div>

        <div className="feature-box">
          <FaTruck className="feature-icon" />
          <h4>Delivered with Care</h4>
          <p>Lacinia pellentesque leo, on-time delivery guaranteed.</p>
        </div>

        <div className="feature-box">
          <FaTags className="feature-icon" />
          <h4>Full Discounts</h4>
          <p>Huge offers, seasonal deals & best prices in town.</p>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
