import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const [data, setData] = useState(null)
  let url = ''

  if (process.env.NODE_ENV === 'development') {
    url = 'http://localhost:3001/'
  }
  else {
    url = 'https://frozen-spire-08641.herokuapp.com/'
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.message)
      })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App
