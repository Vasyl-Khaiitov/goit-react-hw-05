export default function MovieDirectors({ movie }) {
  return (
    <div>
      <strong>Directors:</strong>
      {movie.credits.crew.filter((member) => member.job === 'Director').length >
      0 ? (
        <ul>
          {movie.credits.crew
            .filter((member) => member.job === 'Director')
            .map((director, index) => (
              <li key={`${director.id}-${index}`}>{director.name}</li>
            ))}
        </ul>
      ) : (
        <p>No information about the director</p>
      )}
    </div>
  );
}
