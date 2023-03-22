import { Form, InputForm, TitleForm, Button, Paragraph, Link } from './RegisterForm.styled';

const RegisterFormFirst = () => {
  return (
    <>
      <Form action="">
        <TitleForm>Registration</TitleForm>
        <InputForm type="text" />
        <InputForm type="text" />
        <InputForm className="lastinput" type="text" />
        <Button type="button">Next</Button>
        <Paragraph>
          Already have an account?&nbsp;<Link to="/login">Login</Link>
        </Paragraph>
      </Form>
    </>
  );
};

export { RegisterFormFirst };
