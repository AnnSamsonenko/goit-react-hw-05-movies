import styled from 'styled-components';

export const ReviewList = styled.ul`
  padding: 40px 0;
`;

export const ReviewItem = styled.li`
  padding: 26px;
  border-radius: 53px 5px 53px 5px;
  border: 1px solid rgba(54, 56, 83, 0.1);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ReviewTitle = styled.h4`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #363853;
`;

export const ReviewText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #363853;
  opacity: 0.9;
`;
