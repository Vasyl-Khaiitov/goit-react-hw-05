import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import SearchMovies from '../../components/SearchMovies/SearchMovies';
import { fetchMovieDetails, searchMovies } from '../../serwice/TmdbApi';
import { useDebounce } from 'use-debounce';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieDetails, setMovieDetails] = useState(null); // Додаємо новий стейт

  const [debouncedQuery] = useDebounce(searchQuery, 500);

  useEffect(() => {
    async function fetchDataMovies() {
      if (!debouncedQuery) return;

      setError(false);
      setLoading(true);

      try {
        const data = await searchMovies(debouncedQuery, currentPage);

        setMovies((prevMoviesData) => [...prevMoviesData, ...data]);
      } catch (error) {
        setError(error.message || 'Не вдалося завантажити дані.');
      } finally {
        setLoading(false);
      }
    }

    fetchDataMovies();
  }, [debouncedQuery, currentPage]);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchDataId() {
      if (!movieId) return;

      setError(false);
      setLoading(true);

      try {
        const dataDetails = await fetchMovieDetails(movieId);
        setMovieDetails(dataDetails); // ✅ Зберігаємо отримані дані
      } catch (error) {
        setError(error.message || 'Не вдалося отримати деталі фільму.');
      } finally {
        setLoading(false);
      }
    }

    fetchDataId();
  }, [movieId]);

  useEffect(() => {
    const queryFromParams = searchParams.get('query') ?? '';
    setSearchQuery(queryFromParams);

    if (queryFromParams) {
      setMovies([]); // Очищуємо попередній список
      setCurrentPage(1);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!searchQuery) return;

    setSearchParams({ query: searchQuery }); // Оновлюємо URL, якщо є значення
  }, [searchQuery]);

  function handleSearch(query) {
    setMovies([]);
    setSearchQuery(query);
    setCurrentPage(1);
    if (query) {
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }
  }

  const isMoviesEmpty = movies.length === 0;

  return (
    <div>
      <SearchMovies onSubmit={handleSearch} />
      {error && <p>❌ Помилка: {error}</p>}
      {loading && <p>🔄 Завантаження...</p>}
      <MovieList movies={movies} />
      {isMoviesEmpty && <strong>No results</strong>}
    </div>
  );
}
