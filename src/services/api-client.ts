import axios from 'axios';

export default axios.create({
  baseURL: process.env.SPOTIFY_AUTH_BASE_URL
});
