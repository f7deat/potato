import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [userName, setUserName] = useState<any>('')
  const [password, setPassword] = useState<any>('')
  const handleLogin = () => {
    axios.post('https://defzone.net/api/user/password-sign-in', {userName, password}).then(response => {
      console.log(response)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <input type="text" onChange={(e: any) => setUserName(e.target.value) }/>
      <input type="text" onChange={(e: any) => setPassword(e.target.value) }/>
      <button onClick={handleLogin}>zzzzzzzzzzz</button>
    </div>
  );
}

export default App;
