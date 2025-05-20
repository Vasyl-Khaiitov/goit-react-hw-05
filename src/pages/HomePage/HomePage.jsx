import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getTrendingMovies } from '../../service/TmdbApi';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrendingMovies() {
      setLoading(true);
      try {
        const response = await getTrendingMovies(currentPage);

        setMovies((prevMovies) => [...prevMovies, ...response.results]);
        setTotalPages(response.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingMovies();
  }, [currentPage]);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <h1>Trending Movies</h1>
      {error && <p>❌ Помилка: {error}</p>}
      {loading && <p>🔄 Завантаження...</p>}
      {movies.length > 0 && <MovieList items={movies} />}
      {loading && currentPage > 1 && <p>🔄 Завантаження...</p>}

      {currentPage < totalPages && (
        <button type="button" onClick={handleLoadMore} disabled={loading}>
          Load more
        </button>
      )}
    </div>
  );
}
