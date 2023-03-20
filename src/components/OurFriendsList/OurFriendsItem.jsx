import PropTypes from 'prop-types';
import { useState } from 'react';
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
  TimeButton,
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
  const [isVisibleWorkDays, setisVisibleWorkDays] = useState(false);
  const openDay = workDays?.find(day => day.isOpen);

  // const handleClicktoWorkdays = () => {
  //   setisVisibleWorkDays(true);
  // };
  console.log(isVisibleWorkDays);

  return (
    <Friend>
      <NameLink href={url} target="_blank" rel="noopener noreferrer">
        <Name> {title}</Name>
      </NameLink>

      <Box>
        <ImgFriend src={imageUrl} alt="logo friends" />

        <DataList>
          <DataItem>
            <Subtitle>Time:</Subtitle>
            {workDays ? (
              <TimeButton
                onClick={() => setisVisibleWorkDays(!isVisibleWorkDays)}
              >
                {openDay.from} - {openDay.to}
              </TimeButton>
            ) : (
              <p>-----------------------------------</p>
            )}
          </DataItem>
          {isVisibleWorkDays &&
            workDays.map(({ to, from, isOpen, index }) => (
              <ul>
                <li key={index}>
                  <p>
                    {from}- {to}
                  </p>
                </li>
              </ul>
            ))}

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

//  {
//    workDays ? (
//      workDays.map(({ to, from, isOpen, index }) => (
//        <TimeLink>
//          <TimeWorkItem key={index}>
//            <TimeWorkText>
//              {to} - {from}
//            </TimeWorkText>
//          </TimeWorkItem>
//        </TimeLink>
//      ))
//    ) : (
//      <p>-----------------------------------</p>
//    );
//  }
