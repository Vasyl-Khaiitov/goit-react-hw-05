import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../service/TmdbApi';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    async function fetchReviews() {
      const data = await getMovieReviews(movieId);
      setReviews(data);
    }

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <strong>Reviews:</strong>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={`${review.id}-${index}`}>
              <p>
                <strong>{review.author}:</strong> {review.content}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}
