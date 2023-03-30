import React from 'react';
import { Formik, Form } from 'formik';
import { Label, Flex, Input, FormStyled } from '../UserDataItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getStateUsers } from 'redux/users/selectors';
import { useState } from 'react';
import { uploadUser } from 'redux/users/operations.js';
import { ButtonUpdate } from '../../ButtonUser/ButtonUpdate';

export const UserBirthday = ({ isUpdating, setIsUpdating }) => {
  const user = useSelector(getStateUsers);
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const [newUserBirthday, setNewUserBirthday] = useState();

  const format = new Date(user.birthday);
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const formatBirthday = format.toLocaleString('ua', options);

  const handleClick = (values, actions) => {
    if (isDisabled) {
      setIsDisabled(false);
      setIsUpdating(true);
      return;
    }

    if (!values.birthday) return;
    setIsDisabled(true);
    setIsUpdating(false);
  };

  const handleChange = event => {
    const birthdayUser = event.target.value;
    setNewUserBirthday(birthdayUser);
  };

  const handleSubmit = async (values, actions) => {
    if (!isDisabled) {
      return;
    }

    if (values.birthday === user.birthday) return;

    const formData = new FormData();
    formData.append('birthday', newUserBirthday);
    dispatch(uploadUser(formData));
  };

  return (
    <Formik
      initialValues={{
        birthday: { birthday: formatBirthday || 'MM.DD.YYYY' },
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, errors }) => (
        <Form>
          <FormStyled>
            <Flex>
              <Label htmlFor="birthday">Birthday:</Label>
              <Input
                name="birthday"
                type="birthday"
                disabled={isDisabled}
                placeholder={formatBirthday || 'MM.DD.YYYY'}
                onChange={handleChange}
              />
              <ButtonUpdate
                onClick={() => {
                  if (!values.birthday) {
                    values.birthday = user.birthday;
                    handleClick(values);
                  }
                  if (errors.birthday) return;
                  handleClick(values);
                }}
                type="submit"
                disabled={isUpdating && isDisabled}
                isInputDisabled={isDisabled}
              />
            </Flex>
          </FormStyled>
        </Form>
      )}
    </Formik>
  );
};
