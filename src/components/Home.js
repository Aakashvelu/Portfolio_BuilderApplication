import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import { NavLink } from 'react-router-dom';
import img from './im.webp'
import i1 from '../Hom/1.jpeg';
import i2 from '../Hom/2.jpeg';
import i3 from '../Hom/3.jpeg';
import i4 from '../Hom/4.jpeg';

class Home extends React.Component {
  render() {
    return (
      
      <div className='p'>
        <div className='h1'>

        <h1 >Showcase your work online with a portfolio website</h1>
        {/* <button className='button' >Get Started</button> */}
        <NavLink to="/creation" className="nlink">

        <button type="submit" className='button'>Get Started</button>
        </NavLink>
        </div>
        <div className='ig'>

        <img src={img} className='img' alt='img'></img>
        </div>
        <div className='slider'>
         <div className='slider-track'>


        <div className='slide'>
          <img src={i1}></img>
        </div>
        <div className='slide'>
          <img src={i2}></img>
        </div>
        <div className='slide'>
          <img src={i3}></img>
        </div>
        <div className='slide'>
          <img src={i4}></img>
        </div>
      </div>
      
         </div>
        </div>
      
    );
  }
}

export default Home;

