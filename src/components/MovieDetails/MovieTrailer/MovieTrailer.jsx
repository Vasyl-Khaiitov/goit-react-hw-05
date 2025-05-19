import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieTrailer.module.css';
import { getMovieVideos } from '@service/TmdbApi';

export default function MovieTrailer() {
  const { movieId } = useParams();
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    async function fetchTrailers() {
      const data = await getMovieVideos(movieId);
      setTrailers(data);
    }

    fetchTrailers();
  }, [movieId]);

  return (
    <div>
      <strong>Trailer:</strong>
      {trailers.length > 0 ? (
        <ul>
          {trailers.map((video, index) => (
            <li key={`${video.id}-${index}`}>
              <a
                href={`https://www.youtube.com/watch?v=${video.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className={css.link_trailer}
              >
                {video.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No trailers available.</p>
      )}
    </div>
  );
}
