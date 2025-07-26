import { useEffect, useState } from "react";
import "./PopularStores.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const shopList = [
  {
    name: "Style Street",
    description: "Trendy fashion & accessories at best prices.",
  },
  {
    name: "Gadget Zone",
    description: "Top electronics & smart gadgets delivered fast.",
  },
  {
    name: "Beauty Bliss",
    description: "Premium beauty & skincare products you’ll love.",
  },
];

const PopularStores = () => {
  const [index, setIndex] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setIndex((prev) => (prev - 1 + shopList.length) % shopList.length);
    } else {
      setIndex((prev) => (prev + 1) % shopList.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll("right");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trending-section">
      <h2 className="section-title">🔥 Trending Deals</h2>

      <div className="carousel-container">
        <button className="arrow left" onClick={() => handleScroll("left")}>
          <FaChevronLeft />
        </button>

        <div className="shop-card">
          <h3>{shopList[index].name}</h3>
          <p>{shopList[index].description}</p>
        </div>

        <button className="arrow right" onClick={() => handleScroll("right")}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PopularStores;
