import { createAsyncThunk } from '@reduxjs/toolkit';
import { setError, setLoading, setToken } from '../slices/spotifySlice';

export const authorizeSpotify = createAsyncThunk(
  'spotify/authorizeSpotify',
  async (_, thunkAPI) => {
    try {
      const clientId = import.meta.env.CLIENT_ID;
      const redirectUri: any = import.meta.env.REDIRECT_URI;
      const scope = 'user-read-private user-read-email';
      const state = 'spotify-auth';

      const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;
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
