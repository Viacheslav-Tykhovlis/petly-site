import { useState } from 'react';
import { Formik } from 'formik';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { Container, ControlBox, FormStyled, Title } from './ModalAddPet.styled';
import {
  initialValues,
  validationSchemaStepOne,
  validationSchemaStepTwo,
} from './Validation';
import UniversalButton from 'components/ReusableComponents/Buttons/UniversalButton';
import UploadImageField from 'components/ReusableComponents/UploadImageField/UploadImageField';
import CommentField from 'components/ReusableComponents/CommentField/CommentField';
import { CloseModalButton } from 'components/ReusableComponents/Buttons/CloseModalButton';

const ModalAddPet = ({ closeModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  console.log(currentStep);
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
      <CloseModalButton closeModal={closeModal} step={currentStep} />
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
              <StepOne handleNext={handleNext} onClose={closeModal} />
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
                <CommentField
                  name="comments"
                  form="userPet"
                  comment="Comments"
                />
              </StepTwo>
            )}

            <ControlBox>
              {currentStep === 1 && (
                <>
                  <UniversalButton name="filled" onClick={handleNext}>
                    <span>Next</span>
                  </UniversalButton>
                  <UniversalButton name="transparent" onClick={closeModal}>
                    <span>Cancel</span>
                  </UniversalButton>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <UniversalButton name="filled" disabled={isSubmitting}>
                    <span>Done</span>
                  </UniversalButton>
                  <UniversalButton name="transparent" onClick={handleBack}>
                    <span>Back</span>
                  </UniversalButton>
                </>
              )}
            </ControlBox>
          </FormStyled>
        )}
      </Formik>
    </Container>
  );
};

export default ModalAddPet;
