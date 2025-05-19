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
const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

export async function getMovieDetails(movieId) {
  try {
    const response = await apiClient.get(`/movie/${movieId}`);
    const movieData = response.data;

    return {
      id: movieData.id,
      title: movieData.title,
      overview: movieData.overview,
      releaseDate: movieData.release_date,
      rating: movieData.vote_average,
      poster: movieData.poster_path
        ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
        : defaultImg,
      genres: movieData.genres.map((genre) => genre.name),
    };
  } catch (error) {
    console.error(`Error retrieving movie ID details ${movieId}:`, error);
    return null;
  }
}

export async function getMovieVideos(movieId) {
  try {
    const response = await apiClient.get(`/movie/${movieId}/videos`);
    return response.data.results || [];
  } catch (error) {
    console.error(`Error fetching movie videos:`, error);
    return [];
  }
}

export async function getMovieCast(movieId) {
  try {
    const response = await apiClient.get(`/movie/${movieId}/credits`);
    return response.data.cast.map((actor) => ({
      id: actor.id,
      name: actor.name,
      character: actor.character,
      profile: actor.profile_path
        ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
        : null,
    }));
  } catch (error) {
    console.error(`Error fetching movie cast:`, error);
    return [];
  }
}

export async function getMovieDirectors(movieId) {
  try {
    const response = await apiClient.get(`/movie/${movieId}/credits`);
    return response.data.crew.filter((member) => member.job === 'Director');
  } catch (error) {
    console.error(`Error fetching movie directors:`, error);
    return [];
  }
}

export async function getMovieReviews(movieId) {
  try {
    const response = await apiClient.get(`/movie/${movieId}/reviews`);
    return response.data.results || [];
  } catch (error) {
    console.error(`Error fetching movie reviews:`, error);
    return [];
  }
}
