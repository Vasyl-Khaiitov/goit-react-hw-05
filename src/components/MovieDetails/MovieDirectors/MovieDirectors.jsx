import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDirectors } from '@service/TmdbApi';

export default function MovieDirectors() {
  const { movieId } = useParams();
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    async function fetchDirectors() {
      const data = await getMovieDirectors(movieId);
      setDirectors(data);
    }

    fetchDirectors();
  }, [movieId]);

  return (
    <div>
      <strong>Directors:</strong>
      {directors.length > 0 ? (
        <ul>
          {directors.map((director, index) => (
            <li key={`${director.id}-${index}`}>{director.name}</li>
          ))}
        </ul>
      ) : (
        <p>No directors found.</p>
      )}
    </div>
  );
}
