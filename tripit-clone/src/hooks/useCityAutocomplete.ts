import { useQuery } from '@tanstack/react-query';
import { fetchCities } from '../services/cityService';

export const useCityAutocomplete = (searchTerm: string) => {
  return useQuery({
    queryKey: ['cities', searchTerm],
    queryFn: () => fetchCities(searchTerm),
    enabled: searchTerm.length > 2, // Enable query only after 3 characters
    staleTime: 5 * 60 * 1000, // Keep data fresh for 5 minutes
    select: (data) => {
      // Ensure the data returned is in the correct format
      return data;
    },
  });
};
