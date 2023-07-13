import React from "react";
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Register.css';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMobile('');
    setPassword('');
    setCPassword('');
  };

  return (
    <div className="re">

    <div className="reg">
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </label>
        <br />
        <label>
          Email: 
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </label>
        <br/>
        <label>
          Mobile: 
          <input
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
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
        <label>
          Confirm Password: 
          <input
            type="password"
            value={Cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            required
            />
        </label>
        <br />
        <NavLink to="/" className="nlink">

        <button type="submit">Register</button>
        </NavLink>
      </form>
    </div>
            </div>
  );
};

export default RegistrationPage;
