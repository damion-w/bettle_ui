import React from 'react'
import Auth from '../modules/Auth'
import { Redirect } from "react-router-dom";
import EventList from './EventList';
import "../../src/App.css";


const Dashboard = () => {
    return (
      <div className="dashboard">
        {!Auth.isUserAuthenticated() && <Redirect to="/" />}
        <div className="dashboard-title">
          <h1> Welcome to your dashboard!</h1>
        </div>
        <div className="event-list">
          <EventList />
        </div>
      </div>
    );
}

export default Dashboard