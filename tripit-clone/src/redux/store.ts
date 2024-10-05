import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import oauthReducer from './oauthSlice'; 
import onboardingReducer from './onboardingSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    oauth: oauthReducer,  
    onboarding: onboardingReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
