// import React, { useState } from 'react';
// import './index.css';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement login logic here
//     console.log('Form submitted', formData);
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="email" 
//           name="email" 
//           value={formData.email} 
//           onChange={handleChange} 
//           placeholder="Email" 
//           required 
//         />
//         <input 
//           type="password" 
//           name="password" 
//           value={formData.password} 
//           onChange={handleChange} 
//           placeholder="Password" 
//           required 
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>Not signup yet? please signup <Link to="signup">here</Link> </p>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import './index.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/v1/login-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Assuming successful login, navigate to '/landingpage'
      navigate('/landingpage');

    } catch (error) {
      console.error('Login error:', error.message);
      // Handle login error (display error message, clear form, etc.)
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p>Not signed up yet? Please sign up <Link to="/signup">here</Link>.</p>
    </div>
  );
};

export default Login;
