import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SpotifyState {
  loading: boolean;
  error: string | null;
  token: string | null;
}

const initialState: SpotifyState = {
  loading: false,
  error: null,
  token: null
};

const spotifySlice = createSlice({
  name: 'spotify',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    }
  }
});

export const { setLoading, setError, setToken } = spotifySlice.actions;
export default spotifySlice.reducer;
