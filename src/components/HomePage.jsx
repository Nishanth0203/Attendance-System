import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const courses = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'History' },
    { id: 4, name: 'Geography' },
    { id: 5, name: 'Political Science' },
    { id: 6, name: 'Hindi' },
    // Add more courses as needed
  ];

  const classes = Array.from({ length: 10 }, (_, index) => index + 1); // Creates an array [1, 2, ..., 10]

  return (
    <div className="home-page">
      <header className="header">
      <div className="logo">
           <img className="logo-image" src="/srm_uni.jpg" alt="Logo" />
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
           <li>
             <Link to="/report">Report</Link>
           </li>
           <li>
             <Link to="/Courses">Courses</Link>
           </li>
           <li>
             <Link to="/Announcement">Announcement</Link>
           </li>
           <li className="signin">
            <Link to="/SignIn">Sign Up</Link>
           </li>
         </ul>
      </nav>
      <main className="main-content">
      <div className="sidebar">
        <h2>Classes</h2>
        <ul className="class-list">
          {classes.map(classNumber => (
            <li key={classNumber}>
              <button className="class-button">
                <Link to={`/class/${classNumber}`}>Class {classNumber}</Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
        <div className="course-list">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <h2>{course.name}</h2>
              <button className="attendance-button">Mark Attendance</button>
            </div>
          ))}
        </div>

        <footer className="footer">
        <p>&copy; 2023 Your School Name. All rights reserved.</p>
      </footer>
      </main>
    </div>
  );
};

export default HomePage;


