import { Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import Home from './pages/HomePage/HomePage';
import Movies from './pages/MoviesPage/MoviesPage';
import NotFound from './pages/NotFoundPage/NotFoundPage';
import MovieDetails from './pages/MovieDetailsPage/MovieDetailsPage';

export default function App() {
  return (
    <div>
      <AppHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
