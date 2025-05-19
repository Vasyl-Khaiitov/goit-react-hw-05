import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';

import MovieCast from '../MovieDetails/MovieCast/MovieCast';
import MovieReviews from '../MovieDetails/MovieReviews/MovieReviews';
import MovieTrailer from '../MovieDetails/MovieTrailer/MovieTrailer';
import MovieDirectors from '../MovieDetails/MovieDirectors/MovieDirectors';
import css from './App.module.css';

const Home = lazy(() => import('../../pages/HomePage/HomePage'));
const Movies = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage'),
);
const NotFound = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

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
            <Route path="directors" element={<MovieDirectors />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
