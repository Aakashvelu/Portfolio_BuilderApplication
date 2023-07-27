import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./get.css";
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Tdelete = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch user details from the backend using the token
    const fetchDetails = async () => {
      try {
        // Get the token from local storage (assuming you stored it after login)
        const token = localStorage.getItem('token');
        
        // Include the token in the Authorization header for the API request
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        // Fetch user details from the backend
        const response = await axios.delete('http://localhost:8181/api/v1/demo/deletecontact/aakashvelu11@gmail.com', config);
        setDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching details:', error);
        setLoading(false);
      }
    };

    fetchDetails();
    navigate('/details')
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }
  

  return (
    <div>
      <Navbar />
      <div className='geet'>
        <h1>Template</h1>
        <p>Name: {details.name}</p>
        <p>Email: {details.email}</p>
        <p>Phone Number: {details.phoneNo}</p>
        <p>Description: {details.discription}</p>
        <p>Project: {details.project}</p>
        <p>Technologies : {details.technologies}</p>
        <p>Project URL: {details.project_url}</p>
        <p>Skills: {details.skills}</p>
        <p>College CGPA: {details.cgpa}</p>
        {/* <NavLink to="/delete"><button type="submit">Delete Template</button></NavLink> */}
        <NavLink to="/details"><button type="submit">Create Template</button></NavLink>

      </div>
    </div>
  );
};

export default Tdelete;