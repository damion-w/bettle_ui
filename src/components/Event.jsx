import React from "react";import Auth from "../modules/Auth";
import { Redirect, Link } from "react-router-dom";
import ExpenseList from './ExpenseList'

const Event = ({ name, date, id, expenses, setShouldUpdateEvents }) => {
  function deleteEvent(evt, eventId) {
    evt.preventDefault();

    fetch(`${process.env.REACT_APP_API_URI}/events/${eventId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Token: Auth.getToken(),
        Authorization: `Token ${Auth.getToken()}`,
      },
    })
      .then(() => {
        setShouldUpdateEvents(true);
      });
  }

  return (
    <div className="event">
      {!Auth.isUserAuthenticated() && <Redirect to="/" />}
      <div className="event-header">
        <div className="event-title">
          <p>{name}</p>
        </div>
        <div className="date-bubble">
          <div className="event-date">
            <p>{date}</p>
          </div>
        </div>
      </div>
      <ExpenseList expenses={expenses} />

      <div className="event-footer">
        <Link to="/eventform">
          <button className="add-expense-button">New expense</button>
        </Link>
        <button
          className="delete-expense-button"
          onClick={(evt) => deleteEvent(evt, id)}
        >
          Delete event
        </button>
      </div>
    </div>
  );
};

export default Event