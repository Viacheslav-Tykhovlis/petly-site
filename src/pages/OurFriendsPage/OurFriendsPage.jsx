import { useEffect, useState } from 'react';
import Title from 'components/Title/Title';
import OurFriendsList from 'components/OurFriendsList/OurFriendsList';
import { fetchFriends } from 'services/getFriends';
import Section from 'components/Section/Section';
import { Modal } from 'components/Modal/Modal';
import ModalAddPet from 'components/ModalAddPet/ModalAddPet';

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
      <button type="button" onClick={handleIsOpen}>
        Touch ME
      </button>

      <OurFriendsList friends={friends} />
      {isOpen && (
        <Modal onClose={closeModal}>
          <ModalAddPet closeModal={closeModal} />
        </Modal>
      )}
    </Section>
  );
};

export default OurFriendsPage;
