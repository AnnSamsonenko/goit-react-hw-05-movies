import { NavList, NavItem, RouteLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <RouteLink to="/">Home</RouteLink>
        </NavItem>
        <NavItem>
          <RouteLink to="/movies">Movies</RouteLink>
        </NavItem>
      </NavList>
    </nav>
  );
};
