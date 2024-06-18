// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { signupAdmin } from '../../redux/actions/authActions';

// const AdminSignUp = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector(state => state.auth);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(signupAdmin(formData));
//   };

//   return (
//     <div>
//       <h2>Admin Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//         <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
//         <button type="submit" disabled={loading}>Sign Up</button>
//         {error && <p>{error.message}</p>}
//       </form>
//     </div>
//   );
// };

// export default AdminSignUp;




import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupAdmin } from '../../redux/slice/authSlice';

const AdminSignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupAdmin(formData));
  };

  return (
    <div>
      <h2>Admin Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit" disabled={loading}>Sign Up</button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
};

export default AdminSignUp;
