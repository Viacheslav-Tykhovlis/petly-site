import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addNotice } from 'redux/notices/noticesOperations';
import { FormStep1 } from './ModalAddNotice/AddNoticeFormStep1';
import { FormStep2 } from './ModalAddNotice/AddNoticeFormStep2';
import {
  validationSchemaStep1,
  validationSchemaStep2,
} from './ModalAddNotice/schema';
import { format } from 'date-fns';

const initialValues = {
  category: 'sell',
  title: '',
  name: '',
  birthdate: '',
  breed: '',
  sex: 'male',
  location: '',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s',
  comments: '',
  price: '0.1',
};

const ModalAddNotice = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState(initialValues);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

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

  const handleNext = async (e, values, validateForm) => {
    e.preventDefault();
    try {
      const errors = await validateForm(values);

      if (Object.keys(errors).length === 0) {
        setFormValues(values);
        setStep(2);
      } else {
        toast.error('Please fill all fields.😉');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e, formik) => {
    e.preventDefault();
    const { values, validateForm, resetForm } = formik;
    try {
      const errors = await validateForm(values);

      if (Object.keys(errors).length === 0) {
        const formattedValues = {
          ...formValues,
          ...values,
          image: fileDataURL || initialValues.image,
          birthdate: await format(formValues.birthdate, 'dd.MM.yyyy'),
        };

        const result = await dispatch(addNotice(formattedValues));
        if (result.error) {
          toast.error(result.payload + ' something went wrong');
        } else {
          resetForm();
          toast.success(
            'Pet added successfully,! 🥳 ' + result.payload.message,
          );
        }

        onClose();
        navigate('/notices/own');
      } else {
        toast.error('Please fill all fields. Even photo😉');
      }
    } catch (error) {
      console.log(error.message);
      toast.error('Something went wrong.');
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={
        step === 1 ? validationSchemaStep1 : validationSchemaStep2
      }
    >
      {formik => (
        <>
          {step === 1 ? (
            <FormStep1
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              onClose={onClose}
              onFocus={formik.onFocus}
              touched={formik.touched}
              errors={formik.errors}
              onNext={e => handleNext(e, formik.values, formik.validateForm)}
              values={formik.values}
              setFieldValue={formik.setFieldValue}
            />
          ) : (
            <FormStep2
              values={formik.values}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              onClose={onClose}
              touched={formik.touched}
              errors={formik.errors}
              onBack={handleBack}
              onDone={e => handleSubmit(e, formik)}
              setFile={setFile}
              setFieldValue={formik.setFieldValue}
              filedataurl={fileDataURL}
            />
          )}
        </>
      )}
    </Formik>
  );
};

export default ModalAddNotice;
