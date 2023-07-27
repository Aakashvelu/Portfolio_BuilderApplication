import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 
import pro from './pro.png'
import { Menu } from '@mui/icons-material';
import { selectUser } from '../Features/user';
import MaterialIcon from 'react-google-material-icons';
import {useSelector} from 'react-redux';

function Navbar() {
    const user =useSelector(state => state.user.value)
    console.log(user);
    return (
      <nav className='nav'>
        {/* <ul>Makefolio</ul> */}

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
          <li>
            <NavLink to="/" activeClassName="active">Logout</NavLink>
          </li>
          <li>
            <NavLink to="/feed" activeClassName="active">Feedback</NavLink>
          </li>
          <h3 className='nav-profile-name'>{user.name}</h3>
          {/* <li>
          <div class="dropdown">
           <button class="dropbtn"><MaterialIcon icon="menu_box" size={25}/></button>
           <div class="dropdown-content">
           <NavLink to="/profile" className="nlink">
           Profile
           </NavLink>
           <NavLink to="/" className="nlink">
           Logout
           </NavLink>
           </div>
           </div>
          </li> */}
        </ul>
      </nav>
    );

}

export default Navbar;
