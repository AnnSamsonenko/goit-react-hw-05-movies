import styled from 'styled-components';

export const FilmsList = styled.ul`
  list-style-type: circle;
`;

export const FilmsItem = styled.li`
  font-size: 18px;
  line-height: 24px;
  color: #363853;
  transition: color 250ms ease;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  &:hover {
    color: #ff7a50;
  }
`;
