import { ErrorMessage } from 'formik';

export const FormikErrorMessage = ({ name }) => (
  <ErrorMessage name={name}>
    {msg => <div style={{ color: 'red' }}>{msg}</div>}
  </ErrorMessage>
);
