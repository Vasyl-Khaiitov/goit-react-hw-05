import { Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import Home from './pages/HomePage/HomePage';
import Movies from './pages/MoviesPage/MoviesPage';

export default function App() {
  return (
    <div>
      <AppHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}
