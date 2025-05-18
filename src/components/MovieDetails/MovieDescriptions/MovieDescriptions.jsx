export default function MovieDescriptions({ movie }) {
  return (
    <div>
      <p>
        <strong>Rating:</strong> ⭐ {movie.rating}
      </p>
      <p>
        <strong>Release Date:</strong> {movie.releaseDate}
      </p>
      <p>
        <strong>Owerview:</strong> {movie.overview}
      </p>
    </div>
  );
}
