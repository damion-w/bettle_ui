import React from 'react'
import Auth from '../modules/Auth'
import { Redirect } from "react-router-dom";
import EventList from './EventList';
import "../../src/App.css";
import Navigation from './Navigation';


const Dashboard = ({ shouldUpdateEvents, setShouldUpdateEvents }) => {
  console.log(shouldUpdateEvents)
  return (
    <div className="App">
      <div className="header">
        <Navigation />
      </div>
      <div className="dashboard">
        {!Auth.isUserAuthenticated() && <Redirect to="/" />}
        <div className="dashboard-title">
          <h1> Welcome to your dashboard!</h1>
        </div>
        <div className="event-list">
          <EventList
            shouldUpdateEvents={shouldUpdateEvents}
            setShouldUpdateEvents={setShouldUpdateEvents}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard