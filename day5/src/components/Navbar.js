import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 
import pro from './pro.png'


class Navbar extends React.Component {
  render() {
    return (
      <nav className='nav'>
        <ul className="navbar">
          <li>
            <NavLink exact to="/home" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/creation" activeClassName="active">Creation</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          {/* <li>
            <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
          </li> */}
          <li>
          <div class="dropdown">
           <button class="dropbtn">Profile</button>
           <div class="dropdown-content">
           <NavLink to="/dashboard" className="nlink">
           <a href="#">Dashboard</a>
           {/* <a href="#">Logout</a> */}
           </NavLink>
           <NavLink to="/" className="nlink">
           <a href="#">Logout</a>
           </NavLink>
           {/* <a href="#"></a> */}
           </div>
           </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
