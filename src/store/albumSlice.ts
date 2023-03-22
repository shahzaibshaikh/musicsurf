import { createSlice } from '@reduxjs/toolkit';
export const albumSlice = createSlice({
  name: 'albums',
  initialState: {
    isLoading: false,
    error: {},
    data: {}
  },
  reducers: {}
});
