import PropTypes from 'prop-types';
import {
  Friend,
  NameFriend,
  Box,
  ImgFriend,
  DataList,
  DataItem,
  Subtitle,
  TimeWork,
  TimeWorkItem,
  TimeWorkText,
  Adress,
  TimeLink,
  AdressLink,
  ImageLink,
  EmailLink,
  PhoneLink,
} from './OurFriendsItem.styled';

export const OurFriendsItem = ({
  title,
  url,
  addressUrl,
  imageUrl,
  address,
  workDays,
  phone,
  email,
}) => {
  return (
    <Friend>
      <NameFriend>{title}</NameFriend>
      <Box>
        <ImageLink src={url}>
          <ImgFriend src={imageUrl} alt="FotoSponsor" />
        </ImageLink>
        <DataList>
          <DataItem>
            <Subtitle>Time:</Subtitle>
            {/* <TimeLink>
              <TimeWork>
                {workDays
                  ? workDays.map(({ to, from, isOpen, index }) => (
                      <TimeWorkItem key={index}>
                        <TimeWorkText>
                          {to} - {from}
                        </TimeWorkText>
                      </TimeWorkItem>
                    ))
                  : '-----------------------------------'}
              </TimeWork>
            </TimeLink> */}
          </DataItem>

          <DataItem>
            <Subtitle>Adress:</Subtitle>
            <AdressLink src={addressUrl}>
              <Adress>
                {address ? address : '-----------------------------------'}
              </Adress>
            </AdressLink>
          </DataItem>

          <DataItem>
            <Subtitle>Email:</Subtitle>
            <EmailLink>
              <TimeWork>
                {email ? email : '-----------------------------------'}
              </TimeWork>
            </EmailLink>
          </DataItem>

          <DataItem>
            <Subtitle>Phone:</Subtitle>
            <PhoneLink>
              <TimeWork>{phone}</TimeWork>
            </PhoneLink>
          </DataItem>
        </DataList>
      </Box>
    </Friend>
  );
};

// OurFriendsItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   addressUrl: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   workDays: PropTypes.arrayOf(
//     PropTypes.exact({
//       isOpen: PropTypes.boolean.isRequired,
//       from: PropTypes.string.isRequired,
//       to: PropTypes.string.isRequired,
//     }),
//   ),
// };
