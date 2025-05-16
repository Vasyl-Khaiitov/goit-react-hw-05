import { useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import SearchMovies from '../../components/SearchMovies/SearchMovies';

export default function Movies() {
  useEffect(() => {}, []);

  return (
    <div>
      <SearchMovies />
      <MovieList />
    </div>
  );
}
