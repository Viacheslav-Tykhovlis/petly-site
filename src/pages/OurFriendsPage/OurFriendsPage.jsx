import { useEffect, useState } from 'react';
import Title from 'components/Title/Title';
import OurFriendsList from 'components/OurFriendsList/OurFriendsList';
import { fetchFriends } from 'services/getFriends';
import Section from 'components/Section/Section';

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const data = await fetchFriends();
        setFriends(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <Section>
      <Title>Our Friends</Title>

      <OurFriendsList friends={friends} />
    </Section>
  );
};

export default OurFriendsPage;
