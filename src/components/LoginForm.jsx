import React, { useState } from 'react'
import Auth from '../modules/Auth'

const LoginForm = ({ setLoggedInStatus }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginSubmit(evt, values) {
    evt.preventDefault()

    fetch(`${process.env.REACT_APP_API_URI}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((res) => {
        Auth.authenticateUser(res.token)
        setLoggedInStatus(Auth.isUserAuthenticated())
      })
    }

    return (
      <div className="login-form">
        <form
          onSubmit={(evt) => handleLoginSubmit(evt, { username, password })}
        >
          <div className="login-input-group">
            <div className="login-input">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(evt) => setUsername(evt.target.value)}
              />
            </div>
          </div>

          <div className="login-input-group">
            <div className="login-input">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </div>
          </div>

          <div className="login-input">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    );
}

export default LoginForm