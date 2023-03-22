import { createAsyncThunk } from '@reduxjs/toolkit';
import { setError, setLoading, setToken } from '../slices/spotifySlice';

export const authorizeSpotify = createAsyncThunk(
  'spotify/authorizeSpotify',
  async (_, thunkAPI) => {
    try {
      const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
      const REDIRECT_URI: any = import.meta.env.VITE_REDIRECT_URI;
      const SCOPE = 'user-read-private%20user-read-email';
      const STATE = 'spotify-auth';

      const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&state=${STATE}`;
      window.location.href = url;

      const hashParams = window.location.hash
        .substring(1)
        .split('&')
        .reduce(function (result: any, item: string) {
          var parts = item.split('=');
          result[parts[0]] = parts[1];
          return result;
        }, {});

      if (hashParams.access_token) {
        thunkAPI.dispatch(setToken(hashParams.access_token));
      }
    } catch (error: any) {
      thunkAPI.dispatch(setError(error.message));
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);
