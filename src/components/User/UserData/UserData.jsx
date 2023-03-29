import Logout from 'components/User/Logout/Logout';
import UserDataItem from 'components/User/UserDataItem/UserDataItem';
import { ContainerUser, BoxUserData } from './UserData.styled';
import TitleUser from '../TitleUser/TitleUser';
import { useState } from 'react';

const UserData = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  return (
    <BoxUserData>
      <TitleUser>My information:</TitleUser>
      <ContainerUser>
        <UserDataItem isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
        <Logout />
      </ContainerUser>
    </BoxUserData>
  );
};

export default UserData;
