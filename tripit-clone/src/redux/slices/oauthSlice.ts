import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OAuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: OAuthState = {
  token: null,
  loading: false,
  error: null,
};

const oauthSlice = createSlice({
  name: 'oauth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    logout(state) {
      state.token = null;
      state.error = null;
    },
  },
});

export const { setToken, logout } = oauthSlice.actions;

export default oauthSlice.reducer;
