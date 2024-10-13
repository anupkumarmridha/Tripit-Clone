import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import oauthReducer from './slices/oauthSlice'; 
import onboardingReducer from './slices/onboardingSlice';
import tripReducer from './slices/tripSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    oauth: oauthReducer,  
    onboarding: onboardingReducer,
    trip: tripReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
