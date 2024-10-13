import axios from 'axios';
import { GEO_API_KEY } from '../config/config';
export const fetchCities = async (searchTerm: string) => {
  const { data } = await axios.get(
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${searchTerm}&apiKey=${GEO_API_KEY}`
  );
  
  // Transform the data to match the expected format for react-select
  return data.features.map((city: any) => ({
    label: city.properties.formatted,
    value: city.properties.formatted,
  }));
};
