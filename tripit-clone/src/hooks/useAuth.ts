import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/authSlice';
import { signup, login } from '../services/authService';
import { AxiosError } from 'axios'; 

interface SignupArgs {
  email: string;
  password: string;
  homeCity: string;
}

interface LoginArgs {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

// Signup Hook
export const useSignup = () => {
  const dispatch = useDispatch();

  const mutation = useMutation<AuthResponse, AxiosError, SignupArgs>({
    mutationFn: async (signupArgs: SignupArgs) => {
      const response = await signup(signupArgs.email, signupArgs.password, signupArgs.homeCity);
      return response; 
    },
    onSuccess: (data) => {
      // Dispatch the token to Redux
      dispatch(setToken(data.token));
    },
    onError: (error) => {
      console.error('Signup failed', error);
    },
  });

  return mutation;
};

// Login Hook
export const useLogin = () => {
  const dispatch = useDispatch();

  const mutation = useMutation<AuthResponse, AxiosError, LoginArgs>({
    mutationFn: async (loginArgs: LoginArgs) => {
      const response = await login(loginArgs.email, loginArgs.password);
      return response; 
    },
    onSuccess: (data) => {
      // Dispatch the token to Redux
      dispatch(setToken(data.token));
    },
    onError: (error) => {
      console.error('Login failed', error);
    },
  });

  return mutation;
};
