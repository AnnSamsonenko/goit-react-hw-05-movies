import { AppBar } from 'components/AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'views/Homepage/Homepage';
import { MovieDetails } from 'views/MovieDetails/MovieDetails';
import { Cast } from 'views/Cast/Cast';
import { Reviews } from 'views/Reviews/Reviews';
import { MoviesSearch } from 'views/MoviesSearch/MoviesSearch';
import { GlobalStyle } from 'constants/GlobalStyle';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesSearch />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
