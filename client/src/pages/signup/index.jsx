import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupAdmin } from '../../redux/slice/authSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './index.css';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupAdmin(formData))
      .then(() => {
        // Navigate to login page on successful signup
        navigate('/'); // Use navigate to redirect to '/login'
      });
  };

  return (
    <div className="signup-container">
      <h2>Admin Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loading}>Sign Up</button>
        {error && <p className="error-message">{error.message}</p>}
      </form>
    </div>
  );
};

export default SignUp;
