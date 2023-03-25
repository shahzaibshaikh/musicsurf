import { configureStore } from '@reduxjs/toolkit';
import albumReducer from './slices/albumSlice';
import categoryReducer from './slices/categorySlice';
import searchReducer from './slices/searchSlice';
import spotifyReducer from './slices/spotifySlice';

export const store = configureStore({
  reducer: {
    spotify: spotifyReducer,
    albums: albumReducer,
    categories: categoryReducer,
    search: searchReducer
  }
});
