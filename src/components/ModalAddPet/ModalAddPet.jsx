import { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { addPet } from 'redux/pets/operations';
import { getStateUsersId } from 'redux/users/selectors';
import { format } from 'date-fns';

const ModalAddPet = ({ closeModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const dispatch = useDispatch();
  const owner = useSelector(getStateUsersId);

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
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
      const dateBD = format(values.birthdate, 'dd.MM.yyyy');

      const data = new FormData();
      data.append('name', values.name);
      data.append('birthday', dateBD);
      data.append('breed', values.breed);
      data.append('photo', values.photo);
      data.append('comments', values.comments);
      data.append('owner', owner);

      try {
        dispatch(addPet(data));
      } catch (error) {
        console.log('Failed to add pet:', error);
      }
      closeModal();
    }
    setSubmitting(false);
  };

  return (
    <Container>
      <CloseModalButton closeModal={closeModal} />
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
              <UniversalButton
                name="filled"
                type="submit"
                width="100%"
                disabled={isSubmitting}
              >
                {currentStep < 2 ? <span>Next</span> : <span>Done</span>}
              </UniversalButton>

              {currentStep === 1 && (
                <UniversalButton name="transparent" onClick={closeModal}>
                  <span>Cancel</span>
                </UniversalButton>
              )}

              {currentStep === 2 && (
                <UniversalButton
                  name="transparent"
                  onClick={() => setCurrentStep(1)}
                >
                  <span>Back</span>
                </UniversalButton>
              )}
            </ControlBox>
          </FormStyled>
        )}
      </Formik>
    </Container>
  );
};

export default ModalAddPet;
