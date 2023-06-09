import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setData,
  setError,
  setLoading,
  SpecificPlaylistState
} from '../store/slices/specificPlaylistSlice';
import apiClient from '../services/api-client';

function useSpecificPlaylist(
  token: string,
  playlistID: string | undefined
): SpecificPlaylistState {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: any) => state.specificPlaylist);

  apiClient.defaults.headers.common = {
    Authorization: 'Bearer ' + token,
    'Content-Type': 'application/json'
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));

        const specificPlaylistData = await apiClient.get(`/playlists/${playlistID}`);

        dispatch(setData(specificPlaylistData.data));

        dispatch(setLoading(false));
      } catch (error: any) {
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
      }
    };
    if (token) fetchData();
  }, [dispatch, token, playlistID]);

  return { data, error, loading };
}

export default useSpecificPlaylist;
