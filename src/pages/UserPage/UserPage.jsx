import Container from '../../components/Container/Container';
import UserData from 'components/User/UserData/UserData';
import PetsData from 'components/User/PetsData/PetsData';
import { UserWrapper } from './UserPage.styled';

const UserPage = () => {
  return (
    <Container>
      <UserWrapper>
        <UserData />
        <PetsData />
      </UserWrapper>
    </Container>
  );
};

export default UserPage;
