import { Container } from 'components/Container/Container';
import { Navigation } from 'components/Navigation/Navigation';
// import { Outlet } from 'react-router-dom';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      {/* <Outlet /> */}
    </>
  );
};
