import React from "react";import Auth from "../modules/Auth";
import { Redirect } from "react-router-dom";

const Event = (event) => {
  return (
    <div className="event">
      {!Auth.isUserAuthenticated() && <Redirect to="/" />}
      <div className="event-header">
        <p>{event.name}</p>
      </div>
      <div className="expense">
          <p>{event.expenses.map((expense) => expense.name)}</p>
      </div>
    </div>
  );
};

export default Event