import React, { useState, useEffect } from "react";
import Event from "./Event";

const DailyEvents = (props) => {
  const [message, setMessage] = useState("");
  const [events, setEvents] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    let message = props.events.message;
    let images = props.events.villager_images;

    let events;
    if (props.events.events) {
      events = props.events.events.map((event) => {
        if (event.includes("birthday")) {
          return <Event event={event} images={images} key={event} />;
        } else {
          return <Event event={event} key={event} />;
        }
      });
    } else {
      events = [];
    }

    setMessage(message);
    setEvents(events);
    setImages(images);
  }, [props.events]);

  return (
    <div>
      <hr />
      <h4 className="text-center">{message}</h4>
      <h4>{events}</h4>
    </div>
  );
}

export default DailyEvents;
