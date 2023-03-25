import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setError, setLoading } from '../store/slices/searchSlice';
import apiClient from '../services/api-client';

function useSearch<SearchState>(token: string, limit: number) {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: any) => state.search);
  const reduxSearchQuery = useSelector((state: any) => state.search.searchQuery);
  const [searchQuery, setSearchQuery] = useState(reduxSearchQuery);

  useEffect(() => {
    setSearchQuery(reduxSearchQuery);
  }, [reduxSearchQuery]);

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
    if (token && searchQuery) fetchData();
  }, [dispatch, token, searchQuery]);

  return { data, error, loading };
}

export default useSearch;
