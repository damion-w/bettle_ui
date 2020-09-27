import React from "react";import Auth from "../modules/Auth";
import { Redirect } from "react-router-dom";
import ExpenseList from './ExpenseList'

const Event = (event) => {
  return (
    <div className="event">
      {!Auth.isUserAuthenticated() && <Redirect to="/" />}
      <div className="event-header">
        <div className="event-title">
          <p>{event.name}</p>
        </div>
        <div className="date-bubble">
          <div className="event-date">
            <p>{event.date}</p>
          </div>
        </div>
      </div>
      <ExpenseList expenses={event.expenses} />
    </div>
  )
}

export default Event