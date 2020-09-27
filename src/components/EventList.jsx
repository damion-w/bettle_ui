import React, { useEffect, useState } from "react";
import Auth from "../modules/Auth";
import { Redirect } from "react-router-dom";

const EventList = () => {
    const [myEvents, setMyEvents] = useState(false)
    const [myOtherEvents, setMyOtherEvents] = useState(false);
    const [updateEvents, setUpdateEvents] = useState(false);

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
          console.log(res);
          setMyEvents(res.events);
          setMyOtherEvents(res.other_events)
        });
      return () => {
        setUpdateEvents(false);
      };
    }, [updateEvents]);

    return (
      <div className="event-list">
        {!Auth.isUserAuthenticated() && <Redirect to="/" />}
        {myEvents ? (
          myEvents.map((events) => events.name)
        ) : (
          <p>Loading...</p>
        )}
        {myOtherEvents ? (
          myOtherEvents.map((events) => events.name)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
};

export default EventList
