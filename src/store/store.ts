import { configureStore } from '@reduxjs/toolkit';
import albumReducer from './slices/albumSlice';
import categoryReducer from './slices/categorySlice';
import featuredPlaylistReducer from './slices/featuredPlaylistSlice';
import searchReducer from './slices/searchSlice';
import specificAlbumReducer from './slices/specificAlbumSlice';
import specificArtistReducer from './slices/specificArtistSlice';
import specificPlaylistReducer from './slices/specificPlaylistSlice';

export const store = configureStore({
  reducer: {
    albums: albumReducer,
    categories: categoryReducer,
    search: searchReducer,
    specificAlbum: specificAlbumReducer,
    specificArtist: specificArtistReducer,
    featuredPlaylists: featuredPlaylistReducer,
    specificPlaylist: specificPlaylistReducer
  }
});
