import React from "react";
import "./LimitedOffer.scss";

const LimitedOffer = () => {
  return (
    <section className="limited-offer">
      <div className="overlay" />
      <div className="content">
        <h3 className="tagline">🔥 Limited Time Offer</h3>
        <h1 className="title">Special Edition Store Deal</h1>
        <p className="desc">
          Grab exclusive store offers and premium deals — valid for a short time
          only. Don’t miss out on top discounts and limited edition collections!
        </p>
        <p className="code">
          Use Code: <span>SHOP20</span> to get 20% OFF 🎉
        </p>
        <button className="btn">Shop Now</button>
      </div>
    </section>
  );
};

export default LimitedOffer;
