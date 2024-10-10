import axios from 'axios';
import { API_URL } from '../config/config';

export const loginWithOAuthService = async (provider: string) => {
  const response = await axios.get(`/auth/${provider}`);
  return response.data.token;
};




export const signup = async (email: string, password: string, homeCity: string) => {
  const response = await axios.post(`${API_URL}/api/auth/signup`, { email, password, homeCity });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
  return response.data; 
};

