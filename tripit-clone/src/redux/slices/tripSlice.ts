import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TripState } from '../../types/types';

const initialState: TripState = {
  tripName: '',
  destination: '',
  startDate: '',
  endDate: '',
  imagePreview: 'https://via.placeholder.com/300',
};

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    setTripDetails(state, action: PayloadAction<Partial<TripState>>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setTripDetails } = tripSlice.actions;
export default tripSlice.reducer;
