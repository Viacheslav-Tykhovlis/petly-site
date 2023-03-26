import { Form } from 'formik';
import {
  BtnsModalWrapper,
  CloseModalButton,
  InputGroupWrapper,
  InputWrapper,
  ModalBtnBack,
  ModalBtnNext,
  RadioWrapper,
  StyledInput,
  StyledModal,
  StyledSubtitle,
  StyledTextInputLabel,
  StyledTitle,
} from '../ModalAddNotice.styled';
import { FormikErrorMessage } from './FormikErrorMessage';
import { RadioOption } from './RadioOption';
import { StyledDatePicker } from './DatePicker';

export const FormStep1 = ({
  onNext,
  values: { category, title, name, birthdate, breed },
  handleChange,
  onClose,
  handleBlur,
  touched,
  errors,
  setFieldValue,
  onFocus,
}) => {
  return (
    <Form>
      <StyledModal>
        <CloseModalButton onClick={onClose} step={1} />
        <StyledTitle step={1}>Add pet</StyledTitle>
        <StyledSubtitle>
          Add a new pet advertisement and provide necessary details.
        </StyledSubtitle>
        <RadioWrapper>
          <RadioOption
            name="category"
            value="lost"
            id="lost"
            label="lost/found"
            checked={category === 'lost'}
            onChange={handleChange}
          />

          <RadioOption
            name="category"
            value="goodHands"
            id="goodHands"
            label="in good hands"
            checked={category === 'goodHands'}
            onChange={handleChange}
          />

          <RadioOption
            name="category"
            value="sell"
            id="sell"
            label="sell"
            checked={category === 'sell'}
            onChange={handleChange}
          />
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
              value={title}
              onChange={handleChange}
              onBlur={handleBlur}
              isvalidfield={touched.title && !errors.title}
            />
            <FormikErrorMessage name="title" />
          </InputWrapper>

          <InputWrapper>
            <StyledTextInputLabel htmlFor="name">Name pet</StyledTextInputLabel>
            <StyledInput
              type="text"
              name="name"
              placeholder="Type name pet"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}
              isvalidfield={touched.name && !errors.name}
            />
            <FormikErrorMessage name="name" />
          </InputWrapper>
          {category !== 'lost' && (
            <InputWrapper>
              <StyledDatePicker
                selected={birthdate}
                dateFormat="dd.MM.yyyy"
                onChange={date => {
                  setFieldValue('birthdate', date);
                }}
                onBlur={handleBlur}
                name="birthdate"
                id="birthdate"
                placeholderText="Type date of birth"
                autoComplete="off"
                isvalidfield={birthdate && !errors.birthdate}
              />
              <FormikErrorMessage name="birthdate" />
            </InputWrapper>
          )}
          <InputWrapper>
            <StyledTextInputLabel htmlFor="breed">Breed</StyledTextInputLabel>
            <StyledInput
              type="text"
              name="breed"
              placeholder="Type breed"
              value={breed}
              onChange={handleChange}
              onBlur={handleBlur}
              isvalidfield={touched.breed && !errors.breed}
            />
            <FormikErrorMessage name="breed" />
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
