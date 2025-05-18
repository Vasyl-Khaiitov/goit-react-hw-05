import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../serwice/TmdbApi';
import MovieList from '../../components/MovieList/MovieList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    async function fetchDataTredingMovies() {
      try {
        const response = await fetchTrendingMovies(currentPage);
        setMovies((prevMovies) => [...prevMovies, ...response.results]);
      } catch (error) {
        console.log(' error', error);
      }
    }
    fetchDataTredingMovies();
  }, [currentPage]);

  const handleClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <h1>Trending Movies</h1>

      <MovieList items={movies} currentPage={currentPage} />

      <button type="buttom" onClick={handleClick}>
        Load more
      </button>
    </div>
  );
}
