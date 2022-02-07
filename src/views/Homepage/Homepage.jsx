import { useState, useEffect } from 'react';
import { fetchTrending } from '../../services/ApiMovies';
import { MovieList } from 'components/MovieList/MovieList';
import { SectionHeading } from 'components/SectionHeading/SectionHeading';
import { Container } from 'components/Container/Container';

export const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        setError('');
        const { results } = await fetchTrending();
        const updatedData = formatData(results);
        setMovies(updatedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    const formatData = data => {
      return data.map(item => ({ id: item.id, title: item.title }));
    };

    fetch();
  }, []);

  return (
    <Container>
      {loading && <h2>Loading...</h2>}
      {movies && !loading && !error && (
        <>
          <SectionHeading text={'Trending today'} />
          <MovieList movies={movies} />
        </>
      )}
      {error && <h2>Something went wrong, please try again</h2>}
    </Container>
  );
};
