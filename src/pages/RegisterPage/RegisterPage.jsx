import React from 'react';
import { SectionRegisterPage } from './RegisterPage.styled';
import {
  RegisterFormFirst,
  RegisterFormSecond,
} from 'components/RegisterForm/RegisterForm';
import { useToggleForm } from '../../hooks/useToggleForm';


const RegisterPage = () => {
  const { isFormOpen, toggle } = useToggleForm();

  return (
    <>
      <SectionRegisterPage>
        {isFormOpen ? (
          <RegisterFormFirst toggleForm={toggle} />
        ) : (
          <RegisterFormSecond toggleForm={toggle} />
        )}
      </SectionRegisterPage>
    </>
  );
};

export default RegisterPage;
