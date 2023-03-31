import React from 'react';
import { Formik, Form } from 'formik';
import { Label, Flex, Input, FormStyled } from '../UserDataItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getStateUsers } from 'redux/users/selectors';
import { useState } from 'react';
import { uploadUser } from 'redux/users/operations.js';
import { ButtonUpdate } from '../../ButtonUser/ButtonUpdate';

export const UserEmail = ({ isUpdating, setIsUpdating }) => {
  const user = useSelector(getStateUsers);
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const [newUserEmail, setNewUserEmail] = useState();

  const handleClick = (values, actions) => {
    if (isDisabled) {
      setIsDisabled(false);
      setIsUpdating(true);
      return;
    }

    if (!values.email) return;
    setIsDisabled(true);
    setIsUpdating(false);
  };

  const handleChange = event => {
    const emailUser = event.target.value;
    setNewUserEmail(emailUser);
  };

  const handleSubmit = async (values, actions) => {
    if (!isDisabled) {
      return;
    }

    if (values.email === user.email) return;

    const formData = new FormData();
    formData.append('email', newUserEmail);
    dispatch(uploadUser(formData));
  };

  return (
    <Formik
      initialValues={{
        email: { email: user.email || '' },
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, errors }) => (
        <Form>
          <FormStyled>
            <Flex>
              <Label htmlFor="email">Email:</Label>
              <Input
                name="email"
                type="email"
                disabled={isDisabled}
                placeholder={user.email || ''}
                onChange={handleChange}
              />
              <ButtonUpdate
                onClick={() => {
                  if (!values.email) {
                    values.email = user.email;
                    handleClick(values);
                  }
                  if (errors.email) return;
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
