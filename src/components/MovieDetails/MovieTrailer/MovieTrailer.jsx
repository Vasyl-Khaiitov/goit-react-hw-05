export default function MovieTrailer({ movie }) {
  return (
    <div>
      <strong>Trailer:</strong>
      {movie.videos.length > 0 ? (
        <ul>
          {movie.videos.map((video) => (
            <li key={video.id}>
              <a
                href={`https://www.youtube.com/watch?v=${video.key}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {video.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Not trailer video</p>
      )}
    </div>
  );
}
