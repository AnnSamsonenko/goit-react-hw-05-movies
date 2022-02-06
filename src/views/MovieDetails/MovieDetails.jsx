import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/ApiMovies';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

export const MovieDetails = () => {
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
    <>
      <Link to="/">Go back</Link>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong, please try again</h2>}
      {!error && !loading && movie && <MovieInfo movie={movie} />}
      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Reviews</Link>
      <Outlet />
    </>
  );
};
