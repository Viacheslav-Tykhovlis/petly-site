import { useState } from 'react';
import { Formik } from 'formik';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import {
  CloseModalButton,
  Container,
  ControlBox,
  FormStyled,
  Title,
} from './ModalAddPet.styled';
import {
  initialValues,
  validationSchemaStepOne,
  validationSchemaStepTwo,
} from './Validation';
import UniversalButton from 'components/ReusableComponents/Buttons/UniversalButton';
import UploadImageField from 'components/ReusableComponents/UploadImageField/UploadImageField';
import CommentField from 'components/ReusableComponents/CommentField/CommentField';

const ModalAddPet = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  // const [file, setFile] = useState(null);
  // const [fileDataURL, setFileDataURL] = useState(null);

  // useEffect(() => {
  //   document.body.classList.add('modal-open');
  // }, []);

  // const handleCloseModal = () => {
  //   document.body.classList.remove('modal-open');
  // };

  // const handleSubmit = async (values, { setSubmitting }) => {
  //   try {
  //   } catch (error) {
  //     console.log(err.message);
  //   }
  //   onClose();
  //   setSubmitting(false);
  // };

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <Container>
      <CloseModalButton onClick={onClose} step={currentStep} />
      <Title>Add pet</Title>

      <Formik
        initialValues={initialValues}
        validationSchema={
          currentStep === 1 ? validationSchemaStepOne : validationSchemaStepTwo
        }
        // onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <FormStyled>
            {currentStep === 1 && (
              <StepOne handleNext={handleNext} onClose={onClose} />
            )}
            {currentStep === 2 && (
              <StepTwo>
                <UploadImageField
                  name="photo"
                  form="userPet"
                  label="Add photo and some comments"
                  // fileDataURL={fileDataURL}
                  // handleChange={e => {
                  //   setFile(e.currentTarget.files[0]);
                  //   setFieldValue('photo', e.currentTarget.files[0]);
                  // }}
                />
                <CommentField name="comments" form="userPet" />
              </StepTwo>
            )}

            <ControlBox>
              {currentStep === 1 && (
                <UniversalButton
                  name="transparent"
                  type="button"
                  width="100%"
                  onClick={onClose}
                >
                  <span>Cancel</span>
                </UniversalButton>
              )}
              {currentStep === 2 && (
                <UniversalButton
                  name="transparent"
                  type="button"
                  width="100%"
                  onClick={handleBack}
                >
                  <span>back</span>
                </UniversalButton>
              )}
              <UniversalButton
                name="filled"
                type="submit"
                width="100%"
                disabled={isSubmitting}
              >
                {currentStep < 2 ? <span> next</span> : <span>done</span>}
              </UniversalButton>
            </ControlBox>
          </FormStyled>
        )}
      </Formik>
    </Container>
  );
};

export default ModalAddPet;
