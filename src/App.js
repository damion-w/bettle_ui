import React, { useState } from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css'
import Auth from './modules/Auth'
import Dashboard from './components/Dashboard'
import LoginForm from './components/LoginForm'
import EventForm from "./components/EventForm";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(Auth.isUserAuthenticated());
  const [shouldUpdateEvents, setShouldUpdateEvents] = useState(false);

  return (
    <BrowserRouter>
      <Route exact path="/">
        {!isLoggedIn ? (
          <div className="login-page">
            <LoginForm setLoggedInStatus={(isLoggedIn, setLoggedIn)} />
          </div>
        ) : (
          <div>
            <Redirect to="/dashboard" />
          </div>
        )}
      </Route>
      <Route
        exact
        path="/dashboard"
        render={() => (
          <Dashboard
            shouldUpdateEvents={shouldUpdateEvents}
            setShouldUpdateEvents={setShouldUpdateEvents}
          />
        )}
      />
      <Route
        exact
        path="/eventform"
        render={() => (
          <EventForm
            setShouldUpdateEvents={setShouldUpdateEvents}
          />
        )}
      >
      </Route>
    </BrowserRouter>
  );
}

export default App