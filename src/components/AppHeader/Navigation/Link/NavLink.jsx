import { NavLink } from 'react-router-dom';
import css from './NavLink.module.css';
import clsx from 'clsx';

const getActiveLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Link() {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={getActiveLinkClass}>
          <h2>Home</h2>
        </NavLink>
        <NavLink to="/movies" className={getActiveLinkClass}>
          <h2> Movies </h2>
        </NavLink>
      </nav>
    </div>
  );
}
