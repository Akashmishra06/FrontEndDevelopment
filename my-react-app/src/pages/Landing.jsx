import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; // Optional for styling

const Landing = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to My App</h1>
      <div className="links-container">
        <Link to="/home" className="landing-link">
          Go to Home
        </Link>
        <Link to="/about" className="landing-link">
          Go to About
        </Link>
        <Link to="/contact" className="landing-link">
          Go to Contact
        </Link>
      </div>
    </div>
  );
};

export default Landing;