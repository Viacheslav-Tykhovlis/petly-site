import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/login/logIn-operations';
import {
  LogInTitle,
  LogInInput,
  LogInButton,
  LogInWrapper,
  ErrorMessage,
  LogInText,
  Anchor,
  ApproveMessage,
  InputWrapper,
  Section,
} from './LoginForm.styled';
import { GreenIcon, RedIcon } from './Icons';

const validateSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .required(`Required`)
      .email(`Enter a valid Email`)
      .trim(),
    password: yup
      .string()
      .required(`Required`)
      .min(7, `Password should be from 7 to 32 characters`)
      .max(32, `Password should be from 7 to 32 characters`)
      .trim(),
  });

const LogInForm = () => {
  const dispatch = useDispatch();
  const formSubmit = values => {
    dispatch(logIn(values));
  };
  return (
    <Formik
      validationSchema={validateSchema}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        formSubmit(values);
        setSubmitting(false);
      }}
      onChange={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Section>
          <LogInWrapper>
            <LogInTitle>Login</LogInTitle>
            <Form>
              <InputWrapper>
                <LogInInput
                  name="email"
                  type="email"
                  autoComplete="off"
                  placeholder="Email"
                  marginbottom={
                    touched.email && '24' && (errors.email ? '0' : '0')
                  }
                  border={
                    touched.email &&
                    'rgba(245, 146, 86, 0.5)' &&
                    (errors.email
                      ? '1px solid rgba(226, 0, 26, 1)'
                      : `1px solid rgba(60, 188, 129, 1)`)
                  }
                />
                {touched.email &&
                  'rgba(245, 146, 86, 0.5)' &&
                  (errors.email ? (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                  ) : (
                    <ApproveMessage>Email is correct</ApproveMessage>
                  ))}
                {touched.email &&
                  'rgba(245, 146, 86, 0.5)' &&
                  (!errors.email ? <GreenIcon /> : <RedIcon />)}
              </InputWrapper>
              <InputWrapper>
                <LogInInput
                  name="password"
                  type="password"
                  autoComplete="off"
                  placeholder="Password"
                  marginbottom={
                    touched.email && '24' && (errors.email ? '0' : '0')
                  }
                  border={
                    touched.email &&
                    'rgba(245, 146, 86, 0.5)' &&
                    (errors.password
                      ? '1px solid rgba(226, 0, 26, 1)'
                      : `1px solid rgba(60, 188, 129, 1)`)
                  }
                />
                {touched.email &&
                  'rgba(245, 146, 86, 0.5)' &&
                  (errors.password ? (
                    <ErrorMessage>{errors.password}</ErrorMessage>
                  ) : (
                    <ApproveMessage>Password is secure</ApproveMessage>
                  ))}
                {touched.email &&
                  'rgba(245, 146, 86, 0.5)' &&
                  (!errors.password ? <GreenIcon /> : <RedIcon />)}
              </InputWrapper>
              <LogInButton type="submit">Login</LogInButton>
              <LogInText>
                Don't have an account?
                <Anchor to="/register">Register</Anchor>
              </LogInText>
            </Form>
          </LogInWrapper>
        </Section>
      )}
    </Formik>
  );
};
export default LogInForm;
