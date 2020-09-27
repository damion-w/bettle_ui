import React from 'react'
import Auth from '../modules/Auth'
import { Redirect } from "react-router-dom";
import EventList from './EventList';

const Dashboard = () => {
    return (
        <div className="dashboard">
            {!Auth.isUserAuthenticated() && <Redirect to="/" /> }
            <h1> Welcome to your dashboard!</h1>
            <EventList/>
        </div>
    )
}

export default Dashboard