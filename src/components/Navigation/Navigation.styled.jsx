import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  width: fit-content;
  margin: 0 auto;
`;
export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;
export const RouteLink = styled(NavLink)`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #363853;
  transition: color 250ms linear;
  &.active {
    color: #ff6838;
  }
`;
