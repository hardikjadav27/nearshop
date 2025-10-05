import React from "react";
// import { useNavigate } from "react-router-dom";
import "./TopCategory.scss";
import { useNavigate } from "react-router-dom";

type Category = {
  name: string;
  image: string;
};

const categories: Category[] = [
  {
    name: "Restaurant",
    image: "https://cdn-icons-png.flaticon.com/128/6643/6643359.png",
  },
  {
    name: "Entertainment Centre",
    image: "https://cdn-icons-png.flaticon.com/128/10531/10531423.png",
  },
  {
    name: "Salon & Spa",
    image: "https://cdn-icons-png.flaticon.com/512/706/706195.png",
  },
  {
    name: "Gym & Fitness",
    image: "https://cdn-icons-png.flaticon.com/128/1995/1995296.png",
  },
  {
    name: "Hotel & Resort",
    image: "https://cdn-icons-png.flaticon.com/512/869/869636.png",
  },
  {
    name: "Retail & Grocery",
    image: "https://cdn-icons-png.flaticon.com/128/1261/1261163.png",
  },
];

export default function TopCategory() {
  const navigate = useNavigate();

  return (
    <div className="top-category">
      <h2 className="title">Top Category</h2>
      <div className="category-list">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() =>
              navigate(
                `/category/${cat.name
                  .toLowerCase()
                  .replace(/ & /g, "-")
                  .replace(/\s+/g, "-")}`
              )
            }
          >
            <img src={cat.image} alt={cat.name} className="category-img" />
            <p className="category-name">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
