import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OnboardingState {
  firstName: string;
  lastName: string;
  dob: string;
  homeCity: string;
  receiveEmails: boolean;
  errors: {
    firstName: string;
    lastName: string;
    dob: string;
    homeCity: string;
  };
}

const initialState: OnboardingState = {
  firstName: '',
  lastName: '',
  dob: '',
  homeCity: '',
  receiveEmails: false,
  errors: {
    firstName: '',
    lastName: '',
    dob: '',
    homeCity: '',
  },
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setField: (state, action: PayloadAction<{ field: string; value: string }>) => {
      (state[action.payload.field as keyof OnboardingState] as string) = action.payload.value;
    },
    setReceiveEmails: (state, action: PayloadAction<boolean>) => {
      state.receiveEmails = action.payload;
    },
    validateFields: (state) => {
      state.errors.firstName = state.firstName ? '' : 'First name is required';
      state.errors.lastName = state.lastName ? '' : 'Last name is required';
      state.errors.dob = state.dob ? '' : 'Date of birth is required';
      state.errors.homeCity = state.homeCity ? '' : 'Home city is required';
    },
    resetForm: (state) => {
      state.firstName = '';
      state.lastName = '';
      state.dob = '';
      state.homeCity = '';
      state.receiveEmails = false;
      state.errors = {
        firstName: '',
        lastName: '',
        dob: '',
        homeCity: '',
      };
    },
  },
});

export const { setField, setReceiveEmails, validateFields, resetForm } = onboardingSlice.actions;

export default onboardingSlice.reducer;
