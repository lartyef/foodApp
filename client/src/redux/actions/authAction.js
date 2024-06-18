import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUpAdmin, loginAdmin } from '../../services/api';

export const signupAdmin = createAsyncThunk(
  'auth/signupAdmin',
  async (adminData, { rejectWithValue }) => {
    try {
      const response = await signUpAdmin(adminData);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginAdmin = createAsyncThunk(
  'auth/loginAdmin',
  async (adminData, { rejectWithValue }) => {
    try {
      const response = await loginAdmin(adminData);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
