import React, { useState } from "react";
import Auth from "../modules/Auth";
import Navigation from "./Navigation";
import { Redirect, useHistory } from "react-router-dom";

const EventForm = ({ setShouldUpdateEvents }) => {
  const [name, setEventName] = useState("");
  const [date, setEventDate] = useState(""); 
  let history = useHistory();


  function submitNewEvent(evt, values) {
    evt.preventDefault();

    fetch(`${process.env.REACT_APP_API_URI}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: Auth.getToken(),
        Authorization: `Token ${Auth.getToken()}`,
      },
      body: `{"event": ${JSON.stringify(values)}}`
    })
      .then((res) => res.json())
      .then(() => {
        setEventName("");
        setEventDate("");
        setShouldUpdateEvents(true)
        history.push("/dashboard");
      });
  }

  return (
    <div className="App">
      <div className="header">
        <Navigation />
      </div>
      <div className="add-event-main">
        {!Auth.isUserAuthenticated() && <Redirect to="/" />}
        <div className="add-event-container">
          <div className="add-event-header">
            <div className="add-event-form-title">
              <h2>Add a new event</h2>
            </div>
          </div>
          <div className="add-event-form">
            <form
              onSubmit={(evt) => submitNewEvent(evt, { name, date })}
            >
              <div className="login-input-group">
                <div className="login-input">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(evt) => setEventName(evt.target.value)}
                  />
                </div>
              </div>

              <div className="login-input-group">
                <div className="login-input">
                  <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={date}
                    onChange={(evt) => setEventDate(evt.target.value)}
                  />
                </div>
              </div>

              <div className="login-input">
                <button type="submit">Add event</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
