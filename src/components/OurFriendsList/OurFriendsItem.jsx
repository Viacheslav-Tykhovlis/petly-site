import PropTypes from 'prop-types';
import {
  Friend,
  Name,
  NameLink,
  Box,
  ImgFriend,
  DataList,
  DataItem,
  Subtitle,
  // TimeWorkItem,
  // TimeWorkText,
  // TimeLink,
  // ImageLink,
  DataLink,
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
      <NameLink href={url}>
        <Name> {title}</Name>
      </NameLink>

      <Box>
        <ImgFriend src={imageUrl} alt="FotoSponsor" />

        <DataList>
          <DataItem>
            <Subtitle>Time:</Subtitle>
            {/* <TimeLink>
                {workDays
                  ? workDays.map(({ to, from, isOpen, index }) => (
                      <TimeWorkItem key={index}>
                        <TimeWorkText>
                          {to} - {from}
                        </TimeWorkText>
                      </TimeWorkItem>
                    ))
                  : '-----------------------------------'}
            </TimeLink> */}
          </DataItem>

          <DataItem>
            <Subtitle>Adress:</Subtitle>
            <DataLink href={addressUrl}>
              {address ? address : '-----------------------------------'}
            </DataLink>
          </DataItem>

          <DataItem>
            <Subtitle>Email:</Subtitle>
            <DataLink href={email}>
              {email ? email : '-----------------------------------'}
            </DataLink>
          </DataItem>

          <DataItem>
            <Subtitle>Phone:</Subtitle>
            <DataLink href={phone}>
              {phone ? phone : '-----------------------------------'}
            </DataLink>
          </DataItem>
        </DataList>
      </Box>
    </Friend>
  );
};

OurFriendsItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  addressUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  workDays: PropTypes.arrayOf(
    PropTypes.exact({
      isOpen: PropTypes.bool,
      from: PropTypes.string,
      to: PropTypes.string,
    }),
  ),
};
