import { ErrorMessage, Form } from 'formik';
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
} from '../ModalAddNotice.styled';
// CloseModalButton

export const FormStep1 = ({
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
