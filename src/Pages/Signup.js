import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Make sure to create this CSS file for styling
import logo from '../image/booklogo.webp'; // Adjust the path based on the actual location

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    nationality: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = "Full name is required";
    if (!formData.phoneNumber) tempErrors.phoneNumber = "Phone number is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    if (!formData.nationality) tempErrors.nationality = "Nationality is required";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No errors, proceed to Dashboard
      navigate('/dashboard');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <img src={logo} alt="logo" className="logo" />
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full name <span className="required">*</span></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone number <span className="required">*</span></label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password <span className="required">*</span></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="nationality">Nationality <span className="required">*</span></label>
            <select
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
            >
              <option value="">Select your nationality</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Zanzibar">Zanzibar</option>
              <option value="Kenya">Kenya</option>
            </select>
            {errors.nationality && <span className="error">{errors.nationality}</span>}
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
