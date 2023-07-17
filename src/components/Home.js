import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import { NavLink } from 'react-router-dom';
import img from './im.webp'
import i1 from '../Hom/1.jpeg';
import i2 from '../Hom/2.jpeg';
import i3 from '../Hom/3.jpeg';
import i4 from '../Hom/4.jpeg';
import Auto from '../Hom/Autoscroll';
import Footer from './footer';
// import Tyoed from 'react-typed';

class Home extends React.Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className='p'>
        <div className='h1'>
        {/* <Tyoed
  strings={['Showcase your work online with a portfolio website']}
  typeSpeed={60}
  backSpeed={40}
  loop
/> */}

        <h1 >Showcase your work online with a portfolio website</h1>
        {/* <Tyoed
             strings={[
               "Showcase your work online with a portfolio website",
               "Create a professional profile"
              ]
              
             }
             typeSpeed={150}
             backSpeed={100}
             loop
            /> */}
        {/* <button className='button' >Get Started</button> */}
        <NavLink to="/creation" className="nlink">

        <button type="submit" className='button'>Get Started</button>
        </NavLink>
        </div>
        <div className='ig'>

        <img src={img} className='img' alt='img'></img>
        </div>
        {/* <div>
          <Auto/>
        </div> */}
        {/* <div className='slider'>
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
        </div> */}
      
         {/* </div> */}
         <main className="main-content">
        <header className="header">
          {/* <h1>Welcome to your Dashboard</h1> */}
          {/* <p>Manage your portfolio and settings here.</p> */}
    
    <div>
      <section className="hero">
        <div className="hero-content">
          <h2>Create and showcase your professional portfolio with ease.</h2>
          {/* <p>Create and showcase your professional portfolio with ease.</p> */}
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Easy Portfolio Creation</h3>
          <p>Create your portfolio by adding projects, experience, and skills.</p>
        </div>
        <div className="feature">
          <h3>Customizable Design</h3>
          <p>Choose from various design templates and customize them to match your style.</p>
        </div>
        <div className="feature">
          <h3>Showcase Your Work</h3>
          <p>Promote your projects, share your portfolio link, and get discovered by potential clients.</p>
        </div>
      </section>

      {/* <section className="cta">
        <h2>Ready to get started?</h2>
        <NavLink to="/creation" className="nlink">
        
        <button className="cta-button">Create Your Portfolio</button>
        </NavLink>
      </section> */}
    </div>
 

        </header>
        <div className="content">
              
        </div>
      </main>
        

        </div>
        {/* <footer>
      <p className='foot'>© 2023 MakeFolio All rights reserved Terms of Service Privacy Policy</p>
    </footer> */}
    <Footer/>
      
      </>
    );
  }
}

export default Home;

