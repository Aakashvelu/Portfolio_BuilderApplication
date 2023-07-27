import React from 'react';
import ProfilePictureUpload from './Picupload';
import './profile.css';
import { NavLink } from 'react-router-dom';
import PersonalProfile from './pro';
import ProfilePage from './pro';

function Profile() {
  return (
    <div className="dashboard-container">
        <aside className="sidebar">
        <h2 className="logo">Portfolio Builder</h2>
        <nav className="sidebar-nav">
          <ul >
            
            <li className='uli'>
            <NavLink to="/Home" activeClassName="prof">Home</NavLink>
          </li>
            <li className='uli'>
            <NavLink to="/creation" activeClassName="Temp">Templates</NavLink>
          </li>
          <li className='uli'>
            <NavLink to="/" activeClassName="Temp">Logout</NavLink>
          </li>
          <li className='uli'>
            <NavLink to='/details' activeClassName="Temp">Details</NavLink>

          </li>
            
          </ul>
        </nav>
      </aside>

      <h1></h1>
      <div className='pic'>

      {/* <ProfilePictureUpload /> */}
      <ProfilePage/>
      </div>
    </div>
  );
}

export default Profile;
