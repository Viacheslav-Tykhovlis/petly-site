import Logout from 'components/User/Logout/Logout';
import UserDataItem from 'components/User/UserDataItem/UserDataItem';
import { ContainerUser, BoxUserData } from './UserData.styled';
import TitleUser from '../TitleUser/TitleUser';

const UserData = () => {
  return (
    <BoxUserData>
      <TitleUser>My information:</TitleUser>
      <ContainerUser>
        <UserDataItem />
        <Logout />
      </ContainerUser>
    </BoxUserData>
  );
};

export default UserData;
