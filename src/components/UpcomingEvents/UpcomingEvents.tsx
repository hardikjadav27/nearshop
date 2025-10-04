import React, { useEffect, useState } from "react";
import "./UpcomingEvents.scss";
import { FaArrowRight } from "react-icons/fa";

type EventType = {
  title: string;
  description: string;
  image: string;
  endDate: string;
};

const events: EventType[] = [
  {
    title: "Vijay Electronics",
    description:
      "Explore the latest tech & gadgets in one place. Don’t miss out!",
    image: "https://source.unsplash.com/400x300/?sale,shopping",
    endDate: "2025-12-31T23:59:59",
  },
  {
    title: "D-Mart",
    description:
      "Explore the latest tech & gadgets in one place. Don’t miss out!",
    image: "https://source.unsplash.com/400x300/?electronics,event",
    endDate: "2025-11-15T20:00:00",
  },
  {
    title: "Rani Beauty Salon",
    description: "Top beauty brands with amazing offers and freebies.",
    image: "https://source.unsplash.com/400x300/?beauty,products",
    endDate: "2025-09-10T10:00:00",
  },
];

type Remaining = {
  d: number;
  h: number;
  m: number;
  s: number;
  expired: boolean;
};

function getRemaining(endISO: string): Remaining {
  const now = new Date().getTime();
  const end = new Date(endISO).getTime();
  const diff = end - now;

  if (isNaN(end) || diff <= 0) {
    return { d: 0, h: 0, m: 0, s: 0, expired: true };
  }
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);
  return { d, h, m, s, expired: false };
}

function CountdownBoxes({ endDate }: { endDate: string }) {
  const [left, setLeft] = useState(getRemaining(endDate) as Remaining);

  useEffect(() => {
    const id = setInterval(() => setLeft(getRemaining(endDate)), 1000);
    return () => clearInterval(id);
  }, [endDate]);

  if (left.expired) {
    return <div className="timer-expired">Expired</div>;
  }

  return (
    <div className="timer-row">
      <div className="time-box-group">
        <div className="time-box">{left.d}</div>
        <div className="time-label">Days</div>
      </div>
      <div className="time-box-group">
        <div className="time-box">{left.h}</div>
        <div className="time-label">Hours</div>
      </div>
      <div className="time-box-group">
        <div className="time-box">{left.m}</div>
        <div className="time-label">Minutes</div>
      </div>
      <div className="time-box-group">
        <div className="time-box">{left.s}</div>
        <div className="time-label">Seconds</div>
      </div>
    </div>
  );
}

function UpcomingEvents() {
  return (
    <div className="events-container">
      <h2 className="events-title">
        <img
          className="events-cal"
          src="https://cdn-icons-png.flaticon.com/128/10691/10691802.png"
          alt="Calendar Icon"
        />
        Upcoming Events
      </h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} />
            <div className="event-content">
              <div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>

              <CountdownBoxes endDate={event.endDate} />

              <button className="learn-more">Learn More</button>
            </div>
          </div>
        ))}
      </div>
      {/* View All Button */}
      <div className="view-all-box">
        <img
          src="https://cdn-icons-png.flaticon.com/128/7554/7554470.png"
          alt="View All Icon"
          className="view-all-icon"
        />
        View All
      </div>
    </div>
  );
}

export default UpcomingEvents;
