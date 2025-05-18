import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviesDetails from '../../components/MovieDetails/MovieDetails';
import { getMovieDetails } from '../../service/TmdbApi';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDataDetails() {
      if (!movieId) return;

      setLoading(true);

      try {
        const dataDetails = await getMovieDetails(movieId);
        console.log(dataDetails);

        setMovieDetails(dataDetails);
      } catch (error) {
        setError(error.message || 'Could not get movie details.');
      } finally {
        setLoading(false);
      }
    }

    fetchDataDetails();
  }, [movieId]);
  return (
    <div>
      {error && <p>❌Error: {error}</p>}
      {loading && <p>🔄 Loading...</p>}
      {!loading && movieDetails ? <MoviesDetails movie={movieDetails} /> : null}
    </div>
  );
}
