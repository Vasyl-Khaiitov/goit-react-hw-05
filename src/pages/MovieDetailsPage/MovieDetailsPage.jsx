import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Outlet, NavLink } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import { getMovieDetails } from '@service/TmdbApi';
import clsx from 'clsx';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || '/movies');

  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const backLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.Active);
  };

  useEffect(() => {
    async function fetchDataDetails() {
      if (!movieId) return;
      setLoading(true);

      try {
        const dataDetails = await getMovieDetails(movieId);
        setMovieDetails(dataDetails);
      } catch (error) {
        setError(error.message || 'Could not get movie details.');
      } finally {
        setLoading(false);
      }
    }

    fetchDataDetails();
  }, [movieId]);

  return (
    <div>
      <NavLink to={backLinkRef.current} className={backLinkClass}>
        ⬅ Go Back
      </NavLink>

      {error && <p>❌ Error: {error}</p>}
      {loading && <p>🔄 Loading...</p>}
      {!loading && movieDetails ? <MovieDetails movie={movieDetails} /> : null}

      <div>
        <h3>Additional information</h3>
        <nav>
          <ul className={css.nav_list_details_page}>
            <li>
              <NavLink to="trailer" className={buildLinkClass}>
                Trailer |
              </NavLink>
            </li>
            <li>
              <NavLink to="cast" className={buildLinkClass}>
                Cast |
              </NavLink>
            </li>
            <li>
              <NavLink to="directors" className={buildLinkClass}>
                Directors |
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" className={buildLinkClass}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}
