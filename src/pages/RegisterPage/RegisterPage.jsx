import React, { useState, useEffect } from "react";
import { SectionRegisterPage } from './RegisterPage.styled';
import {RegisterFormFirst} from './RegisterForm/RegisterForm';

const styles = {
  input: {
    marginBottom: 24,
  }
};

const RegisterPage = () => {

  const [value, setValue] = useState(0);

  return (
    <>
      <SectionRegisterPage >
        <RegisterFormFirst />
      </SectionRegisterPage>
    </>
  );
};

export default RegisterPage;
