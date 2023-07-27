import React from 'react';
import './About.css'
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
    <Navbar/>
    <section className="about-us">
      
      <div className="container1">
        <h2>About Us</h2>
        <br/>
        <br/>
        <p>
          We are a team of passionate developers dedicated to providing you with the best online portfolio building experience. With our intuitive interface and customizable templates, you can showcase your work in a professional and visually stunning way.
        </p>
        <br/>
        <br/>
        {/* <br/> */}
        <p>
          Our mission is to empower individuals and businesses to create impressive portfolios that effectively represent their skills and achievements. Whether you are a freelancer, designer, photographer, or any other professional, our platform is designed to meet your unique needs.
        </p>
        <br/>
        <br/>
        <p>
          Join our community today and start building your online portfolio with ease. Let your work speak for itself and make a lasting impression on potential clients and employers.
        </p>
        <br/>
        <h3>Contact Us</h3>
        <br/>
        <p>
          For any inquiries or assistance, please feel free to reach out to us at:
        </p>
        <br/>
        <p>
          Email: <a href="mailto:contact@example.com">aakashvelu11@gmail.com</a>
        </p>
        <br/>
        <p>
          Mobile: 9874563210
        </p>
        <br/>
        <p>
          Connect with us on social media:
        </p>
        <br/>
        <div className="social-links">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </section>
    
  </>
  );
}

export default About;
