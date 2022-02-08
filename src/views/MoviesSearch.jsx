import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchByQuery } from 'services/ApiMovies';
import { MovieList } from 'components/MovieList/MovieList';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';

export const MoviesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query && query !== '') {
      const fetch = async () => {
        try {
          setLoading(true);
          setError('');
          const { results } = await fetchByQuery(query);
          const updatedMovies = formatData(results);
          setMovies(updatedMovies);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      const formatData = data => {
        return data.map(item => ({ id: item.id, title: item.title }));
      };

      fetch();
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />

      {loading && <Loader />}
      {error && <h2>Something went wrong, please try again</h2>}
      {movies && !loading && !error && <MovieList movies={movies} />}
      {movies && !loading && !error && movies.length === 0 && (
        <h3>Nothing found with such query</h3>
      )}
    </Container>
  );
};
