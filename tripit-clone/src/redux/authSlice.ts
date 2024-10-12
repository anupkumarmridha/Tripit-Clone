import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  email: string;
  password: string;
  homeCity: string;
  emailError: string;
  passwordError: string;
  cityError: string;
  token: string | null;
}

const initialState: AuthState = {
  email: '',
  password: '',
  homeCity: '',
  emailError: '',
  passwordError: '',
  cityError: '',
  token: localStorage.getItem('token') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setHomeCity: (state, action: PayloadAction<string>) => {
      state.homeCity = action.payload;
    },
    setEmailError: (state, action: PayloadAction<string>) => {
      state.emailError = action.payload;
    },
    setPasswordError: (state, action: PayloadAction<string>) => {
      state.passwordError = action.payload;
    },
    setCityError: (state, action: PayloadAction<string>) => {
      state.cityError = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      if (action.payload) {
        localStorage.setItem('token', action.payload);
      } else {
        localStorage.removeItem('token');
      }
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
    resetForm: (state) => {
      state.email = '';
      state.password = '';
      state.homeCity = '';
      state.emailError = '';
      state.passwordError = '';
      state.cityError = '';
    }
  },
});

export const {
  setEmail,
  setPassword,
  setHomeCity,
  setEmailError,
  setPasswordError,
  setCityError,
  setToken,
  logout,
  resetForm,
} = authSlice.actions;

export default authSlice.reducer;
