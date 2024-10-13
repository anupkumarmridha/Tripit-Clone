import { useMutation, useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { saveTrip, fetchTrip, deleteTrip, fetchAllTrips, updateTrip } from '../services/tripService';
import { AxiosError } from 'axios';
import { TripState } from '../types/types';


// Hook for saving a trip
export const useSaveTrip = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const mutation = useMutation<void, AxiosError, TripState>({
    mutationFn: async (tripDetails: TripState) => {
      if (!token) {
        throw new Error('No token found');
      }
      const response = await saveTrip(token, tripDetails);
      return response;
    },
    onError: (error) => {
      console.error('Saving trip failed', error);
    },
  });

  return mutation;
};

// Hook for fetching trip details
export const useTripDetails = (tripId: string) => {
  const token = useSelector((state: RootState) => state.auth.token);

  const query = useQuery<TripState, AxiosError>({
    queryKey: ['trip', tripId],
    queryFn: async () => {
      if (!token) {
        throw new Error('No token found');
      }
      return fetchTrip(token, tripId);
    },
    enabled: !!token && !!tripId,
  });

  return query;
};

// Hook for updating a trip
export const useUpdateTrip = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    const mutation = useMutation<void, AxiosError, { tripId: string; tripDetails: TripState }>({
        mutationFn: async ({ tripId, tripDetails }) => {
            if (!token) {
                throw new Error('No token found');
            }
            await updateTrip(token, tripId, tripDetails);
        },
        onError: (error) => {
            console.error('Updating trip failed', error);
        },
    });

    return mutation;
};

// Hook for deleting a trip
export const useDeleteTrip = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    const mutation = useMutation<void, AxiosError, string>({
        mutationFn: async (tripId: string) => {
            if (!token) {
                throw new Error('No token found');
            }
            await deleteTrip(token, tripId);
        },
        onError: (error) => {
            console.error('Deleting trip failed', error);
        },
    });

    return mutation;
};

// Hook for fetching all trips
export const useAllTrips = () => {
    const token = useSelector((state: RootState) => state.auth.token);

    const query = useQuery<TripState[], AxiosError>({
        queryKey: ['allTrips'],
        queryFn: async () => {
            if (!token) {
                throw new Error('No token found');
            }
            return fetchAllTrips(token);
        },
        enabled: !!token,
    });

    return query;
};