import { lazy, Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'constants/GlobalStyle';

const createChunk = componentName => {
  return lazy(() =>
    import(`views/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const HomePage = createChunk('HomePage');
const MovieDetails = createChunk('MovieDetails');
const Cast = createChunk('Cast');
const Reviews = createChunk('Reviews');
const MoviesSearch = createChunk('MoviesSearch');

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Suspense fallback="">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesSearch />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
