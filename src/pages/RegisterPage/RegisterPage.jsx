// import React, { useState, useEffect } from "react";
import { SectionRegisterPage } from './RegisterPage.styled';
// import {RegisterFormFirst, RegisterFormSecond} from './RegisterForm/RegisterForm';
import {RegisterFormSecond} from './RegisterForm/RegisterForm';

// const styles = {
//   input: {
//     marginBottom: 24,
//   }
// };

const RegisterPage = () => {

  // const [value, setValue] = useState(0);

  return (
    <>
      <SectionRegisterPage >
        {/* <RegisterFormFirst /> */}
        <RegisterFormSecond />
      </SectionRegisterPage>
    </>
  );
};

export default RegisterPage;
