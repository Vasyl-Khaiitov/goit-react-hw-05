import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import css from './App.module.css';

const Home = lazy(() => import('../../pages/HomePage/HomePage'));
const Movies = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage'),
);
const NotFound = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

const MovieCast = lazy(() => import('../MovieDetails/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('../MovieDetails/MovieReviews/MovieReviews'),
);
const MovieTrailer = lazy(() =>
  import('../MovieDetails/MovieTrailer/MovieTrailer'),
);
// const MovieDirectors = lazy(() =>
//   import('../MovieDetails/MovieDirectors/MovieDirectors'),
// );

export default function App() {
  return (
    <div className={css.container}>
      <AppHeader />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="trailer" element={<MovieTrailer />} />
            <Route path="cast" element={<MovieCast />} />
            {/* <Route path="directors" element={<MovieDirectors />} /> */}
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
