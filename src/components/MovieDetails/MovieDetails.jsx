import MovieTitle from './MovieTitle/MovieTitle';
import MovieDescriptions from './MovieDescriptions/MovieDescriptions';
import MovieGenre from './MovieGenre/MovieGenre';

const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image.jpg';

export default function MovieDetails({ movie }) {
  if (!movie) {
    return <p>❌ Фільм не знайдено</p>;
  }

  return (
    <div>
      <MovieTitle movie={movie} defaultImg={defaultImg} />
      <MovieDescriptions movie={movie} />
      <MovieGenre movie={movie} />
    </div>
  );
}
