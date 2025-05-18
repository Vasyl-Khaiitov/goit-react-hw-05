export default function MovieGenre({ movie }) {
  return (
    <div>
      <strong>Genre:</strong>
      {movie.genres.length > 0 ? (
        <ul>
          {movie.genres.map((genre, index) => (
            <li key={`${genre}-${index}`}>{genre}</li>
          ))}
        </ul>
      ) : (
        <p>Not genre</p>
      )}
    </div>
  );
}
