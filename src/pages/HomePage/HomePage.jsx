import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../serwice/TmdbApi';
import MovieList from '../../components/MovieList/MovieList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataTrendingMovies() {
      setLoading(true);
      try {
        const response = await fetchTrendingMovies(currentPage); // ✅ Передаємо `currentPage`

        setMovies((prevMovies) => [...prevMovies, ...response.results]);
        setTotalPages(response.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDataTrendingMovies();
  }, [currentPage]);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1); // ✅ Збільшуємо `currentPage`
    }
  };

  return (
    <div>
      <h1>Trending Movies</h1>

      {error && <p>❌ Помилка: {error}</p>}
      {loading && <p>🔄 Завантаження...</p>}

      <MovieList items={movies} />

      {currentPage < totalPages && (
        <button type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
}
