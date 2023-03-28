import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setError,
  setLoading,
  setPlaylist,
  setCategory,
  SpecificCategoryState
} from '../store/slices/specificCategorySlice';
import apiClient from '../services/api-client';

function useSpecificCategory(
  token: string,
  categoryID: string | undefined
): SpecificCategoryState {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: any) => state.specificCategory);

  apiClient.defaults.headers.common = {
    Authorization: 'Bearer ' + token,
    'Content-Type': 'application/json'
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));

        const responseCategoryData = await apiClient.get(
          `/browse/categories/${categoryID}`
        );
        const responsePlaylistData = await apiClient.get(
          `/browse/categories/${categoryID}/playlists`,
          {
            params: {
              limit: 15
            }
          }
        );

        dispatch(setCategory(responseCategoryData.data));
        dispatch(setPlaylist(responsePlaylistData.data.playlists));

        dispatch(setLoading(false));
      } catch (error: any) {
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
      }
    };
    if (token) fetchData();
  }, [dispatch, token, categoryID]);

  return { data, error, loading };
}

export default useSpecificCategory;
