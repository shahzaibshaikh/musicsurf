import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setError, setLoading, setToken } from '../store/slices/spotifySlice';

function useSpotify() {
  const dispatch = useDispatch<any>();
  const { loading, error, token } = useSelector((state: any) => state.spotify);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));

        const response = await axios.get(import.meta.env.VITE_AUTH_BASE_URL);

        dispatch(setToken(response.data.access_token));

        dispatch(setLoading(false));
      } catch (error: any) {
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
      }
    };
    if (!token) fetchData();
  }, [dispatch, token]);

  return { loading, error, token };
}

export default useSpotify;
