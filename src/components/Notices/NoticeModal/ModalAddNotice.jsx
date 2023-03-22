import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  InputGroupWrapper,
  InputWrapper,
  RadioWrapper,
  StyledInput,
  StyledModal,
} from './ModalAddNotice.styled';

const initialValues = {
  category: 'sell',
  title: '',
  name: '',
  birthdate: '',
  breed: '',
  sex: 'male',
  location: '',
  imageUrl: '',
  comments: '',
};

const FormStep1 = ({ onNext, values, handleChange, onClose }) => {
  return (
    <Form>
      <StyledModal>
        <button type="button" onClick={onClose}>
          X
        </button>
        <h1>Add pet</h1>
        <h3>
          Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet
          consectetur
        </h3>
        <RadioWrapper>
          <label htmlFor="lost">lost/found</label>
          <Field
            type="radio"
            name="category"
            value="lost"
            id="lost"
            checked={values.category === 'lost'}
            onChange={handleChange}
          />

          <label htmlFor="goodHands"> in good hands</label>
          <Field
            type="radio"
            name="category"
            value="goodHands"
            id="goodHands"
            checked={values.category === 'goodHands'}
            onChange={handleChange}
          />

          <label htmlFor="sell">sell</label>
          <Field
            type="radio"
            name="category"
            value="sell"
            id="sell"
            checked={values.category === 'sell'}
            onChange={handleChange}
          />
        </RadioWrapper>

        <InputGroupWrapper>
          <InputWrapper>
            <label htmlFor="title">Title of ad</label>
            <StyledInput type="text" name="title" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="name">Name pet</label>
            <StyledInput type="text" name="name" />
          </InputWrapper>
          {values.category !== 'lost' && (
            <InputWrapper>
              <label htmlFor="birthdate">Date of birth</label>
              <StyledInput type="text" name="birthdate" />
            </InputWrapper>
          )}
          <InputWrapper>
            <label htmlFor="breed">Breed</label>
            <StyledInput type="text" name="breed" />
          </InputWrapper>
        </InputGroupWrapper>

        <>
          <button type="submit" onClick={onNext}>
            Next
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </>
      </StyledModal>
    </Form>
  );
};

const FormStep2 = ({ onBack, values, handleChange, onClose }) => {
  return (
    <Form>
      <StyledModal>
        <button type="button" onClick={onClose}>
          X
        </button>
        <h1>Add pet</h1>
        <RadioWrapper>
          <h3>The sex:</h3>
          <label htmlFor="male">Male</label>
          <Field
            type="radio"
            name="sex"
            value="male"
            id="male"
            checked={values.sex === 'male'}
            onChange={handleChange}
          />

          <label htmlFor="female">Female</label>
          <Field
            type="radio"
            name="sex"
            value="female"
            id="female"
            checked={values.sex === 'female'}
            onChange={handleChange}
          />
        </RadioWrapper>

        <InputWrapper>
          <label htmlFor="location">Location</label>
          <StyledInput type="text" name="location" />
        </InputWrapper>

        <label htmlFor="file">Load the pet’s image</label>
        <Field type="file" name="file" />

        <label htmlFor="textarea">Comments</label>
        <Field
          as="textarea"
          name="comments"
          onChange={handleChange}
          value={values.comments}
        />

        <button type="submit">Done</button>
        <button type="button" onClick={onBack}>
          Back
        </button>
      </StyledModal>
    </Form>
  );
};

const ModalAddNotice = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState(initialValues);

  const handleSubmitStep1 = values => {
    console.log('step one:\n ', values);
    setFormValues(values);
    setStep(2);
  };

  const handleSubmitStep2 = values => {
    setFormValues({
      ...formValues,
      sex: values.sex,
      location: values.location,
      comments: values.comments,
    });
    console.log('handleSubmitStep2:\n', { ...formValues, ...values });
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <Formik initialValues={formValues} onSubmit={handleSubmitStep2}>
      {({ values, handleChange }) => (
        <>
          {step === 1 ? (
            <FormStep1
              onNext={() => handleSubmitStep1(values)}
              values={values}
              handleChange={handleChange}
              onClose={onClose}
            />
          ) : (
            <FormStep2
              onBack={handleBack}
              values={values}
              handleChange={handleChange}
              onClose={onClose}
            />
          )}
        </>
      )}
    </Formik>
  );
};

export default ModalAddNotice;
