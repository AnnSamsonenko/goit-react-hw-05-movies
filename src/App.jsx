import { AppBar } from 'components/AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'views/Homepage/Homepage';
import { MovieDetails } from 'views/MovieDetails/MovieDetails';
import { Cast } from 'views/Cast/Cast';

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<h2>Search</h2>} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<h2>Review info</h2>} />
        </Route>
      </Routes>
    </>
  );
};
