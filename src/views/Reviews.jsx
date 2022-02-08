import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/ApiMovies';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setError('');
        const { results } = await fetchReviews(movieId);
        const updatedReviews = formatData(results);
        setReviews(updatedReviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const formatData = reviews => {
      return reviews.map(review => ({
        id: review.id,
        author: review.author,
        content: review.content,
      }));
    };

    fetch();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <h2>Something went wrong, please try again</h2>}
      {!error && !loading && reviews && reviews.length > 0 && (
        <ReviewsList reviews={reviews} />
      )}
      {!error && !loading && reviews && reviews.length === 0 && (
        <h3>Sorry, no reviews for this movie</h3>
      )}
    </>
  );
};
