import UserData from 'components/User/UserData/UserData';
import PetsData from 'components/User/PetsData/PetsData';
import { UserWrapper } from './UserPage.styled';
import { fetchUser } from 'redux/users/operations';
import { useEffect } from 'react';
import { getStateUsers } from 'redux/users/selectors';
import { useDispatch, useSelector } from 'react-redux';

const UserPage = () => {
  const dispatch = useDispatch();

  const user = useSelector(getStateUsers);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <UserWrapper>
      <UserData user={user} />
      <PetsData />
    </UserWrapper>
  );
};

export default UserPage;
