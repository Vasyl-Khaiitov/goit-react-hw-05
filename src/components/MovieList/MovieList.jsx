import { Link } from 'react-router-dom';

export default function MovieList({ items }) {
  console.log(`Завантажено ${items.length} фільмів.`);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={`${item.id}-${index}`}>
            <Link to={`/movies/${item.id}`}>
              <h2>{item.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
