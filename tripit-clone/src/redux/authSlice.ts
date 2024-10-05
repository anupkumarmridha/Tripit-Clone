import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  email: string;
  password: string;
  homeCity: string;
  emailError: string;
  passwordError: string;
  cityError: string;
}

const initialState: AuthState = {
  email: '',
  password: '',
  homeCity: '',
  emailError: '',
  passwordError: '',
  cityError: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setHomeCity: (state, action) => {
      state.homeCity = action.payload;
    },
    setEmailError: (state, action) => {
      state.emailError = action.payload;
    },
    setPasswordError: (state, action) => {
      state.passwordError = action.payload;
    },
    setCityError: (state, action) => {
      state.cityError = action.payload;
    },
  },
});

export const {
  setEmail,
  setPassword,
  setHomeCity,
  setEmailError,
  setPasswordError,
  setCityError,
} = authSlice.actions;

export default authSlice.reducer;
