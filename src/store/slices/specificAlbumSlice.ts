import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArtistDetail, Error, Images, Tracks } from './searchSlice';

export interface Albums {
  album_type: string;
  total_tracks: number;
  id: string;
  name: string;
  popularity: number;
  release_date: string;
  artists: ArtistDetail[];
  images: Images[];
  tracks: Tracks;
}

export interface SpecificAlbumState {
  loading: boolean;
  error: Error | null;
  data: Albums | null;
}

const initialState: SpecificAlbumState = {
  loading: false,
  error: null,
  data: null
};

const specificAlbumSlice = createSlice({
  name: 'specificAlbum',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<Albums>) => {
      state.data = action.payload;
      state.error = null;
    }
  }
});

export const { setLoading, setError, setData } = specificAlbumSlice.actions;

export default specificAlbumSlice.reducer;
