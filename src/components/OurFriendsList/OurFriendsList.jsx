import PropTypes from 'prop-types';
import { OurFriendsItem } from './OurFriendsItem';
import { OurFriendsUl } from './OurFriendsList.styled';

const OurFriendsList = ({ friends }) => {
  return (
    <OurFriendsUl>
      {friends.map(
        ({
          _id,
          title,
          url,
          addressUrl,
          imageUrl,
          address,
          workDays,
          phone,
          email,
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
  friends: PropTypes.array,
};

export default OurFriendsList;
