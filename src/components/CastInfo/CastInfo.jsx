import { CastList, CastCard, CastImgWrapper, CastImg } from './CastInfo.styled';
import propTypes from 'prop-types';

export const CastInfo = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ profile_path, character, name, id }) => (
        <CastCard key={id}>
          <CastImgWrapper>
            <CastImg src={profile_path} alt={name} />
          </CastImgWrapper>
          <div>
            <h4>{name}</h4>
            <p>
              Character:
              <br /> {character}
            </p>
          </div>
        </CastCard>
      ))}
    </CastList>
  );
};

CastInfo.propTypes = {
  cast: propTypes.arrayOf(propTypes.object).isRequired,
};
