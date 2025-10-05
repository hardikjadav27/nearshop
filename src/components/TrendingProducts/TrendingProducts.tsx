import React, { useEffect, useState } from "react";
import "./TrendingProducts.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const storeData = [
  {
    store: "Mega Mart",
    products: "Fashion, Footwear, Home",
    discount: "Up to 60% OFF",
  },
  {
    store: "Electro Hub",
    products: "Mobiles, Laptops, Accessories",
    discount: "Flat ₹500 OFF",
  },
  {
    store: "Glow & Glam",
    products: "Beauty, Skincare, Makeup",
    discount: "Buy 1 Get 1 Free",
  },
  {
    store: "Book World",
    products: "Novels, Study, Kids",
    discount: "Up to 40% OFF",
  },
  {
    store: "Toy Galaxy",
    products: "Games, Toys, Gifts",
    discount: "Special Combo Offer",
  },
];

const TrendingProducts = () => {
  const [startIndex, setStartIndex] = useState(0);

  const maxIndex = storeData.length - 3;

  const handleScroll = (dir: "left" | "right") => {
    setStartIndex((prev) => {
      if (dir === "left") return prev === 0 ? maxIndex : prev - 1;
      else return prev === maxIndex ? 0 : prev + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll("right");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="TrendingProducts-store-wrapper">
      <h2 className="store-title">🔥 Popular Stores</h2>
      <div className="carousel-wrapper">
        {/* Left arrow at far left */}
        <button
          className="carousel-arrow left"
          onClick={() => handleScroll("left")}
        >
          <FaChevronLeft />
        </button>

        {/* Centered 3 boxes */}
        <div className="carousel-track">
          {storeData.slice(startIndex, startIndex + 3).map((store, i) => (
            <div className="store-card" key={i}>
              <h3>{store.store}</h3>
              <p className="products">{store.products}</p>
              <p className="discount">{store.discount}</p>
            </div>
          ))}
        </div>

        {/* Right arrow at far right */}
        <button
          className="carousel-arrow right"
          onClick={() => handleScroll("right")}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TrendingProducts;
