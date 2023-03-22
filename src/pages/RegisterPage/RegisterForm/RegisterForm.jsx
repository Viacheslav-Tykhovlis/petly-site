import {
  Form,
  InputForm,
  TitleForm,
  Button,
  Paragraph,
  Link,
} from './RegisterForm.styled';

const RegisterFormFirst = () => {
  return (
    <>
      <Form action="">
        <TitleForm>Registration</TitleForm>
        <InputForm name="email" type="email" placeholder="Email" />
        <InputForm name="password" type="password" placeholder="Password" />
        <InputForm
          name="comfirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="lastinput"
        />
        <Button type="button">Next</Button>
        <Paragraph>
          Already have an account?&nbsp;<Link to="/login">Login</Link>
        </Paragraph>
      </Form>
    </>
  );
};

export { RegisterFormFirst };
