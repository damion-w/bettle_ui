import React, { useEffect, useState } from "react";
import Auth from "../modules/Auth";
import { Redirect } from "react-router-dom";
import '../../src/App.css'

const Event = (event) => {
  return (
    <>
      {!Auth.isUserAuthenticated() && <Redirect to="/" />}

      <h2>Hi from Event!</h2>
      <p>{event.name}</p>
    </>
  );
};

export default Event