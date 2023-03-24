import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../store/slices/spotifySlice';

function useSpotify() {
  const dispatch = useDispatch<any>();
  const { loading, error, token } = useSelector((state: any) => state.spotify);

  useEffect(() => {
    if (!token) {
      // check if token exists
      const hashParams = window.location.hash
        .substring(1)
        .split('&')
        .reduce(function (result: any, item: string) {
          var parts = item.split('=');
          result[parts[0]] = parts[1];
          return result;
        }, {});

      if (hashParams.access_token) {
        dispatch(setToken(hashParams.access_token));
      } else {
        const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
        const REDIRECT_URI: any = import.meta.env.VITE_REDIRECT_URI;
        const SCOPE = 'user-read-private%20user-read-email';
        const STATE = 'spotify-auth';

        const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&state=${STATE}`;

        window.location.href = url;
      }
    }
  }, [dispatch, token]);

  return { loading, error, token };
}

export default useSpotify;
