import React, { useState } from 'react';
import { SectionRegisterPage } from './RegisterPage.styled';
import {
  RegisterFormFirst,
  RegisterFormSecond,
} from 'components/RegisterForm/RegisterForm';
import { useToggleForm } from '../../hooks/useToggleForm';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [tel, setTel] = useState('');

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
      case 'region':
        setRegion(value);
        break;
      case 'tel':
        setTel(value);
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
    setRegion('');
    setTel('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    reset();
  }

  
  const { isFormOpen, toggle } = useToggleForm();

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
            region={region}
            tel={tel}
              onChange={handleChange}
              onSubmit={handleSubmit}
          />
        )}
      </SectionRegisterPage>
    </>
  );
};

export default RegisterPage;
