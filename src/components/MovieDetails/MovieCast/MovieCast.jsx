export function MovieCast({ movie, defaultImg }) {
  return (
    <div>
      <strong>Cast:</strong>
      {movie.credits.cast.length > 0 ? (
        <ul>
          {movie.credits.cast.map((actor, index) => (
            <li key={`${actor.id}-${index}`}>
              <img
                src={actor.profile || defaultImg}
                alt={actor.name}
                width="80"
              />
              {actor.name} ({actor.character})
            </li>
          ))}
        </ul>
      ) : (
        <p>No information about the actors</p>
      )}
    </div>
  );
}
