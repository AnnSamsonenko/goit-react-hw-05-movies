import {
  ReviewItem,
  ReviewList,
  ReviewTitle,
  ReviewText,
} from './ReviewList.styled';
import propTypes from 'prop-types';

export const ReviewsList = ({ reviews }) => {
  return (
    <ReviewList>
      {reviews.map(({ id, author, content }) => {
        return (
          <ReviewItem key={id}>
            <ReviewTitle>Author: {author}</ReviewTitle>
            <ReviewText>{content}</ReviewText>
          </ReviewItem>
        );
      })}
    </ReviewList>
  );
};

ReviewsList.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object).isRequired,
};
