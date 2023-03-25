import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Error {
  status: number;
  message: string;
}

interface CategoryImages {
  url: string;
  height: number;
  width: number;
}

export interface Categories {
  id: string;
  name: string;
  href: string;
  icons: CategoryImages[];
}
export interface CategoryData {
  total: number;
  items: Categories[];
  href: string;
  limit: number;
}

export interface CategoryState {
  loading: boolean;
  error: Error | null;
  data: CategoryData | null;
}

const initialState: CategoryState = {
  loading: false,
  error: null,
  data: null
};

const categorySlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<CategoryData>) => {
      state.data = action.payload;
      state.error = null;
    }
  }
});

export const { setLoading, setError, setData } = categorySlice.actions;

export default categorySlice.reducer;
