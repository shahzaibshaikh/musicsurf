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

function useSpecificArtist(
  token: string,
  artistID: string | undefined,
  country?: string,
  limit?: number
): SpecificArtistState {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: any) => state.specificArtist);

  apiClient.defaults.headers.common = {
    Authorization: 'Bearer ' + token,
    'Content-Type': 'application/json'
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));

        const responseArtistData = await apiClient.get(`/artists/${artistID}`);
        const responseRelatedArtistData = await apiClient.get(
          `/artists/${artistID}/related-artists`
        );
        const responseArtistAlbumData = await apiClient.get(
          `/artists/${artistID}/albums`,
          {
            params: {
              limit: limit
            }
          }
        );
        const responseArtistTrackData = await apiClient.get(
          `/artists/${artistID}/top-tracks`,
          {
            params: {
              country: country
            }
          }
        );

        dispatch(setArtistData(responseArtistData.data));
        dispatch(setRelatedArtistData(responseRelatedArtistData.data.artists));
        dispatch(setArtistAlbumsData(responseArtistAlbumData.data));
        dispatch(setArtistTrackData(responseArtistTrackData.data.tracks));

        dispatch(setLoading(false));
      } catch (error: any) {
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
      }
    };
    if (token) fetchData();
  }, [dispatch, token, artistID]);

  return { data, error, loading };
}

export default useSpecificArtist;
