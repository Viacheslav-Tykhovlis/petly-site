import {
  Form,
  InputForm,
  TitleForm,
  Button,
  Paragraph,
  Link,
} from './RegisterForm.styled';

const RegisterFormFirst = ({toggleForm, email, password, confirmPassword, onChange}) => {
  return (
    <>
      <Form action="">
        <TitleForm>Registration</TitleForm>
        <InputForm name="email" type="email" placeholder="Email" value={ email} onChange={onChange} />
        <InputForm name="password" type="password" placeholder="Password" value={password} onChange={onChange} />
        <InputForm
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={onChange}
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

const RegisterFormSecond = ({toggleForm, name, region, tel, onChange, onSubmit}) => {
  return (
    <>
      <Form className="formsecond" action="" onSubmit={onSubmit} >
        <TitleForm>Registration</TitleForm>
        <InputForm name="name" type="text" placeholder="Name" value={name } onChange={onChange} />
        <InputForm name="region" type="text" placeholder="City, region" value={region} onChange={onChange} />
        <InputForm
          name="tel"
          type="tel"
          placeholder="Mobile phone"
          value={tel}
          onChange={onChange}
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
