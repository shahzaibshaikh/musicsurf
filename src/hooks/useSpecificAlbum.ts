import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setData,
  setError,
  setLoading,
  SpecificAlbumState
} from '../store/slices/specificAlbumSlice';
import apiClient from '../services/api-client';

function useSpecificAlbums(
  token: string,
  albumID: string | undefined
): SpecificAlbumState {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: any) => state.specificAlbum);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await apiClient.get(`/albums/${albumID}`, {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        });
        dispatch(setData(response.data));
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

export default useSpecificAlbums;
