import React from 'react';
import { Formik, Form } from 'formik';
import { Label, Flex, Input, FormStyled } from '../UserDataItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getStateUsers } from 'redux/users/selectors';
import { useState } from 'react';
import { uploadUser } from 'redux/users/operations.js';
import { ButtonUpdate } from '../../ButtonUser/ButtonUpdate';

export const UserPhone = ({ isUpdating, setIsUpdating }) => {
  const user = useSelector(getStateUsers);
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const [newUserPhone, setNewUserPhone] = useState();

  const handleClick = (values, actions) => {
    if (isDisabled) {
      setIsDisabled(false);
      setIsUpdating(true);
      return;
    }

    if (!values.phone) return;
    setIsDisabled(true);
    setIsUpdating(false);
  };

  const handleChange = event => {
    const phoneUser = event.target.value;
    setNewUserPhone(phoneUser);
  };

  const handleSubmit = async (values, actions) => {
    if (!isDisabled) {
      return;
    }

    if (values.phone === user.phone) return;

    const formData = new FormData();
    formData.append('phone', newUserPhone);
    dispatch(uploadUser(formData));
  };

  return (
    <Formik
      initialValues={{
        phone: { phone: user.phone || '' },
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, errors }) => (
        <Form>
          <FormStyled>
            <Flex>
              <Label htmlFor="phone">Phone:</Label>
              <Input
                name="phone"
                type=""
                disabled={isDisabled}
                placeholder={user.phone || ''}
                onChange={handleChange}
              />
              <ButtonUpdate
                onClick={() => {
                  if (!values.phone) {
                    values.phone = user.phone;
                    handleClick(values);
                  }
                  if (errors.phone) return;
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
