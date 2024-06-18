import axios from 'axios';

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   withCredentials: true,
// });

const baseURL = "http://localhost:3000/api/v1"

export const signUpAdmin = async (adminData) => {
  const response = await axios.post(`${baseURL}/signup`, payload, {
    withCredentials: true
  } );
  return response.data;
};

// export const loginAdmin = async (adminData) => {
//   const response = await api.post('/admin/login', adminData);
//   return response.data;
// };

// export default api;
