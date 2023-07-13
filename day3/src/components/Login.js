import React from 'react'; 
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  };

  return (
        <div className='lo'>

    <div className='log'>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </label>
        <br />
        <NavLink to="/Home">

        <button type="submit">Login</button>
        </NavLink>
      </form>
      <br/>
      Don't have an account? 
      <NavLink to="/register">Sign up</NavLink>
    </div>
            </div>
  );
};

export default LoginPage;
