import React from 'react';
import { Formik, Form } from 'formik';
import {
  Label,
  Flex,
  Input,
  FormStyled,
  BoxUserDataItem,
} from './UserDataItem.styled';
import { UserPhoto } from './index';
import { ButtonPencil } from './../ButtonUser/ButtonUser';

const UserDataItem = () => {
  return (
    <BoxUserDataItem>
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
        <Form>
          <FormStyled>
            <Flex>
              <Label htmlFor="name">Name:</Label>
              <Input id="name" name="name" placeholder="Hanna" />
              <ButtonPencil
                type="button"
                ariaLabel="pencil button"
                widthM={'20px'}
                heightM={'20px'}
                widthT={'32px'}
                heightT={'32px'}
                widthMsvg={'12.5px'}
                heighthMsvg={'12.5px'}
                widthTsvg={'20px'}
                heighthTsvg={'20px'}
                bgT={'#fdf7f2'}
                bgM={'#fdf7f2'}
              />
            </Flex>

            <Flex>
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                name="email"
                placeholder="hanna@gmail.com"
                type="email"
              />
              <ButtonPencil
                type="button"
                ariaLabel="pencil button"
                widthM={'20px'}
                heightM={'20px'}
                widthT={'32px'}
                heightT={'32px'}
                widthMsvg={'12.5px'}
                heighthMsvg={'12.5px'}
                widthTsvg={'20px'}
                heighthTsvg={'20px'}
                bgT={'#fdf7f2'}
                bgM={'#fdf7f2'}
              />
            </Flex>

            <Flex>
              <Label htmlFor="birthday">Birthday:</Label>
              <Input id="birthday" name="birthday" placeholder="00.00.0000" />
              <ButtonPencil
                type="button"
                ariaLabel="pencil button"
                widthM={'20px'}
                heightM={'20px'}
                widthT={'32px'}
                heightT={'32px'}
                widthMsvg={'12.5px'}
                heighthMsvg={'12.5px'}
                widthTsvg={'20px'}
                heighthTsvg={'20px'}
                bgT={'#fdf7f2'}
                bgM={'#fdf7f2'}
              />
            </Flex>

            <Flex>
              <Label htmlFor="phone">Phone:</Label>
              <Input id="phone" name="phone" placeholder="+38000000000" />
              <ButtonPencil
                type="button"
                ariaLabel="pencil button"
                widthM={'20px'}
                heightM={'20px'}
                widthT={'32px'}
                heightT={'32px'}
                widthMsvg={'12.5px'}
                heighthMsvg={'12.5px'}
                widthTsvg={'20px'}
                heighthTsvg={'20px'}
                bgT={'#fdf7f2'}
                bgM={'#fdf7f2'}
              />
            </Flex>

            <Flex margin={'0px'}>
              <Label htmlFor="city">City:</Label>
              <Input id="city" name="city" placeholder="Kiev" />
              <ButtonPencil
                type="button"
                ariaLabel="pencil button"
                widthM={'20px'}
                heightM={'20px'}
                widthT={'32px'}
                heightT={'32px'}
                widthMsvg={'12.5px'}
                heighthMsvg={'12.5px'}
                widthTsvg={'20px'}
                heighthTsvg={'20px'}
                bgT={'#fdf7f2'}
                bgM={'#fdf7f2'}
              />
            </Flex>
          </FormStyled>
        </Form>
      </Formik>
    </BoxUserDataItem>
  );
};

export default UserDataItem;
