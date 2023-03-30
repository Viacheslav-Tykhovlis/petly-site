import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  initialValues,
  validationSchemaStepOne,
  validationSchemaStepTwo,
} from './Validation';
import RegStepOne from './RegStepOne';
import RegStepTwo from './RegStepTwo';
import {
  ModalContent,
  ModalWrapper,
  FormWrapper,
  ButtonWrapper,
  FormTitle,
  Paragraph,
  LoginLink,
} from './RegisterForm.styled';
import UniversalButton from 'components/ReusableComponents/Buttons/UniversalButton';
import { useDispatch } from 'react-redux';
import { register } from 'redux/register/operations';
import { logIn } from 'redux/login/logIn-operations';

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);

    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      const credentials = {
        name: values.name,
        city: values.city || null,
        phone: values.phone || null,
        email: values.email,
        password: values.password,
      };

      await dispatch(register(credentials));
      await dispatch(logIn({ email: values.email, password: values.password }));
      resetForm();
    }
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <FormTitle>Registration</FormTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={
            currentStep === 1
              ? validationSchemaStepOne
              : validationSchemaStepTwo
          }
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => {
            return (
              <FormWrapper>
                {currentStep === 1 && <RegStepOne />}
                {currentStep === 2 && (
                  <RegStepTwo
                    value={values.city}
                    setFieldValue={setFieldValue}
                  />
                )}
                <ButtonWrapper>
                  <UniversalButton
                    name="filled"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {currentStep < 2 ? <p>Next</p> : <p>Register</p>}
                  </UniversalButton>
                  {currentStep > 1 && (
                    <UniversalButton
                      name="transparent"
                      onClick={() => setCurrentStep(currentStep - 1)}
                    >
                      Back
                    </UniversalButton>
                  )}
                </ButtonWrapper>
              </FormWrapper>
            );
          }}
        </Formik>
        <Paragraph>
          Already have an account?
          <LoginLink to="/login">Login</LoginLink>
        </Paragraph>
      </ModalContent>
    </ModalWrapper>
  );
};

export default RegistrationForm;
