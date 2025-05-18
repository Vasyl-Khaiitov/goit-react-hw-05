import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const myACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${myACCESS_TOKEN}`, // Обов’язковий префікс Bearer для доступу
  },
});

// 🔥 1. Отримати список трендових фільмів
export async function fetchTrendingMovies(page) {
  try {
    const response = await apiClient.get('/trending/movie/day', {
      params: { page },
    });
    console.log(response.data);

    return response.data; // Повертаємо лише масив фільмів
  } catch (error) {
    console.error('Помилка при отриманні трендових фільмів:', error);
    throw error;
  }
}

// 🔎 2. Пошук фільмів за ключовим словом
export async function searchMovies(query) {
  try {
    const response = await apiClient.get('/search/movie', {
      params: { query },
    });
    return response.data.results; // Повертаємо список фільмів
  } catch (error) {
    console.error('Помилка при пошуку фільмів:', error);
    throw error;
  }
}

// 🎬 3. Отримати деталі фільму з підзапитами
export async function fetchMovieDetails(movieId) {
  try {
    const response = await apiClient.get(`/movie/${movieId}`, {
      params: { append_to_response: 'videos,reviews,credits' }, // Додаємо відео та відгуки
    });
    return response.data; // Повертаємо повну інформацію про фільм
  } catch (error) {
    console.error(`Помилка при отриманні деталей фільму ID ${movieId}:`, error);
    throw error;
  }
}
