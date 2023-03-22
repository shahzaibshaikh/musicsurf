import { setData, setError, setLoading } from '../slices/albumSlice';
import axiosClient from '../../services/api-client';
import { useSelector } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface TokenProp {
  token: string;
}

export const fetchAlbums = createAsyncThunk(
  'albums/fetchAlbums',
  async (token: TokenProp, thunkAPI) => {
    console.log('Reached');
    axiosClient.defaults.headers['Authorization'] = 'Bearer ' + token;
    axiosClient.defaults.headers['Content-Type'] = 'application/json';
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.get('/browse/new-releases');
      thunkAPI.dispatch(setData(response.data));
    } catch (error: any) {
      thunkAPI.dispatch(setError(error));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);
