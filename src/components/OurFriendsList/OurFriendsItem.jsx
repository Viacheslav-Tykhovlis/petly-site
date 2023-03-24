import PropTypes from 'prop-types';
import { useState } from 'react';
import defaultImage from 'img/no-image.JPG';
import {
  Friend,
  Name,
  NameLink,
  Box,
  ImgFriend,
  DataList,
  DataItem,
  Subtitle,
  TextBox,
  DataLink,
} from './OurFriendsItem.styled';
import SheduleTable from './SheduleTable';

export const OurFriendsItem = ({
  title,
  url,
  addressUrl,
  imageUrl,
  address,
  workDays,
  phone,
  email,
  _id,
}) => {
  const [isVisibleWorkDays, setisVisibleWorkDays] = useState(false);
  const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const openDay = workDays?.find(day => day.isOpen);
  const newWorkDays =
    workDays &&
    workDays.map((day, index) => {
      return { day: weekDays[index], ...day };
    });

  return (
    <Friend key={_id}>
      <NameLink href={url} target="_blank" rel="noopener noreferrer">
        <Name> {title}</Name>
      </NameLink>

      <Box>
        <ImgFriend src={imageUrl ?? defaultImage} alt="logo friends" />

        <DataList>
          <DataItem>
            {workDays ? (
              <TextBox
                onClick={() => setisVisibleWorkDays(!isVisibleWorkDays)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setisVisibleWorkDays(false);
                  }, 2500);
                }}
              >
                <Subtitle>Time:</Subtitle>
                <Subtitle>
                  {openDay?.from} - {openDay?.to}
                </Subtitle>
              </TextBox>
            ) : (
              <Subtitle>-----------------------------------</Subtitle>
            )}
          </DataItem>

          {isVisibleWorkDays && <SheduleTable shedule={newWorkDays} />}

          <DataItem>
            <Subtitle>Adress:</Subtitle>
            {address ? (
              <DataLink
                style={{ textDecoration: 'underline' }}
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {address}
              </DataLink>
            ) : (
              <p>----------------------------------</p>
            )}
          </DataItem>

          <DataItem>
            <Subtitle>Email:</Subtitle>
            {email ? (
              <DataLink
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {email}
              </DataLink>
            ) : (
              <p>----------------------------------</p>
            )}
          </DataItem>

          <DataItem>
            <Subtitle>Phone:</Subtitle>
            {phone ? (
              <DataLink
                href={`tel:${phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {phone}
              </DataLink>
            ) : (
              <p>----------------------------------</p>
            )}
          </DataItem>
        </DataList>
      </Box>
    </Friend>
  );
};

OurFriendsItem.propTypes = {
  _id: PropTypes.string,
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
      _id: PropTypes.string,
    }),
  ),
};
