import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Error {
  status: number;
  message: string;
}

interface Images {
  url: string;
  height: number;
  width: number;
}

export interface ArtistDetail {
  name: string;
  id: string;
}

export interface AlbumItems {
  id: string;
  name: string;
  popularity: number;
  total_tracks: number;
  artists: ArtistDetail[];
  images: Images[];
}

export interface ArtistItems {
  id: string;
  name: string;
  popularity: number;
  images: Images[];
}

export interface TrackItems {
  id: string;
  name: string;
  popularity: number;
  duration_m: number;
  artists: ArtistDetail[];
}

export interface Artist {
  total: number;
  items: ArtistItems[];
}

export interface Albums {
  total: number;
  items: AlbumItems[];
}

export interface Tracks {
  total: number;
  items: TrackItems[];
}

export interface SearchData {
  tracks: Tracks;
  albums: Albums;
  artists: Artist;
}

export interface SearchState {
  loading: boolean;
  error: Error | null;
  data: SearchData | null;
  searchQuery: string;
}

const initialState: SearchState = {
  loading: false,
  error: null,
  data: null,
  searchQuery: ''
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<SearchData>) => {
      state.data = action.payload;
      state.error = null;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    }
  }
});

export const { setLoading, setError, setData, setSearch } = searchSlice.actions;

export default searchSlice.reducer;