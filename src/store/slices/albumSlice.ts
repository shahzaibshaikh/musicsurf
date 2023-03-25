import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Error {
  status: number;
  message: string;
}

interface AlbumImages {
  url: string;
  height: number;
  width: number;
}

export interface Artist {
  name: string;
  id: string;
}

export interface Albums {
  album_type: string;
  total_tracks: number;
  id: string;
  name: string;
  popularity: number;
  album_group: string;
  artists: Artist[];
  images: AlbumImages[];
}
export interface AlbumData {
  total: number;
  items: Albums[];
}

export interface AlbumState {
  loading: boolean;
  error: Error | null;
  data: AlbumData | null;
}

const initialState: AlbumState = {
  loading: false,
  error: null,
  data: null
};

const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<AlbumData>) => {
      state.data = action.payload;
      state.error = null;
    }
  }
});

export const { setLoading, setError, setData } = albumSlice.actions;

export default albumSlice.reducer;
