export function MovieReviews({ movie }) {
  return (
    <div>
      <strong>Reviews:</strong>
      {movie.reviews.length > 0 ? (
        <ul>
          {movie.reviews.map((review, index) => (
            <li key={`${review.id}-${index}`}>
              <p>
                <strong>{review.author}:</strong> {review.content}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
}
