import React from "react";
import { useParams } from "react-router-dom";
import "./CategoryPage.scss";

const storesData: Record<string, { name: string; image: string }[]> = {
  "entertainment-centre": [
    {
      name: "PVR Cinemas",
      image:
        "https://images.unsplash.com/photo-1701989634922-de9ec2cdebd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UFZSJTIwQ2luZW1hc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Fun World",
      image:
        "https://images.unsplash.com/photo-1706059923200-e480c39f05be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJpZGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Bowling Alley",
      image:
        "https://images.unsplash.com/photo-1608751613440-8880d1a0a1a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qm93bGluZyUyMEFsbGV5fGVufDB8fDB8fHww",
    },
  ],
  "gym-fitness": [
    {
      name: "Gold’s Gym",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Anytime Fitness",
      image:
        "https://plus.unsplash.com/premium_photo-1674059549221-e2943b475f62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Rml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "CrossFit Zone",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
    },
  ],
  restaurant: [
    {
      name: "Dominos Pizza",
      image:
        "https://images.unsplash.com/photo-1695920042189-3932267e2421?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RG9taW5vcyUyMFBpenphfGVufDB8fDB8fHww",
    },
    {
      name: "Barbeque Nation",
      image:
        "https://plus.unsplash.com/premium_photo-1664391878396-a72747167869?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFyYmVxdWUlMjBOYXRpb258ZW58MHx8MHx8fDA%3D",
    },
  ],
  "salon-spa": [
    {
      name: "Lakme Salon",
      image:
        "https://plus.unsplash.com/premium_photo-1683134297492-cce5fc6dae31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Fsb24lMjBzcGF8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "VLCC Spa",
      image:
        "https://images.unsplash.com/photo-1611169035510-f9af52e6dbe2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Fsb24lMjBzcGF8ZW58MHx8MHx8fDA%3D",
    },
  ],
  "hotel-resort": [
    {
      name: "Taj Hotel",
      image:
        "https://images.unsplash.com/photo-1660145416818-b9a2b1a1f193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGFqJTIwSG90ZWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Club Mahindra",
      image:
        "https://images.unsplash.com/photo-1696798559340-ad395e783816?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENsdWIlMjBNYWhpbmRyYXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ],
  "retail-grocery": [
    {
      name: "D-Mart",
      image:
        "https://images.unsplash.com/photo-1751151950056-cfaf797f4653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0YWlsLWdyb2Nlcnl8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Big Bazaar",
      image:
        "data:image/jpeg;base64,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",
    },
  ],
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();

  const stores = storesData[category || ""] || [];

  return (
    <div className="category-page">
      <h2 className="category-title">
        {category?.replace(/-/g, " ").toUpperCase()}
      </h2>
      <div className="stores-grid">
        {stores.map((store, index) => (
          <div key={index} className="store-card">
            <img src={store.image} alt={store.name} />
            <p>{store.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
