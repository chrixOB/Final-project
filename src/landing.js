import React, { useState } from 'react';
import myImage from "./programmer.png"
import './App.css'; 
// import Login from './login';
import 'bootstrap/dist/css/bootstrap.min.css';


function LandingPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true; // Flag to track overall validity

  // Email Validation (using regular expression)
  if (!emailRegex.test(email)) {
    isValid = false;
    document.getElementById('email').classList.add('is-invalid'); // Add invalid class
  } else {
    document.getElementById('email').classList.remove('is-invalid'); // Remove invalid class
  }

  // Password Match Check
  if (password !== confirmPassword) {
    isValid = false;
    alert('Passwords do not match!'); // You can use a dedicated error message element instead of alert
  }

  if (isValid) {
    // Handle form submission here (e.g., send data to server)
    console.log('Form submitted:', { email, password });
  };

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Handle form submission here (e.g., send data to server)
    console.log('Form submitted:', { email, password });
  };
// add padding inside the left hand side
// add padding inside the left hand side
// add padding inside the left hand side
// add padding inside the left hand side
// add padding inside the left hand side
// add padding inside the left hand side
// add padding inside the left hand side
// add padding inside the left hand side
// add padding inside the left hand side
// add padding inside the left hand side
// add padding inside the left hand side
// add padding inside the left hand side
// add padding inside the left hand side

// add padding inside the left hand side
// add padding inside the left hand side
return (
<div className="container">
// add padding inside the left hand side
      <div className="row flex-wrap">
      // add padding inside the left hand side
        <div className="col-md-6 form-section ">
          <h1 className='mt-4 mb-4'>Fill out the form below to create an account</h1>
          <form className='needs-validation was-validated' onSubmit={handleSubmit}>
            <div className="form-group mb-4 mt-4">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control is-invalid w-sm-75"
                id="email"
                placeholder='Enter your email'
                value={email}
                onChange={handleEmailChange}
                required
              />
            
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control w-sm-75"
                id="password"
                placeholder='create a password'
                maxLength="14"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            <div className="invalid-feedback">Please enter your password</div>  
            </div>
            <div className="form-group mb-4">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                className="form-control w-sm-75"
                id="confirmPassword"
                placeholder='confirm password'
                maxLength="14"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            <div className="invalid-feedback">Confirm password</div>  
            </div>
            <button type="submit" className="btn btn-primary signup-button w-100 rounded-lg mb-4">
              Sign Up
            </button>
          </form>
          <div>
            <p>
              Already have an accont? <span><a href="./login.js" target='_blank' rel="noreferrer">Log in</a></span>
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex borderly ">
        
        
          <img src={myImage} alt="Start coding today" className='flex-fill'/>
          
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
