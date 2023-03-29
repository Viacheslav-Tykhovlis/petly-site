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

export const UserCity = ({ isUpdating, setIsUpdating }) => {
  const user = useSelector(getStateUsers);
  const [isDisabled, setIsDisabled] = useState(true);
  // const dispatch = useDispatch();

  const handleClick = (values, actions) => {
    if (isDisabled) {
      setIsDisabled(false);
      setIsUpdating(true);
      return;
    }

    if (!values.city) return;
    setIsDisabled(true);
    setIsUpdating(false);
  };

  const handleSubmit = async (values, actions) => {
    if (!isDisabled) {
      return;
    }

    if (values.city === user.city) return;
  };

  return (
    <Formik
      initialValues={{
        city: { city: user.city || '' },
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, errors }) => (
        <Form>
          <FormStyled>
            <Flex>
              <Label htmlFor="city">City:</Label>
              <Input
                name="city"
                type="city"
                disabled={isDisabled}
                placeholder={user.city || ''}
              />
              <ButtonUpdate
                onClick={() => {
                  if (!values.city) {
                    values.city = user.city;
                    handleClick(values);
                  }
                  if (errors.city) return;
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
