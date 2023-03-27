import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Error, PlaylistItems } from './searchSlice';

export interface SpecificPlaylistState {
  loading: boolean;
  error: Error | null;
  data: PlaylistItems | null;
}

const initialState: SpecificPlaylistState = {
  loading: false,
  error: null,
  data: null
};

const specificPlaylistSlice = createSlice({
  name: 'specificPlaylist',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setData: (state: any, action: PayloadAction<PlaylistItems>) => {
      state.data = {
        ...state.data,
        featured_playlist: action.payload
      };
      state.error = null;
    }
  }
});

export const { setLoading, setError, setData } = specificPlaylistSlice.actions;

export default specificPlaylistSlice.reducer;
