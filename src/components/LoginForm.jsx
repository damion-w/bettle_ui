import React, { useState } from 'react'
import Auth from '../modules/Auth'



const handleLoginSubmit = (evt, values) => { 
    evt.preventDefault()

    console.log(values)
    fetch(`${process.env.REACT_APP_API_URI}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(values),
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        Auth.authenticateUser(res.token)
    })
}

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <form onSubmit={(evt) => handleLoginSubmit(evt, { username, password })}>
            <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            />

            <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            />

            <input type="submit" value="Log in" />
        </form>
    )
}

export default LoginForm