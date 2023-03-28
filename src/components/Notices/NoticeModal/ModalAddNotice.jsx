import { Formik } from 'formik';
import { useState } from 'react';

import { FormStep1 } from './ModalAddNotice/AddNoticeFormStep1';
import { FormStep2 } from './ModalAddNotice/AddNoticeFormStep2';
import {
  validationSchemaStep1,
  validationSchemaStep2,
} from './ModalAddNotice/schema';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/noticesOperations';
import { toast } from 'react-toastify';

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
  price: '',
};

const ModalAddNotice = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState(initialValues);
  const dispatch = useDispatch();

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
        const formattedValues = {
          ...formValues,
          ...values,
          // birthdate: format(formValues.birthdate, 'dd-MM-yyyy'),
        };
        console.log('handleSubmit:\n', formattedValues);
        dispatch(addNotice(formattedValues));
        resetForm();
        toast.success('Pet added successfully! 🥳');
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
            />
          )}
        </>
      )}
    </Formik>
  );
};

export default ModalAddNotice;
