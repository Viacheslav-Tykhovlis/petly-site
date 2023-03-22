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
      {/* <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center"}}> */}
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

      {/* </div> */}
    </>
  );
};

const RegisterFormSecond = () => {
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
        <Button type="button" className='buttonback' >Back</Button>
        <Paragraph>
          Already have an account?&nbsp;<Link to="/login">Login</Link>
        </Paragraph>
      </Form>
    </>
  );
};

export { RegisterFormFirst, RegisterFormSecond };
