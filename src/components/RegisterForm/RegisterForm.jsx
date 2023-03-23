import {
  Form,
  InputForm,
  TitleForm,
  Button,
  Paragraph,
  Link,
} from './RegisterForm.styled';

const RegisterFormFirst = ({toggleForm}) => {
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
        <Button type="button" onClick={toggleForm}>Next</Button>
        <Paragraph>
          Already have an account?&nbsp;<Link to="/login">Login</Link>
        </Paragraph>
      </Form>
    </>
  );
};

const RegisterFormSecond = ({toggleForm}) => {
  return (
    <>
      <Form className="formsecond" action="">
        <TitleForm>Registration</TitleForm>
        <InputForm name="name" type="text" placeholder="Name" />
        <InputForm name="region" type="text" placeholder="City, region" />
        <InputForm
          name="tel"
          type="tel"
          placeholder="Mobile phone"
          className="lastinput"
        />
        <Button type="submit">Register</Button>
        <Button type="button" className='buttonback' onClick={toggleForm}>Back</Button>
        <Paragraph>
          Already have an account?&nbsp;<Link to="/login">Login</Link>
        </Paragraph>
      </Form>
    </>
  );
};

export { RegisterFormFirst, RegisterFormSecond };
