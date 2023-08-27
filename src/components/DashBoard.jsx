import React from 'react';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <h1>Welcome to Your Dashboard</h1>

      <p>Username: JohnDoe</p>
      <p>Email: john@example.com</p>

      <ul>
        <li>Classes</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default DashboardPage;
