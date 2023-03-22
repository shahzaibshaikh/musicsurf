import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const albumSlice = createSlice({
  name: 'albums',
  initialState: {
    loading: false,
    error: null,
    data: null
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setLoading, setError, setData } = albumSlice.actions;

export default albumSlice.reducer;
