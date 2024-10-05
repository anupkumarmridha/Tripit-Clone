import axios from 'axios';

export const fetchCities = async (searchTerm: string) => {
  const { data } = await axios.get(
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${searchTerm}&apiKey=b1c836e0b07d47b99e9f3c4b6181a685`
  );
  
  // Transform the data to match the expected format for react-select
  return data.features.map((city: any) => ({
    label: city.properties.formatted,
    value: city.properties.formatted,
  }));
};
