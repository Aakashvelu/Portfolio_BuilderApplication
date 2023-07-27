import React from "react";
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Register.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("here")
    const backendUrl = 'http://localhost:8181/api/v1/auth/register';

    const registrationData = {
      name: name,
      email: email,
      password: password,
    };

    axios.post(backendUrl, registrationData)
      .then(response => {
        const { token } = response.data;
        console.log(response)
        localStorage.setItem('token', token);
       

      })
      .catch(error => {
        console.error('Registration error:', error);
      });

    setName('');
    setEmail('');
    // setMobile('');
    setPassword('');
    // setCPassword('');
    navigate('/');
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setName('');
  //   setEmail('');
  //   // setMobile('');
  //   setPassword('');
  // };

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
        {/* <label>
          Mobile: 
          <input
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            />
        </label>
        <br /> */}
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
        
        <NavLink to="/" className="nlink">

        <button type="submit" onClick={handleSubmit}>Register</button>
        </NavLink>
      </form>
    </div>
            </div>
  );
};

export default RegistrationPage;


