import femaleIcon from 'img/icons/female.png';
import maleIcon from 'img/icons/male.png';
import { Form, ErrorMessage, Field } from 'formik';
import {
  StyledModal,
  CloseModalButton,
  StyledTitle,
  StyledTextInputLabel,
  RadioSexBtnWrapper,
  RadioSexLabel,
  RadioSexButton,
  MaleIcon,
  RadioSexTitle,
  FemaleIcon,
  InputTextGroupWrapper,
  InputWrapper,
  StyledInput,
  StyledFileInput,
  UploadButton,
  PlusIcon,
  StyledTextareaAutosize,
  BtnsModalWrapper,
  ModalBtnNext,
  ModalBtnBack,
} from '../ModalAddNotice.styled';

export const FormStep2 = ({
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

          {values.category === 'sell' && (
            <InputWrapper>
              <StyledTextInputLabel htmlFor="Price">
                Price:
              </StyledTextInputLabel>
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
          )}
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
