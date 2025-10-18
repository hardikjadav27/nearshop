import React from "react";
import "./TrendingProducts.scss";

const storeData = [
  {
    store: "Mega Mart",
    img: "https://images.unsplash.com/photo-1580910051073-dbb1ffb34e69?auto=format&fit=crop&w=800&q=80",
    discount: "Up to 60% OFF",
  },
  {
    store: "Electro Hub",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    discount: "Flat ₹500 OFF",
  },
  {
    store: "Glow & Glam",
    img: "https://images.unsplash.com/photo-1596464716121-9f23fd48f87c?auto=format&fit=crop&w=800&q=80",
    discount: "Buy 1 Get 1 Free",
  },
  {
    store: "Book World",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    discount: "Up to 40% OFF",
  },
  {
    store: "Toy Galaxy",
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    discount: "Special Combo Offer",
  },
  {
    store: "Trendy Threads",
    img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=800&q=80",
    discount: "Up to 50% OFF",
  },
  {
    store: "Gadget Zone",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    discount: "Save ₹1000 Today",
  },
  {
    store: "Fitness Pro",
    img: "https://images.unsplash.com/photo-1579758629934-095793344e96?auto=format&fit=crop&w=800&q=80",
    discount: "Buy 2 Get 1 Free",
  },
  {
    store: "Decor Den",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    discount: "Up to 30% OFF",
  },
  {
    store: "Pet Paradise",
    img: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=800&q=80",
    discount: "Free Treats with Every Order",
  },
];

const TrendingProducts = () => {
  return (
    <div className="TrendingProducts-wrapper">
      <h2 className="store-title">🏬 Top 10 Recommended Stores</h2>
      <div className="store-grid">
        {storeData.map((store, i) => (
          <div className="store-card" key={i}>
            <div
              className="store-image"
              style={{ backgroundImage: `url(${store.img})` }}
            >
              <div className="discount-badge">{store.discount}</div>
            </div>
            <h3>{store.store}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
