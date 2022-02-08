import { BallTriangle } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <BallTriangle
        heigth="50"
        width="50"
        color="#ff6838"
        ariaLabel="loading"
      />
    </LoaderWrapper>
  );
};
