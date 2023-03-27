import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Error, Images, Playlist } from './searchSlice';

export interface FeaturedPlaylistData {
  featured_playlist: { message: string; playlists: Playlist };
}

export interface FeaturedPlaylistState {
  loading: boolean;
  error: Error | null;
  data: FeaturedPlaylistData | null;
}

const initialState: FeaturedPlaylistState = {
  loading: false,
  error: null,
  data: null
};

const featuredPlaylistSlice = createSlice({
  name: 'featuredPlaylists',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setData: (state: any, action: PayloadAction<FeaturedPlaylistData>) => {
      state.data = {
        ...state.data,
        featured_playlist: action.payload
      };
      state.error = null;
    }
  }
});

export const { setLoading, setError, setData } = featuredPlaylistSlice.actions;

export default featuredPlaylistSlice.reducer;
