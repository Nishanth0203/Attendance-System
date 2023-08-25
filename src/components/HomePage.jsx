import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import your custom CSS if needed

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">
          <span>Attendance</span>
        </div>
        <h1>Attendance Management System</h1>
      </header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* Add more navigation links */}
          <li className='signin'>
            <Link to="/SignIn">Sign Up</Link>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default HomePage;

