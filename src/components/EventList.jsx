import React, { useEffect, useState } from "react";
import Auth from "../modules/Auth";
import { Link, Redirect } from "react-router-dom";
import Event from './Event'

const EventList = ({ shouldUpdateEvents, setShouldUpdateEvents }) => {
  const [myEvents, setMyEvents] = useState(false);
  const [myOtherEvents, setMyOtherEvents] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: Auth.getToken(),
        Authorization: `Token ${Auth.getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setMyEvents(res.events);
        setMyOtherEvents(res.other_events);
        setShouldUpdateEvents(false);
      });
    return () => {
      setShouldUpdateEvents(false);
    };
  }, [shouldUpdateEvents]);

  return (
    <div className="event-list">
      {!Auth.isUserAuthenticated() && <Redirect to="/" />}
      <Link to="/eventform">
        <button className="add-event-button">Add a new event</button>
      </Link>

      {myEvents ? (
        myEvents.map((event) => (
          <Event
            key={event.id}
            {...event}
            setShouldUpdateEvents={setShouldUpdateEvents}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
      {myOtherEvents ? (
        myOtherEvents.map((event) => (
          <Event
            key={event.id}
            {...event}
            setShouldUpdateEvents={setShouldUpdateEvents}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EventList
