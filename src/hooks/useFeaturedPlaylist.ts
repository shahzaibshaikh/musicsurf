import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setData,
  setError,
  setLoading,
  FeaturedPlaylistState
} from '../store/slices/featuredPlaylistSlice';
import apiClient from '../services/api-client';

function useFeaturedPlaylist(
  token: string,
  country?: string,
  limit?: number
): FeaturedPlaylistState {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: any) => state.featuredPlaylists);

  apiClient.defaults.headers.common = {
    Authorization: 'Bearer ' + token,
    'Content-Type': 'application/json'
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));

        const featuredPlaylistData = await apiClient.get(`/browse/featured-playlists`, {
          params: {
            limit: limit,
            country: country
          }
        });

        dispatch(setData(featuredPlaylistData.data));

        dispatch(setLoading(false));
      } catch (error: any) {
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
      }
    };
    if (token) fetchData();
  }, [dispatch, token]);

  return { data, error, loading };
}

export default useFeaturedPlaylist;
