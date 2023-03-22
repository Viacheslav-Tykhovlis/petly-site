// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/login/logIn-operations';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  LogInWrapper,
  LogInTitle,
  LogInInput,
  LogInButton,
  LogInText,
} from './LoginForm.styled';

const LoginForm = () => {
  //   const dispatch = useDispatch();

  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  //   const handleChange = e => {
  //     const { name, value } = e.currentTarget;

  //     switch (name) {
  //       case 'email':
  //         setEmail(value);
  //         break;
  //       case 'password':
  //         setPassword(value);
  //         break;
  //       default:
  //         return;
  //     }
  //   };

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     const form = event.currentTarget;
  //     dispatch(
  //       logIn({
  //         email: form.elements.email.value,
  //         password: form.elements.password.value,
  //       }),
  //     );
  //     form.reset();
  //   };
  // /Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .trim()
        .required('Required'),
      password: Yup.string()
        .min(7, 'Must be 7 characters or more')
        .max(32, 'Must be 32 characters or less')
        .trim()
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <LogInWrapper>
      <LogInTitle>Login</LogInTitle>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email"></label>
        <LogInInput
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
        />

        <label htmlFor="password"></label>
        <LogInInput
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
        />
      </form>
      <LogInButton type="submit">Login</LogInButton>
      <LogInText>
        Don't have an account?
        <a href="http://localhost:3000/petly-site/register">Register</a>
      </LogInText>

      {/* <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input
            type="email"
            name="email"
            // value={email}
            // onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={handleChange}
          />
        </label>
        <button type="submit">Log in</button>
        <p>
          Don't have an account?{' '}
          <a href="http://localhost:3000/petly-site/register">Register</a>
        </p>
      </form> */}
    </LogInWrapper>
  );
};

export default LoginForm;
