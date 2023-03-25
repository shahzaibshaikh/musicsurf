import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setError, setLoading } from '../store/slices/searchSlice';
import apiClient from '../services/api-client';

function useSearch<SearchState>(token: string, limit: number, searchQuery: string) {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: any) => state.search);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await apiClient.get('/search?include_external=audio', {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          },
          params: {
            limit: limit,
            q: searchQuery,
            type: 'album,track,artist'
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

export default useSearch;
