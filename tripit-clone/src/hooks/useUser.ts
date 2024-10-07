import { useMutation, useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { onboarding, fetchProfile } from '../services/userService';

import { AxiosError } from 'axios'; 

interface OnboardingArgs {
  firstName: string;
  lastName: string;
  dob: string;
  homeCity: string;
  receiveEmails: boolean;
}

interface OnboardingResponse {
  message: string;
  onboardingDetails: {
    firstName: string;
    lastName: string;
    dob: string;
    homeCity: string;
    receiveEmails: boolean;
  };
}

// Onboarding Hook
export const useOnboarding = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  const mutation = useMutation<OnboardingResponse, AxiosError, OnboardingArgs>({
    mutationFn: async (onboardingArgs: OnboardingArgs) => {
      if (!token) {
        throw new Error('No token found');
      }
      const response = await onboarding(
        token,
        onboardingArgs.firstName,
        onboardingArgs.lastName,
        onboardingArgs.dob,
        onboardingArgs.homeCity,
        onboardingArgs.receiveEmails
      );
      return response;
    },
    onError: (error) => {
      console.error('Onboarding failed', error);
    },
  });

  return mutation;
};

interface ProfileResponse {
    email: string;
    homeCity: string;
    onboardingDetails: {
      firstName: string;
      lastName: string;
      dob: string;
      homeCity: string;
      receiveEmails: boolean;
    };
  }
  
  export const useProfile = () => {
    const token = useSelector((state: RootState) => state.auth.token);
  
    const query = useQuery<ProfileResponse, AxiosError>({
      queryKey: ['profile'],
      queryFn: async () => {
        if (!token) {
          throw new Error('No token found');
        }
        return fetchProfile(token);
      },
      enabled: !!token,
    });
  
    return query;
  };
  