import { Field, Form } from 'formik';
import femaleIcon from 'img/icons/female.png';
import maleIcon from 'img/icons/male.png';
import {
  BtnsModalWrapper,
  CloseModalButton,
  InputTextGroupWrapper,
  InputWrapper,
  ModalBtnBack,
  ModalBtnNext,
  PlusIcon,
  RadioSexBtnWrapper,
  StyledFileInput,
  StyledInput,
  StyledModal,
  StyledTextInputLabel,
  StyledTextareaAutosize,
  StyledTitle,
  UploadButton,
} from '../ModalAddNotice.styled';
import { FormikErrorMessage } from './FormikErrorMessage';
import { SexRadioButton } from './SexRadioButton ';

export const FormStep2 = ({
  onBack,
  values: { sex, location, category, price, comments },
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
          <SexRadioButton
            id="male"
            value="male"
            label="Male"
            iconSrc={maleIcon}
            altText="Male Icon"
            checked={sex === 'male'}
            onChange={handleChange}
          />

          <SexRadioButton
            id="female"
            value="female"
            label="Female"
            iconSrc={femaleIcon}
            altText="Female Icon"
            checked={sex === 'female'}
            onChange={handleChange}
          />
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
              value={location}
              onChange={handleChange}
              onBlur={handleBlur}
              isvalidfield={touched.location && !errors.location}
            />
            <FormikErrorMessage name="location" />
          </InputWrapper>

          {category === 'sell' && (
            <InputWrapper>
              <StyledTextInputLabel htmlFor="Price">
                Price:
              </StyledTextInputLabel>
              <StyledInput
                type="text"
                name="price"
                placeholder="Type price"
                value={price}
                onChange={handleChange}
                onBlur={handleBlur}
                isvalidfield={touched.price && !errors.price}
              />
              <FormikErrorMessage name="price" />
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
            value={comments}
            placeholder="Type comment"
            minRows={1}
            maxRows={6}
            isvalidfield={touched.comments && !errors.comments}
          />
          <FormikErrorMessage name="comments" />
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