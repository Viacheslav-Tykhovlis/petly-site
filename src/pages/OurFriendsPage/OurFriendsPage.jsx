import { useEffect, useState } from 'react';
import Title from 'components/Title/Title';
import OurFriendsList from 'components/OurFriendsList/OurFriendsList';
import sponsors from '../../data/sponsors.json';

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(sponsors);
  }, [friends]);

  return (
    <>
      <Title>Our Friends</Title>

      <OurFriendsList friends={friends} />
    </>
  );
};

export default OurFriendsPage;
