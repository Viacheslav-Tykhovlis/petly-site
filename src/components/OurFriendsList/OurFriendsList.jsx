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
        }) => (
          <OurFriendsItem
            key={phone}
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

// OurFriendsList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//       addressUrl: PropTypes.string.isRequired,
//       imageUrl: PropTypes.string.isRequired,
//       address: PropTypes.string.isRequired,
//       phone: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//       workDays: PropTypes.array.isRequired,
//     }),
//   ),
// };
export default OurFriendsList;
