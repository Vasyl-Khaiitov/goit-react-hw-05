import { Link } from 'react-router-dom';

export default function MovieList({ items }) {
  console.log('Movies:', items);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link>
              <h2>{item.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
