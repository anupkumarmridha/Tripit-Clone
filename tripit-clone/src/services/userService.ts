import axios from 'axios';
import { API_URL } from '../config/config';

export const onboarding = async (
  token: string,
  firstName: string,
  lastName: string,
  dob: string,
  homeCity: string,
  receiveEmails: boolean
) => {
  const response = await axios.post(
    `${API_URL}/api/onboarding`,
    { firstName, lastName, dob, homeCity, receiveEmails },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const fetchProfile = async (token: string) => {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  };