import React, { useState } from 'react';
import './Login.css';
import logo from '../image/booklogo.webp'; // Adjust the path based on the actual location

import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Ensure you have react-icons installed

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const isFormValid = email !== '' && password !== '';

  return (
    <div className="App">
      <div className="login-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span onClick={togglePasswordVisibility} className="password-toggle-icon">
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="forgot-password">
            <a href="/">Forgot password?</a>
          </div>
          <button 
            type="submit" 
            className="login-button" 
            disabled={!isFormValid} 
            onClick={() => { if (isFormValid) window.location.href = '/dashboard'; }}
          >
            Login
          </button>
        </form>
        <div className="signup">
          <p>Don't have an account? <a href="/signup">Signup now</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
