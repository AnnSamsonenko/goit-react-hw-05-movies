import { useState, useEffect } from 'react';
import { fetchTrending } from '../../services/ApiMovies';
import { MovieList } from 'components/MovieList/MovieList';

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
    <>
      {loading && <h2>Loading...</h2>}
      {movies && !loading && (
        <>
          <h2>Trendyng today</h2>
          <MovieList movies={movies} />
        </>
      )}
      {error && <h2>Something went wrong, please try again</h2>}
    </>
  );
};
