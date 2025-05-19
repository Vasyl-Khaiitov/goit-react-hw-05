import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '@service/TmdbApi';
import MovieList from '../../components/MovieList/MovieList';
import SearchMovies from '../../components/SearchMovies/SearchMovies';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearching, setIsSearching] = useState(false);

  const query = searchParams.get('query') ?? '';

  const changeSearchQuery = (searchValue) => {
    const newQuery = searchValue.trim();
    setIsSearching(true);
    setSearchParams({ query: newQuery });
  };

  useEffect(() => {
    async function fetchDataMovies() {
      if (!query) {
        setMovies([]);
        return;
      }

      setError(false);
      setLoading(true);

      try {
        const data = await getSearchMovies(query);
        setMovies(data);
      } catch (error) {
        setError(error.message || 'Failed to load data.');
      } finally {
        setLoading(false);
      }
    }

    fetchDataMovies();
  }, [query]);

  const isMoviesEmpty = movies.length === 0 && isSearching && !loading;

  return (
    <div>
      <SearchMovies onSubmit={changeSearchQuery} />
      {error && <p>❌ Error:: {error}</p>}
      {loading && isSearching && <p>🔄 Loading...</p>}
      <MovieList items={movies} />
      {isMoviesEmpty && <strong>No results</strong>}
    </div>
  );
}
