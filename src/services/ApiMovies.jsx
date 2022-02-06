import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c3a4cb8038ee207f234d0a08ae3fa54d';

async function fetchMovies(url = '', config = {}) {
  const response = await axios.get(url, config);
  return response.data;
}

export function fetchTrending() {
  return fetchMovies(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function fetchByQuery(query) {
  return fetchMovies(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&query=${query}`
  );
}

export function fetchMovieById(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchActors(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchReviews(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&`
  );
}
