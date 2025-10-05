import React, { useEffect, useState } from "react";
import "../UpcomingEvents/UpcomingEvents.scss";

type EventType = {
  title: string;
  description: string;
  image: string;
  endDate: string;
};

const allEvents: EventType[] = Array.from({ length: 20 }, (_, i) => ({
  title: `Event ${i + 1}`,
  description: "Special discounts and exciting offers just for you!",
  image: `https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcmV8ZW58MHx8MHx8fDA%3D`,
  endDate: "2025-12-31T23:59:59",
}));

// countdown logic
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

const CountdownBoxes = ({ endDate }: { endDate: string }) => {
  const [left, setLeft] = useState<Remaining>(getRemaining(endDate));

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
};

// main component
function AllEvents() {
  return (
    <div className="events-container">
      <h2 className="events-title">
        <img
          className="events-cal"
          src="https://cdn-icons-png.flaticon.com/128/10691/10691802.png"
          alt="Calendar Icon"
        />
        All Upcoming Events
      </h2>
      <div className="events-grid">
        {allEvents.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} />
            <div className="event-content">
              <div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
              <CountdownBoxes endDate={event.endDate} />
              {/* <button className="learn-more">Learn More</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllEvents;
