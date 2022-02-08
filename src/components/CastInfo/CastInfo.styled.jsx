import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -16px;
  margin-top: -16px;
`;

export const CastCard = styled.li`
  display: flex;
  padding: 10px;
  width: calc((100% - 16px * 3) / 3);
  margin-left: 16px;
  margin-top: 16px;
`;

export const CastImgWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

export const CastImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
