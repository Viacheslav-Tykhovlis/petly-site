import Logout from 'components/User/Logout/Logout';
import UserDataItem from 'components/User/UserDataItem/UserDataItem';
import { ContainerUser, BoxUserData } from './UserData.styled';
import TitleUser from '../TitleUser/TitleUser';

const UserData = ({ user }) => {
  return (
    <BoxUserData>
      <TitleUser>My information:</TitleUser>
      <ContainerUser>
        <UserDataItem user={user} />
        <Logout />
      </ContainerUser>
    </BoxUserData>
  );
};

export default UserData;
