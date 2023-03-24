import PropTypes from 'prop-types';
import { OurFriendsItem } from './OurFriendsItem';
import { OurFriendsUl } from './OurFriendsList.styled';

const OurFriendsList = ({ friends }) => {
  return (
    <OurFriendsUl>
      {friends.map(
        ({
          title,
          url,
          addressUrl,
          imageUrl,
          address,
          workDays,
          phone,
          email,
          _id,
        }) => (
          <OurFriendsItem
            key={_id}
            title={title}
            url={url}
            addressUrl={addressUrl}
            imageUrl={imageUrl}
            address={address}
            workDays={workDays}
            phone={phone}
            email={email}
          />
        ),
      )}
    </OurFriendsUl>
  );
};

OurFriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      _id: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string.isRequired,
      addressUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      address: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      workDays: PropTypes.array,
    }),
  ),
};

export default OurFriendsList;
