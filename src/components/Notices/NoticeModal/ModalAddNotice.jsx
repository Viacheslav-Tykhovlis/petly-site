import { ErrorMessage, Field, Form, Formik } from 'formik';
import femaleIcon from 'img/icons/female.png';
import maleIcon from 'img/icons/male.png';
import { useState } from 'react';
import {
  BtnsModalWrapper,
  CloseModalButton,
  FemaleIcon,
  InputGroupWrapper,
  InputTextGroupWrapper,
  InputWrapper,
  MaleIcon,
  ModalBtnBack,
  ModalBtnNext,
  PlusIcon,
  RadioSexBtnWrapper,
  RadioSexButton,
  RadioSexLabel,
  RadioSexTitle,
  RadioWrapper,
  StyledField,
  StyledFileInput,
  StyledInput,
  StyledLabel,
  StyledModal,
  StyledSubtitle,
  StyledTextInputLabel,
  StyledTextareaAutosize,
  StyledTitle,
  UploadButton,
} from './ModalAddNotice.styled';

import * as Yup from 'yup';

const validationSchemaStep1 = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(48, 'Maximum 48 characters')
    .required('Required field'),
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Required field, enter 2 to 16 characters'),
  birthdate: Yup.lazy((value, schema) => {
    const category = schema.parent.category;
    if (category !== 'lost') {
      return Yup.string()
        .matches(
          /^(0[1-9]|[12][0-9]|3[01])\.([01][0-9]|2[0-4])\.\d{4}$/,
          'Enter the birthdate in the format DD.MM.YYYY',
        )
        .required('Required field');
    } else {
      return Yup.string().matches(
        /^(0[1-9]|[12][0-9]|3[01])\.([01][0-9]|2[0-4])\.\d{4}$/,
        'Enter the birthdate in the format DD.MM.YYYY',
      );
    }
  }),
  breed: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(24, 'Maximum 24 characters')
    .required('Required field'),
});

const validationSchemaStep2 = Yup.object().shape({
  location: Yup.string()
    .matches(
      /^([a-zA-Zа-яА-ЯёЁ\s]+),\s*([a-zA-Zа-яА-ЯёЁ\s]+)$/,
      'Enter the city and region in the format "City, Region"',
    )
    .required('Required field'),
  comments: Yup.string()
    .min(8, 'Minimum 8 characters')
    .max(120, 'Maximum 120 characters')
    .required('Required field'),
  price: Yup.number()
    .positive('Price must be a positive number')
    .required('Required field'),
});

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
  price: '',
};

const FormStep1 = ({
  onNext,
  values,
  handleChange,
  onClose,
  handleBlur,
  touched,
  errors,
}) => {
  return (
    <Form>
      <StyledModal>
        <CloseModalButton onClick={onClose} step={1} />
        <StyledTitle step={1}>Add pet</StyledTitle>
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
            <StyledInput
              type="text"
              name="title"
              placeholder="Type name"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              isvalidfield={touched.title && !errors.title}
            />
            <ErrorMessage name="title">
              {msg => <div style={{ color: 'red' }}>{msg}</div>}
            </ErrorMessage>
          </InputWrapper>

          <InputWrapper>
            <StyledTextInputLabel htmlFor="name">Name pet</StyledTextInputLabel>
            <StyledInput
              type="text"
              name="name"
              placeholder="Type name pet"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              isvalidfield={touched.name && !errors.name}
            />
            <ErrorMessage name="name">
              {msg => <div style={{ color: 'red' }}>{msg}</div>}
            </ErrorMessage>
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
                value={values.birthdate}
                onChange={handleChange}
                onBlur={handleBlur}
                isvalidfield={touched.birthdate && !errors.birthdate}
              />
              <ErrorMessage name="birthdate">
                {msg => <div style={{ color: 'red' }}>{msg}</div>}
              </ErrorMessage>
            </InputWrapper>
          )}
          <InputWrapper>
            <StyledTextInputLabel htmlFor="breed">Breed</StyledTextInputLabel>
            <StyledInput
              type="text"
              name="breed"
              placeholder="Type breed"
              value={values.breed}
              onChange={handleChange}
              onBlur={handleBlur}
              isvalidfield={touched.breed && !errors.breed}
            />
            <ErrorMessage name="breed">
              {msg => <div style={{ color: 'red' }}>{msg}</div>}
            </ErrorMessage>
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

const FormStep2 = ({
  onBack,
  values,
  handleChange,
  onClose,
  handleBlur,
  onDone,
  touched,
  errors,
}) => {
  return (
    <Form>
      <StyledModal>
        <CloseModalButton onClick={onClose} step={2} />
        <StyledTitle step={2}>Add pet</StyledTitle>
        <StyledTextInputLabel>The sex:</StyledTextInputLabel>

        <RadioSexBtnWrapper>
          <RadioSexLabel htmlFor="male">
            <RadioSexButton
              type="radio"
              name="sex"
              value="male"
              id="male"
              checked={values.sex === 'male'}
              onChange={handleChange}
            />

            <MaleIcon src={maleIcon} alt="Male Icon" />
            <RadioSexTitle active={values.sex === 'male'}>Male</RadioSexTitle>
          </RadioSexLabel>

          <RadioSexLabel htmlFor="female">
            <RadioSexButton
              type="radio"
              name="sex"
              value="female"
              id="female"
              checked={values.sex === 'female'}
              onChange={handleChange}
            />

            <FemaleIcon src={femaleIcon} alt="Female Icon" />
            <RadioSexTitle active={values.sex === 'female'}>
              Female
            </RadioSexTitle>
          </RadioSexLabel>
        </RadioSexBtnWrapper>

        <InputTextGroupWrapper>
          <InputWrapper>
            <StyledTextInputLabel htmlFor="location">
              Location:
            </StyledTextInputLabel>
            <StyledInput
              type="text"
              name="location"
              placeholder="Type location"
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
              isvalidfield={touched.location && !errors.location}
            />
            <ErrorMessage name="location">
              {msg => <div style={{ color: 'red' }}>{msg}</div>}
            </ErrorMessage>
          </InputWrapper>

          <InputWrapper>
            <StyledTextInputLabel htmlFor="Price">Price:</StyledTextInputLabel>
            <StyledInput
              type="text"
              name="price"
              placeholder="Type price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              isvalidfield={touched.price && !errors.price}
            />
            <ErrorMessage name="price">
              {msg => <div style={{ color: 'red' }}>{msg}</div>}
            </ErrorMessage>
          </InputWrapper>
        </InputTextGroupWrapper>

        <StyledTextInputLabel htmlFor="file">
          Load the pet’s image
        </StyledTextInputLabel>

        <StyledFileInput>
          <Field
            as="input"
            type="file"
            name="file"
            id="file"
            style={{ display: 'none' }}
            onChange={handleChange}
          />
          <UploadButton htmlFor="file">
            <PlusIcon />
          </UploadButton>
        </StyledFileInput>

        <InputWrapper>
          <StyledTextInputLabel htmlFor="textarea">
            Comments
          </StyledTextInputLabel>

          <StyledTextareaAutosize
            name="comments"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.comments}
            placeholder="Type comment"
            minRows={1}
            maxRows={6}
            isvalidfield={touched.comments && !errors.comments}
          />
          <ErrorMessage name="comments">
            {msg => <div style={{ color: 'red' }}>{msg}</div>}
          </ErrorMessage>
        </InputWrapper>

        <BtnsModalWrapper>
          <ModalBtnNext type="submit" onClick={onDone}>
            Done
          </ModalBtnNext>
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

  const handleNext = async (e, values, validateForm) => {
    e.preventDefault();
    try {
      const errors = await validateForm(values);

      if (Object.keys(errors).length === 0) {
        console.log('step one:\n ', values);
        setFormValues(values);
        setStep(2);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e, formik) => {
    e.preventDefault();
    const { values, validateForm, resetForm } = formik;
    try {
      const errors = await validateForm(values);

      if (Object.keys(errors).length === 0) {
        setFormValues({
          ...formValues,
          sex: values.sex,
          location: values.location,
          comments: values.comments,
        });
        console.log('handleSubmit:\n', { ...formValues, ...values });
        resetForm();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <Formik
      initialValues={formValues}
      onSubmit={handleSubmit}
      validationSchema={
        step === 1 ? validationSchemaStep1 : validationSchemaStep2
      }
    >
      {formik => (
        <>
          {step === 1 ? (
            <FormStep1
              onNext={e => handleNext(e, formik.values, formik.validateForm)}
              values={formik.values}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              onClose={onClose}
              touched={formik.touched}
              errors={formik.errors}
            />
          ) : (
            <FormStep2
              onBack={handleBack}
              values={formik.values}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              onClose={onClose}
              onDone={e => handleSubmit(e, formik)}
              touched={formik.touched}
              errors={formik.errors}
            />
          )}
        </>
      )}
    </Formik>
  );
};

export default ModalAddNotice;
