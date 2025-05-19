import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import clsx from 'clsx';

const getActiveLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function MovieList({ items }) {
  const location = useLocation();

  return (
    <ul>
      {items.map((movie, index) => (
        <li key={`${movie.id}-${index}`} className={css.list_item_list}>
          <NavLink
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={getActiveLinkClass}
          >
            <span className={css.title}>{movie.title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
