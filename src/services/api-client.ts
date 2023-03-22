import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.SPOTIFY_AUTH_BASE_URL
});
