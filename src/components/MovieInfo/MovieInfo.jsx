import {
  MovieInfoWrapper,
  MovieInfoContentWrapper,
  MovieTitle,
  MovieSubtitle,
  MovieInfoPoster,
  MovieInfoText,
} from './MovieInfo.styled';

import propTypes from 'prop-types';

export const MovieInfo = ({ movie }) => {
  return (
    <MovieInfoWrapper>
      <MovieInfoContentWrapper>
        <MovieInfoPoster src={movie.poster_path} alt={movie.title} />
      </MovieInfoContentWrapper>
      <MovieInfoContentWrapper>
        <MovieTitle>
          {movie.title} ({movie.release_date})
        </MovieTitle>
        <MovieInfoText>User score: {movie.vote_average}%</MovieInfoText>
        <MovieSubtitle>Overview</MovieSubtitle>
        <MovieInfoText>{movie.overview}</MovieInfoText>
        <MovieSubtitle>Genres</MovieSubtitle>
        <MovieInfoText>{movie.genres.join(', ')}</MovieInfoText>
      </MovieInfoContentWrapper>
    </MovieInfoWrapper>
  );
};

MovieInfo.propTypes = {
  movie: propTypes.object.isRequired,
};
