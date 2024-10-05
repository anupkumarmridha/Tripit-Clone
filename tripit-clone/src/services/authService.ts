import axios from 'axios';

export const loginWithOAuthService = async (provider: string) => {
  const response = await axios.get(`/auth/${provider}`);
  return response.data.token;
};
