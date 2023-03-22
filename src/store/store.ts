import { configureStore } from '@reduxjs/toolkit';
import albumReducer from './slices/albumSlice';
import spotifyReducer from './slices/spotifySlice';

export const store = configureStore({
  reducer: {
    spotify: spotifyReducer,
    albums: albumReducer
  }
});
