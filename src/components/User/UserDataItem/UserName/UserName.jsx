import React from 'react';
import { Formik, Form } from 'formik';
import { Label, Flex, Input, FormStyled } from '../UserDataItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getStateUsers } from 'redux/users/selectors';
import { useState } from 'react';
import { uploadUser } from 'redux/users/operations.js';
import { ButtonUpdate } from '../../ButtonUser/ButtonUpdate';

export const UserName = ({ isUpdating, setIsUpdating }) => {
  const user = useSelector(getStateUsers);
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState();

  const handleClick = (values, actions) => {
    if (isDisabled) {
      setIsDisabled(false);
      setIsUpdating(true);
      return;
    }

    if (!values.name) return;
    setIsDisabled(true);
    setIsUpdating(false);
  };

  const handleChange = event => {
    const nameUser = event.target.value;
    setNewUserName(nameUser);
  };

  const handleSubmit = async (values, actions) => {
    if (!isDisabled) {
      return;
    }

    if (values.name === user.name) return;

    const formData = new FormData();
    formData.append('name', newUserName);
    dispatch(uploadUser(formData));
  };

  return (
    <Formik
      initialValues={{
        name: { name: user.name || '' },
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, errors }) => (
        <Form>
          <FormStyled>
            <Flex>
              <Label htmlFor="name">Name:</Label>
              <Input
                name="name"
                type="name"
                disabled={isDisabled}
                placeholder={user.name || ''}
                onChange={handleChange}
              />
              <ButtonUpdate
                onClick={() => {
                  if (!values.name) {
                    values.name = user.name;
                    handleClick(values);
                  }
                  if (errors.name) return;
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
