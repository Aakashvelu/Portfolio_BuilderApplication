import React from 'react';
import './Dashboard.css';

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
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Templates</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Welcome to your Dashboard</h1>
          <p>Manage your portfolio and settings here.</p>
        </header>
        <div className="content">
          {/* Your dashboard content goes here */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
