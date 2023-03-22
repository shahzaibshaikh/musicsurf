import { setData, setError, setLoading } from '../slices/albumSlice';
import axiosClient from '../../services/api-client';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async (_, apiThunk) => {
  try {
    const response = await axiosClient.get('/browse/new-releases');
    apiThunk.dispatch(setData(response.data));
  } catch (error: any) {
    apiThunk.dispatch(setError(error));
  } finally {
    apiThunk.dispatch(setLoading(false));
  }
});
