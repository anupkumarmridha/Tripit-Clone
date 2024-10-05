import { useQuery } from '@tanstack/react-query';
import { loginWithOAuthService } from '../services/authService';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/oauthSlice';

export const useOAuth = (provider: string) => {
  const dispatch = useDispatch();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['oauth', provider],
    queryFn: () => loginWithOAuthService(provider),
    enabled: false, // Disable automatic fetching
  });

  if (data) {
    console.log("OAuth login successful", data);
    dispatch(setToken(data));
  }

  if (error) {
    console.error("OAuth login failed", error);
  }

  return {
    loginWithOAuth: refetch,
    data,
    error,
    isLoading
  };
};
