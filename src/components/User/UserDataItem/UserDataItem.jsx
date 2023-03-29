import React from 'react';
import { FormStyled, BoxUserDataItem } from './UserDataItem.styled';
import {
  UserPhoto,
  UserName,
  UserEmail,
  UserBirthday,
  UserPhone,
  UserCity,
} from './index';

const UserDataItem = ({ isUpdating, setIsUpdating }) => {
  return (
    <BoxUserDataItem>
      <UserPhoto />
      <FormStyled>
        <UserName isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
        <UserEmail isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
        <UserBirthday isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
        <UserPhone isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
        <UserCity isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
      </FormStyled>
    </BoxUserDataItem>
  );
};

export default UserDataItem;
