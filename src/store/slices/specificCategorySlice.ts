import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Error, Images, Playlist, PlaylistItems } from './searchSlice';

export interface Category {
  name: string;
  id: string;
  icons: Images[];
}

export interface SpecificCategoryData {
  playlists: Playlist;
  category: Category;
}

export interface SpecificCategoryState {
  loading: boolean;
  error: Error | null;
  data: SpecificCategoryData | null;
}

const initialState: SpecificCategoryState = {
  loading: false,
  error: null,
  data: null
};

const specificCategorySlice = createSlice({
  name: 'specificCategory',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setPlaylist: (state: any, action: PayloadAction<PlaylistItems>) => {
      state.data = {
        ...state.data,
        playlists: action.payload
      };
      state.error = null;
    },
    setCategory: (state: any, action: PayloadAction<Category>) => {
      state.data = {
        ...state.data,
        category: action.payload
      };
      state.error = null;
    }
  }
});

export const { setLoading, setError, setPlaylist, setCategory } =
  specificCategorySlice.actions;

export default specificCategorySlice.reducer;
