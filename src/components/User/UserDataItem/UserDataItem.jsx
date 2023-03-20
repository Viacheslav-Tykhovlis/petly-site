import React from 'react';
import { Formik, Field, Form } from 'formik';
import {
  Label,
  Flex,
  fieldStyled,
  formStyled,
  StyledEditButton,
} from './UserDataItem.styled';
import { UserPhoto } from './index';

const UserDataItem = () => {
  return (
    <>
      <UserPhoto />
      <Formik
        initialValues={{
          name: '',
          email: '',
          birthday: '',
          phone: '',
          city: '',
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form style={formStyled}>
          <Flex>
            <Label htmlFor="name">Name:</Label>
            <Field
              id="name"
              name="name"
              placeholder="Hanna"
              style={fieldStyled}
            />
            <StyledEditButton type="button" />
          </Flex>

          <Flex>
            <Label htmlFor="email">Email:</Label>
            <Field
              id="email"
              name="email"
              placeholder="hanna@gmail.com"
              type="email"
              style={fieldStyled}
            />
            <StyledEditButton type="button" />
          </Flex>

          <Flex>
            <Label htmlFor="birthday">Birthday:</Label>
            <Field
              id="birthday"
              name="birthday"
              style={fieldStyled}
              placeholder="00.00.0000"
            />
            <StyledEditButton type="button" />
          </Flex>

          <Flex>
            <Label htmlFor="phone">Phone:</Label>
            <Field
              id="phone"
              name="phone"
              style={fieldStyled}
              placeholder="+38000000000"
            />
            <StyledEditButton type="button" />
          </Flex>

          <Flex margin={'0px'}>
            <Label htmlFor="city">City:</Label>
            <Field
              id="city"
              name="city"
              placeholder="Kiev"
              style={fieldStyled}
            />
            <StyledEditButton type="button" />
          </Flex>
        </Form>
      </Formik>
    </>
  );
};

export default UserDataItem;
