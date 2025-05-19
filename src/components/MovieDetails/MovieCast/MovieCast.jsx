import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';
import { getMovieCast } from '../../../service/TmdbApi';

const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'; // ✅ Дефолтне фото

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    async function fetchCast() {
      const data = await getMovieCast(movieId);
      setCast(data);
    }

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <strong>Cast:</strong>
      {cast.length > 0 ? (
        <ul className={css.list_movie_cast}>
          {cast.map((actor, index) => (
            <li key={`${actor.id}-${index}`}>
              <img
                src={actor.profile || defaultImg}
                alt={actor.name}
                width="80"
              />
              <span className={css.list_item_text}>
                {' '}
                {actor.name} ({actor.character})
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available.</p>
      )}
    </div>
  );
}
