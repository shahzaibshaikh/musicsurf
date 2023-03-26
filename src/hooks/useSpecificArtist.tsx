import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setArtistData,
  setRelatedArtistData,
  setArtistAlbumsData,
  setArtistTrackData,
  setError,
  setLoading,
  SpecificArtistState
} from '../store/slices/specificArtistSlice';
import apiClient from '../services/api-client';
import { useParams } from 'react-router-dom';

function useSpecificArtist(token: string): SpecificArtistState {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: any) => state.specificArtist);
  const { artistID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await apiClient.get(`/artists/${artistID}`, {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        });
        dispatch(setArtistData(response.data));
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

export default useSpecificArtist;
