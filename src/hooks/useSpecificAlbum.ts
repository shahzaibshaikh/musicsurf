import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setError, setLoading } from '../store/slices/specificAlbumSlice';
import apiClient from '../services/api-client';
import { useParams } from 'react-router-dom';

function useAlbums(token: string) {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: any) => state.albums);
  const { albumID } = useParams();

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

export default useAlbums;
