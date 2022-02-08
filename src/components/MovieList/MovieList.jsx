import { Link, useLocation } from 'react-router-dom';
import { FilmsItem, FilmsList } from './MovieList.styled';
import propTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <FilmsList>
      {movies.map(movie => {
        return (
          <FilmsItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </FilmsItem>
        );
      })}
    </FilmsList>
  );
};

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};
