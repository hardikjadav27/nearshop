import React from "react";
import "./UpcomingEvents.scss";

const events = [
  {
    title: "Mega Summer Sale",
    description: "Up to 70% off on your favorite brands. Limited time event!",
    image: "https://source.unsplash.com/400x300/?sale,shopping",
  },
  {
    title: "Electronics Expo",
    description:
      "Explore the latest tech & gadgets in one place. Don’t miss out!",
    image: "https://source.unsplash.com/400x300/?electronics,event",
  },
  {
    title: "Beauty Carnival",
    description: "Top beauty brands with amazing offers and freebies.",
    image: "https://source.unsplash.com/400x300/?beauty,products",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="events-container">
      <h2 className="events-title">📅 Upcoming Events</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} />
            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
