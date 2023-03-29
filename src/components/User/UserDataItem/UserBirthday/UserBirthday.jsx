import React from 'react';
import { Formik, Form } from 'formik';
import { Label, Flex, Input, FormStyled } from '../UserDataItem.styled';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import { getStateUsers } from 'redux/users/selectors';
import { useState } from 'react';
// import { uploadUser } from 'redux/users/operations.js';
import { ButtonUpdate } from '../../ButtonUser/ButtonUpdate';

export const UserBirthday = ({ isUpdating, setIsUpdating }) => {
  const user = useSelector(getStateUsers);
  const [isDisabled, setIsDisabled] = useState(true);
  // const dispatch = useDispatch();

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

  const handleSubmit = async (values, actions) => {
    if (!isDisabled) {
      return;
    }

    if (values.birthday === user.birthday) return;
  };

  return (
    <Formik
      initialValues={{
        birthday: { birthday: user?.birthday || '00.00.0000' },
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
                placeholder={user.birthday || ''}
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
