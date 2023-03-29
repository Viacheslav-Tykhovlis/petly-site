import React from 'react';
import Section from 'components/Section/Section';
import AuthPageContainer from 'components/Auth/AuthPageContainer/AuthPageContainer';
import RegistrationForm from 'components/Auth/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthPageContainer>
      <Section>
        <RegistrationForm />
      </Section>
    </AuthPageContainer>
  );
};

export default RegisterPage;
