// // /

// import React from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';

// import {
//   LogInWrapper,
//   LogInTitle,
//   LogInInput,
//   LogInButton,
//   LogInText,
//   Anchor,
// } from './LoginForm.styled';
// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/login/logIn-operations';

// const validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .max(8, 'Password should be less 8 characters')
//     .required('Password is required'),
// });

// const LogInForm = () => {
//   const dispatch = useDispatch();
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: values => {
//       console.log(formik.values.email.length);

//       dispatch(
//         logIn({ email: formik.values.email, password: formik.values.password }),
//       );
//     },
//   });

//   return (
//     <LogInWrapper>
//       <LogInTitle>Login</LogInTitle>
//       <form onSubmit={formik.handleSubmit}>
//         <LogInInput
//           id="email"
//           name="email"
//           label="Email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//         />
//         <LogInInput
//           id="password"
//           name="password"
//           label="Password"
//           type="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//         />
//         <LogInButton type="submit">Login</LogInButton>

//         <LogInText>
//           Don't have an account?
//           <Anchor href="http://localhost:3000/petly-site/register">
//             Register
//           </Anchor>
//         </LogInText>
//       </form>
//     </LogInWrapper>
//   );
// };
// export default LogInForm;

import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import {
  //   LogInWrapper,
  LogInTitle,
  LogInInput,
  LogInButton,
  LogInWrapper,
  ErrorMessage,
  LogInText,
  Anchor,
  ApproveMessage,
  InputWrapper,
  Icon,
} from './LoginForm.styled';
// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/login/logIn-operations';

// const validateEmail = value => {
//   if (!value) {
//     return 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//     return 'Enter a valid Email';
//   }
// };

// const validatePassword = value => {
//   if (!value) {
//     return 'Required';
//   } else if (value < 7 && value > 15) {
//     return `Enter a valid Password`;
//   }
// };

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
  return (
    <Formik
      validationSchema={validateSchema}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <LogInWrapper>
          <LogInTitle>Login</LogInTitle>
          <Form>
            <InputWrapper>
              {/* <div> */}
              <LogInInput
                name="email"
                type="email"
                //   validate={validateEmail}
                border={
                  errors.email
                    ? '1px solid rgba(226, 0, 26, 1)'
                    : `1px solidrgba(60, 188, 129, 1)`
                }
                //   valid={touched.email && !errors.email}
                //   error={touched.email && errors.email}
              />
              {errors.email ? (
                <ErrorMessage>{errors.email}</ErrorMessage>
              ) : (
                <ApproveMessage>Email is correct</ApproveMessage>
              )}
              {!errors.email ? (
                <Icon
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10C0 4.47656 4.47656 0 10 0C15.5234 0 20 4.47656 20 10C20 15.5234 15.5234 20 10 20C4.47656 20 0 15.5234 0 10ZM14.5234 8.27344C14.9492 7.84766 14.9492 7.15234 14.5234 6.72656C14.0977 6.30078 13.4023 6.30078 12.9766 6.72656L8.75 10.9531L7.02344 9.22656C6.59766 8.80078 5.90234 8.80078 5.47656 9.22656C5.05078 9.65234 5.05078 10.3477 5.47656 10.7734L7.97656 13.2734C8.40234 13.6992 9.09766 13.6992 9.52344 13.2734L14.5234 8.27344Z"
                    fill="#3CBC81"
                  />
                </Icon>
              ) : (
                <Icon
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10C0 4.47656 4.47656 0 10 0C15.5234 0 20 4.47656 20 10C20 15.5234 15.5234 20 10 20C4.47656 20 0 15.5234 0 10ZM6.83594 8.12891L8.67578 9.96484L6.83594 11.8359C6.47266 12.2031 6.47266 12.7969 6.83594 13.1289C7.20312 13.5273 7.79688 13.5273 8.12891 13.1289L9.96484 11.3242L11.8359 13.1289C12.2031 13.5273 12.7969 13.5273 13.1289 13.1289C13.5273 12.7969 13.5273 12.2031 13.1289 11.8359L11.3242 9.96484L13.1289 8.12891C13.5273 7.79688 13.5273 7.20312 13.1289 6.83594C12.7969 6.47266 12.2031 6.47266 11.8359 6.83594L9.96484 8.67578L8.12891 6.83594C7.79688 6.47266 7.20312 6.47266 6.83594 6.83594C6.47266 7.20312 6.47266 7.79688 6.83594 8.12891Z"
                    fill="#E2001A"
                  />
                </Icon>
              )}
            </InputWrapper>
            {/* </div> */}
            <InputWrapper>
              <LogInInput
                name="password"
                type="password"
                //   validate={validatePassword}
                border={
                  (errors.password && '1px solid rgba(226, 0, 26, 1)') ||
                  (!errors.password && `1px solidrgba(60, 188, 129, 1)`)
                }

                //   valid={touched.password && !errors.password}
                //   error={touched.password && errors.password}
              />
              {errors.password ? (
                <ErrorMessage>{errors.password}</ErrorMessage>
              ) : (
                <ApproveMessage>Password is correct</ApproveMessage>
              )}
              {!errors.password ? (
                <Icon
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10C0 4.47656 4.47656 0 10 0C15.5234 0 20 4.47656 20 10C20 15.5234 15.5234 20 10 20C4.47656 20 0 15.5234 0 10ZM14.5234 8.27344C14.9492 7.84766 14.9492 7.15234 14.5234 6.72656C14.0977 6.30078 13.4023 6.30078 12.9766 6.72656L8.75 10.9531L7.02344 9.22656C6.59766 8.80078 5.90234 8.80078 5.47656 9.22656C5.05078 9.65234 5.05078 10.3477 5.47656 10.7734L7.97656 13.2734C8.40234 13.6992 9.09766 13.6992 9.52344 13.2734L14.5234 8.27344Z"
                    fill="#3CBC81"
                  />
                </Icon>
              ) : (
                <Icon
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10C0 4.47656 4.47656 0 10 0C15.5234 0 20 4.47656 20 10C20 15.5234 15.5234 20 10 20C4.47656 20 0 15.5234 0 10ZM6.83594 8.12891L8.67578 9.96484L6.83594 11.8359C6.47266 12.2031 6.47266 12.7969 6.83594 13.1289C7.20312 13.5273 7.79688 13.5273 8.12891 13.1289L9.96484 11.3242L11.8359 13.1289C12.2031 13.5273 12.7969 13.5273 13.1289 13.1289C13.5273 12.7969 13.5273 12.2031 13.1289 11.8359L11.3242 9.96484L13.1289 8.12891C13.5273 7.79688 13.5273 7.20312 13.1289 6.83594C12.7969 6.47266 12.2031 6.47266 11.8359 6.83594L9.96484 8.67578L8.12891 6.83594C7.79688 6.47266 7.20312 6.47266 6.83594 6.83594C6.47266 7.20312 6.47266 7.79688 6.83594 8.12891Z"
                    fill="#E2001A"
                  />
                </Icon>
              )}
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
