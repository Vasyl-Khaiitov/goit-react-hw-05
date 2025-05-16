import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const myACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

const options = {
  baseURL: API_BASE_URL,

  headers: {
    Authorization: myACCESS_TOKEN,
  },
};

export default async function fetchMovies() {
  try {
    const response = await axios.get(API_BASE_URL, options);
    return response.data;
  } catch (error) {
    console.error('Problems respons data', error);
    throw error;
  }
}
