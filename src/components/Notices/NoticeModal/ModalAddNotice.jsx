import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import {
  BtnsModalWrapper,
  CloseModalButton,
  InputGroupWrapper,
  InputWrapper,
  ModalBtnBack,
  ModalBtnNext,
  RadioWrapper,
  StyledField,
  StyledInput,
  StyledLabel,
  StyledModal,
  StyledSubtitle,
  StyledTextInputLabel,
  StyledTitle,
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
        <CloseModalButton onClick={onClose} />
        <StyledTitle>Add pet</StyledTitle>
        <StyledSubtitle>
          Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet
          consectetur
        </StyledSubtitle>
        <RadioWrapper>
          <StyledLabel htmlFor="lost" selected={values.category === 'lost'}>
            <StyledField
              type="radio"
              name="category"
              value="lost"
              id="lost"
              checked={values.category === 'lost'}
              onChange={handleChange}
            />
            lost/found
          </StyledLabel>

          <StyledLabel
            htmlFor="goodHands"
            selected={values.category === 'goodHands'}
          >
            <StyledField
              type="radio"
              name="category"
              value="goodHands"
              id="goodHands"
              checked={values.category === 'goodHands'}
              onChange={handleChange}
            />
            in good hands
          </StyledLabel>

          <StyledLabel htmlFor="sell" selected={values.category === 'sell'}>
            <StyledField
              type="radio"
              name="category"
              value="sell"
              id="sell"
              checked={values.category === 'sell'}
              onChange={handleChange}
            />
            sell
          </StyledLabel>
        </RadioWrapper>

        <InputGroupWrapper>
          <InputWrapper>
            <StyledTextInputLabel htmlFor="title">
              Title of ad
            </StyledTextInputLabel>
            <StyledInput type="text" name="title" placeholder="Type name pet" />
          </InputWrapper>
          <InputWrapper>
            <StyledTextInputLabel htmlFor="name">Name pet</StyledTextInputLabel>
            <StyledInput type="text" name="name" placeholder="Type name pet" />
          </InputWrapper>
          {values.category !== 'lost' && (
            <InputWrapper>
              <StyledTextInputLabel htmlFor="birthdate">
                Date of birth
              </StyledTextInputLabel>
              <StyledInput
                type="text"
                name="birthdate"
                placeholder="Type date of birth"
              />
            </InputWrapper>
          )}
          <InputWrapper>
            <StyledTextInputLabel htmlFor="breed">Breed</StyledTextInputLabel>
            <StyledInput type="text" name="breed" placeholder="Type breed" />
          </InputWrapper>
        </InputGroupWrapper>

        <BtnsModalWrapper>
          <ModalBtnNext type="submit" onClick={onNext}>
            Next
          </ModalBtnNext>
          <ModalBtnBack type="button" onClick={onClose}>
            Cancel
          </ModalBtnBack>
        </BtnsModalWrapper>
      </StyledModal>
    </Form>
  );
};

const FormStep2 = ({ onBack, values, handleChange, onClose }) => {
  return (
    <Form>
      <StyledModal>
        <CloseModalButton onClick={onClose} />
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

        <BtnsModalWrapper>
          <ModalBtnNext type="submit">Done</ModalBtnNext>
          <ModalBtnBack type="button" onClick={onBack}>
            Back
          </ModalBtnBack>
        </BtnsModalWrapper>
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
