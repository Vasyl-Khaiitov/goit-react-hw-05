import { MovieCast } from './MovieCast/MovieCast';
import MovieDescriptions from './MovieDescriptions/MovieDescriptions';
import MovieDirectors from './MovieDirectors/MovieDirectors';
import MovieGenre from './MovieGenre/MovieGenre';
import { MovieReviews } from './MovieReviews/MovieReviews';
import MovieTitle from './MovieTitle/MovieTitle';
import MovieTrailer from './MovieTrailer/MovieTrailer';

const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

export default function MovieDetails({ movie }) {
  if (!movie) {
    return <p>❌ Фільм не знайдено</p>;
  }

  return (
    <div>
      <MovieTitle movie={movie} defaultImg={defaultImg} />
      <MovieDescriptions movie={movie} />
      <MovieGenre movie={movie} />
      <MovieTrailer movie={movie} />
      <MovieCast defaultImg={defaultImg} movie={movie} />
      <MovieDirectors movie={movie} />
      <MovieReviews movie={movie} />
    </div>
  );
}
