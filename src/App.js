import React, { useState } from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css'
import Auth from './modules/Auth'
import Dashboard from './components/Dashboard'
import LoginForm from './components/LoginForm'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(Auth.isUserAuthenticated());
  
  function setLoggedInStatus (value) {
    setLoggedIn(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route exact path="/">
            {!isLoggedIn ? (
              <LoginForm setLoggedInStatus={setLoggedInStatus} />
            ) : (
              <Redirect to="/dashboard" />
            )}
          </Route>
          <Route exact path="/dashboard" component={Dashboard} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App