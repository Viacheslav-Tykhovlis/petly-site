import Logout from 'components/User/Logout/Logout';
import UserDataItem from 'components/User/UserDataItem/UserDataItem';
import { ContainerUser, BoxUserData } from './UserData.styled';
import TitleUser from '../TitleUser/TitleUser';
// import { useSelector } from 'react-redux';
// import { fetchUser } from 'services/getUser';
// import { useEffect, useState } from 'react';

const UserData = ({ user }) => {
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const data = await fetchUser();
  //       setUser(data.user);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   })();
  // }, []);

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
