import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setError, setLoading } from '../store/slices/categorySlice';
import apiClient from '../services/api-client';

function useCategories<CategoryState>(token: string) {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: any) => state.categories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await apiClient.get('/browse/categories', {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          },
          params: {
            limit: 50
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

export default useCategories;
