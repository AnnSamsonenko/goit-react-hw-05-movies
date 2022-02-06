import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'services/ApiMovies';
import { CastInfo } from 'components/CastInfo/CastInfo';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setError('');
        const { cast } = await fetchActors(movieId);
        const updatedCast = formatData(cast);
        setCast(updatedCast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const formatData = cast => {
      return cast.map(actor => ({
        id: actor.id,
        name: actor.name,
        character: actor.character,
        profile_path: actor.profile_path
          ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
          : 'https://cdn.shopify.com/s/files/1/0605/0195/0643/products/calm-black__17549_1200x1200.jpg?v=1632960018',
      }));
    };

    fetch();
  }, [movieId]);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong, please try again</h2>}
      {!error && !loading && cast && <CastInfo cast={cast} />}
    </>
  );
};
