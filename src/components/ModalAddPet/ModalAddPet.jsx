import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { convertStringToDate } from '../../helpers/date';
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
import { useDispatch } from 'react-redux';
import { addPet } from 'redux/pets/operations';

const ModalAddPet = ({ closeModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      console.log('file in pet', file);
      fileReader = new FileReader();
      fileReader.onload = e => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const handleSubmit = async (values, { setSubmitting }) => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      const birthdate = convertStringToDate(values.birthdate);

      const data = new FormData();
      data.append('name', values.name);
      data.append('birthdate', birthdate);
      data.append('breed', values.breed);
      data.append('photo', values.photo);
      data.append('comments', values.comments);

      try {
        dispatch(addPet(...{ data }));
      } catch (error) {
        console.log('Failed to add pet:', error);
      }
      closeModal();
    }
    setSubmitting(false);
  };

  return (
    <Container>
      <CloseModalButton closeModal={closeModal} step={currentStep} />
      <Title step={currentStep}>Add pet</Title>

      <Formik
        initialValues={initialValues}
        validationSchema={
          currentStep === 1 ? validationSchemaStepOne : validationSchemaStepTwo
        }
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <FormStyled>
            {currentStep === 1 && <StepOne />}

            {currentStep === 2 && (
              <StepTwo>
                <UploadImageField
                  name="photo"
                  form="userPet"
                  label="Add photo and some comments"
                  fileDataURL={fileDataURL}
                  handleChange={e => {
                    setFile(e.currentTarget.files[0]);
                    setFieldValue('photo', e.currentTarget.files[0]);
                  }}
                />
                <CommentField name="comments" form="userPet" label="Comments" />
              </StepTwo>
            )}

            <ControlBox>
              {currentStep === 1 && (
                <>
                  <UniversalButton
                    name="filled"
                    onClick={() => setCurrentStep(2)}
                  >
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
                  <UniversalButton
                    name="transparent"
                    onClick={() => setCurrentStep(1)}
                  >
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
