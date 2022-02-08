import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieInfoWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
`;

export const MovieInfoContentWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
`;

export const MovieInfoPoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 36px;
  line-height: 40px;
  text-transform: capitalize;
  color: #363853;
`;

export const MovieSubtitle = styled.h4`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #363853;
`;

export const MovieInfoText = styled.p`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #363853;
  opacity: 0.9;
`;

export const LinksWrapper = styled.div`
  width: fit-content;
  padding: 20px 0;
  margin: 0 auto;
`;

export const RouteLink = styled(Link)`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #363853;
  transition: color 250ms ease;
  &:not(:last-child) {
    margin-right: 16px;
  }
  &:hover {
    color: #ff7a50;
  }
`;

export const RouteLinkButton = styled(Link)`
  margin-top: 10px;
  display: inline-block;
  padding: 8px 23px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  background-color: #ff7a50;
  box-shadow: 0px 22px 40px rgba(255, 104, 56, 0.19);
  border-radius: 30px 30px 1px 30px;
`;
