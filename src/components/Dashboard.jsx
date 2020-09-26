import React from 'react'
import Auth from '../modules/Auth'
import { Redirect } from "react-router-dom";

const Dashboard = () => {


    return (
        <div className="dashboard">
            {!Auth.isUserAuthenticated() && <Redirect to="/" /> }
            <h1> Welcome to your dashboard!</h1>
        </div>
    )
}

export default Dashboard