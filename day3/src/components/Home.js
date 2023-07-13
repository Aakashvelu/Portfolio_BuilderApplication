import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import img from './im.webp'
import i1 from './images/1.jpeg'
import i2 from './images/2.jpeg'
import i3 from './images/3.jpeg'
import i4 from './images/4.jpeg'

class Home extends React.Component {
  render() {
    return (
      
      <div className='p'>
        <h1 className='h1'>Showcase your work online with a portfolio website</h1>
        <img src={img} className='img' alt='img'></img>
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

