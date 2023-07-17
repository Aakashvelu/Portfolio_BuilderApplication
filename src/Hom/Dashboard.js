import React from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">Portfolio Builder</h2>
        <nav className="sidebar-nav">
          <ul>
            <li className="active">
              <a href="#">Dashboard</a>
            </li>
            <li>
            <NavLink to="/profile" activeClassName="prof">Profile</NavLink>
          </li>
            <li>
            <NavLink to="/creation" activeClassName="Temp">Templates</NavLink>
          </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          {/* <h1>Welcome to your Dashboard</h1> */}
          {/* <p>Manage your portfolio and settings here.</p> */}
    
    <div>
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to the Portfolio Builder Dashboard</h2>
          <p>Create and showcase your professional portfolio with ease.</p>
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

      <section className="cta">
        <h2>Ready to get started?</h2>
        <NavLink to="/creation" className="nlink">
           
        <button className="cta-button">Create Your Portfolio</button>
           </NavLink>
      </section>
    </div>
 

        </header>
        <div className="content">
              
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
