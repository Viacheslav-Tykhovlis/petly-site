import Logout from 'components/User/Logout/Logout';
import Container from 'components/Container/Container';
import UserDataItem from 'components/User/UserDataItem/UserDataItem';
import { Title, ContainerUser } from './UserData.styled';

const UserData = () => {
  return (
    <Container>
      <Title>My information:</Title>
      <ContainerUser>
        <UserDataItem />
        <Logout />
      </ContainerUser>
    </Container>
  );
};

export default UserData;
