import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const myACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${myACCESS_TOKEN}`,
  },
});

export async function getTrendingMovies(page) {
  try {
    const response = await apiClient.get('/trending/movie/day', {
      params: { page },
    });
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error retrieving trending movies:', error);
    throw error;
  }
}

export async function getSearchMovies(query) {
  try {
    const response = await apiClient.get('/search/movie', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error while searching for movies:', error);
    throw error;
  }
}
export async function getMovieDetails(movieId) {
  try {
    const response = await apiClient.get(`/movie/${movieId}`, {
      params: { append_to_response: 'videos,reviews,credits' },
    });

    const movieData = response.data;

    return {
      id: movieData.id,
      title: movieData.title,
      overview: movieData.overview,
      releaseDate: movieData.release_date,
      rating: movieData.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`, // ✅ Додаємо постер фільму
      genres: movieData.genres.map((genre) => genre.name),
      videos: movieData.videos?.results || [],
      reviews: movieData.reviews?.results || [],
      credits: {
        cast:
          movieData.credits?.cast.map((actor) => ({
            id: actor.id,
            name: actor.name,
            character: actor.character,
            profile: actor.profile_path
              ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
              : null,
          })) || [],
        crew: movieData.credits?.crew || [],
      },
    };
  } catch (error) {
    console.error(`Error retrieving movie ID details ${movieId}:`, error);
    return null;
  }
}
