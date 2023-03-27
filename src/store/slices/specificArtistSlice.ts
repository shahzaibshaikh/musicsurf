import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Albums, ArtistItems, Error, Images, TrackItems, Tracks } from './searchSlice';

export interface SpecificArtistData {
  artist_data: ArtistItems;
  related_artists: ArtistItems[];
  artist_albums: Albums;
  artist_toptracks: TrackItems[];
}

export interface SpecificArtistState {
  loading: boolean;
  error: Error | null;
  data: SpecificArtistData | null;
}

const initialState: SpecificArtistState = {
  loading: false,
  error: null,
  data: null
};

const specificArtistSlice = createSlice({
  name: 'specificArtist',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setArtistData: (state: any, action: PayloadAction<ArtistItems>) => {
      state.data = {
        ...state.data,
        artist_data: action.payload
      };
      state.error = null;
    },
    setRelatedArtistData: (state: any, action: PayloadAction<ArtistItems[]>) => {
      state.data = {
        ...state.data,
        related_artists: action.payload
      };
      state.error = null;
    },
    setArtistAlbumsData: (state: any, action: PayloadAction<Albums>) => {
      state.data = {
        ...state.data,
        artist_albums: action.payload
      };
      state.error = null;
    },
    setArtistTrackData: (state: any, action: PayloadAction<Tracks>) => {
      state.data = {
        ...state.data,
        artist_toptracks: action.payload
      };
      state.error = null;
    }
  }
});

export const {
  setLoading,
  setError,
  setArtistData,
  setRelatedArtistData,
  setArtistAlbumsData,
  setArtistTrackData
} = specificArtistSlice.actions;

export default specificArtistSlice.reducer;
