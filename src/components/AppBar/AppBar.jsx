import { Container } from 'components/Container/Container';
import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <header>
        <Container>
          <Navigation />
        </Container>
      </header>
      <Outlet />
    </>
  );
};
