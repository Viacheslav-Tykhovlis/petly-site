import { useEffect, useState } from 'react';
import Title from 'components/Title/Title';
import OurFriendsList from 'components/OurFriendsList/OurFriendsList';
import { fetchFriends } from 'services/getFriends';
import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';

const OurFriendsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const data = await fetchFriends();
        setFriends(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <Section>
      <Title>Our Friends</Title>

      {isLoading ? <Loader /> : <OurFriendsList friends={friends} />}
    </Section>
  );
};

export default OurFriendsPage;
