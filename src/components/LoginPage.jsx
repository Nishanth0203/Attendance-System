import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../firebaseConfig';
import './LoginPage.css';
import { Navigate } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Redirect to HomePage after successful login
      // return <Navigate to="/home" />;
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };
  
  

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Attendance Management System</h2>
        <form className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
