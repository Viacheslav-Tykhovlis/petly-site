import { Outlet } from 'react-router-dom';
import { HomeTitle } from '../../components/MainTitle/MainTitle';
import { Container } from '../../components/Container/Container';

const UserPage = () => {
  return (
    <Container>
      <HomeTitle />
      <Outlet />
    </Container>
  );
};

export default UserPage;
