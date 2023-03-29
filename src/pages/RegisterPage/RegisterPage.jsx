import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useToggleForm } from 'hooks/useToggleForm';
import { SectionRegisterPage } from './RegisterPage.styled';
import {
  RegisterFormFirst,
  RegisterFormSecond,
} from 'components/RegisterForm/RegisterForm';
import { postRegisterUser } from 'services/postRegisterUser';
import { logIn } from 'redux/login/logIn-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { isFormOpen, toggle, setIsFormOpen } = useToggleForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
    setCity('');
    setPhone('');
  };

  const doStuff = async userForm => {
    try {
      await postRegisterUser(userForm);
      const { email, password } = userForm;
      dispatch(logIn({ email, password }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userForm = { email, password, name, city, phone };
    doStuff(userForm);
    reset();
    setIsFormOpen(true);
  };

  return (
    <>
      <SectionRegisterPage>
        {isFormOpen ? (
          <RegisterFormFirst
            toggleForm={toggle}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            onChange={handleChange}
          />
        ) : (
          <RegisterFormSecond
            toggleForm={toggle}
            name={name}
            city={city}
            phone={phone}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}
      </SectionRegisterPage>
    </>
  );
};

export default RegisterPage;
