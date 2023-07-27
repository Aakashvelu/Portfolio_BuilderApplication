import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './get.css';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import { saveAs } from 'file-saver';

const Page = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const token = localStorage.getItem('token');

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get('http://localhost:8181/api/v1/demo/getcontact/aakashvelu11@gmail.com', config);
        setDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching details:', error);
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const exportPage = () => {
    const pageContent = document.documentElement.outerHTML;
    localStorage.setItem('portfolioPage', pageContent);
    // alert('Portfolio page exported and saved in local storage!');
    const blob = new Blob([pageContent], { type: 'text/html;charset=utf-8' });
  
      saveAs(blob, 'my_portfolio.html');
  
      alert('Portfolio page exported and saved as "my_portfolio.jpg" in the local disk!');
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className='geet'>
        <h1>My Portfolio</h1>
        <div className='details-container'>
          <div className='nam'>

          <p><strong>Name:</strong> {details.name}</p>
          <p><strong>Description:</strong> {details.discription}</p>
          </div>
          <div className='contact'>

          <p><strong>Email:</strong> {details.email}</p>
          <p><strong>Phone Number:</strong> {details.phoneNo}</p>
          </div>
          <div className='project'>

          <p><strong>Project:</strong> {details.project}</p>
          <p><strong>Technologies:</strong> {details.tecnologies}</p>
          <p><strong>Project URL:</strong>Https {details.project_url}</p>
          </div>
          <div className='skill'>

          <p><strong>Skills:</strong> {details.skills}</p>
          </div>
          <div className='college'>
            <p><strong>College:</strong>SKCET</p>

          <p><strong>College CGPA:</strong> {details.cgpa}</p>
          </div>
          <div className='b'>

          <div className='buttons-container'>
            <NavLink to="/delete">
              <button type="submit">Delete Template</button>
            </NavLink>
            <NavLink to="/edit">
              <button type="submit">Edit Template</button>
            </NavLink>
            <button type="button" onClick={exportPage}>Export & Save</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
