import React from 'react';
// import * as ReactDOM from 'react-dom';
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
      .min(7, `Enter a valid Password`)
      .max(32, `Enter a valid Password`)
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
        console.log(values);
        formSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <LogInWrapper>
          <LogInTitle>Login</LogInTitle>
          <Form>
            <InputWrapper>
              <LogInInput
                name="email"
                type="email"
                placeholder="Email"
                border={
                  errors.email
                    ? '1px solid rgba(226, 0, 26, 1)'
                    : `1px solid rgba(60, 188, 129, 1)`
                }
              />
              {errors.email ? (
                <ErrorMessage>{errors.email}</ErrorMessage>
              ) : (
                <ApproveMessage>Email is correct</ApproveMessage>
              )}
              {!errors.email ? <GreenIcon /> : <RedIcon />}
            </InputWrapper>
            <InputWrapper>
              <LogInInput
                name="password"
                type="password"
                placeholder="Password"
                border={
                  (errors.password && '1px solid rgba(226, 0, 26, 1)') ||
                  (!errors.password && `1px solid rgba(60, 188, 129, 1)`)
                }
              />
              {errors.password ? (
                <ErrorMessage>{errors.password}</ErrorMessage>
              ) : (
                <ApproveMessage>Password is correct</ApproveMessage>
              )}
              {!errors.password ? <GreenIcon /> : <RedIcon />}
            </InputWrapper>
            <LogInButton type="submit">Login</LogInButton>
            <LogInText>
              Don't have an account?
              <Anchor href="http://localhost:3000/petly-site/register">
                Register
              </Anchor>
            </LogInText>
          </Form>
        </LogInWrapper>
      )}
    </Formik>
  );
};
export default LogInForm;
