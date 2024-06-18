import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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

    // Password Validation (add your logic here)
    // For example:
    if (password.length < 6) {
      isValid = false;
      // Add error message for short password
    }

    if (isValid) {
      // Handle form submission here (e.g., send data to server)
      // **Important:** Don't send password in plain text!
      console.log('Form submitted:', { email }); // Only log email for security reasons
    }
  };

  return (
    <div className="container">
      <div className="row flex-wrap">
        <div className="col-md-6 form-section">
          <h1>Fill out the form below to Log In</h1>
          <form className='needs-validation was-validated' onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder='Enter your email'
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder='Enter your password'
                maxLength="14"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div className="invalid-feedback">Please enter your password</div>
            </div>
            <button type="submit" className="btn btn-primary signup-button w-100 rounded-lg">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
