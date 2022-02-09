import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/ApiMovies';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';

import {
  LinksWrapper,
  RouteLink,
  RouteLinkButton,
} from 'components/MovieInfo/MovieInfo.styled';

export const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setError('');
        const movie = await fetchMovieById(movieId);
        const updatedMovie = formatData(movie);
        setMovie(updatedMovie);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const formatData = movie => {
      const updatedMovie = {
        poster_path: movie.poster_path
          ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
          : 'https://sd.keepcalms.com/i/keep-calm-poster-not-found.png',
        release_date: movie.release_date.slice(0, 4),
        vote_average: movie.vote_average * 10,
        genres: movie.genres.map(genre => genre.name),
        overview: movie.overview,
        title: movie.title,
        id: movie.id,
      };

      return updatedMovie;
    };

    fetch();
  }, [movieId]);

  return (
    <Container>
      <RouteLinkButton to={location?.state?.from ?? '/'}>
        Go back
      </RouteLinkButton>
      {loading && <Loader />}
      {error && <h2>Something went wrong, please try again</h2>}
      {!error && !loading && movie && <MovieInfo movie={movie} />}
      <hr />
      <LinksWrapper>
        <RouteLink state={{ from: location?.state?.from }} to={'cast'}>
          Cast
        </RouteLink>
        <RouteLink state={{ from: location?.state?.from }} to={'reviews'}>
          Reviews
        </RouteLink>
      </LinksWrapper>
      <Outlet />
    </Container>
  );
};
