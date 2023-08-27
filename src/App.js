

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <footer className="footer">
          <p>&copy; 2023 Your School Name. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;






