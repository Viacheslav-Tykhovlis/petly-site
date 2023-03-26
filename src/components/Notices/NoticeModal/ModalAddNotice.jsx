import { Formik } from 'formik';
import { useState } from 'react';

import { FormStep1 } from './ModalAddNotice/AddNoticeFormStep1';
import { FormStep2 } from './ModalAddNotice/AddNoticeFormStep2';
import {
  validationSchemaStep1,
  validationSchemaStep2,
} from './ModalAddNotice/schema';

const initialValues = {
  category: 'sell',
  title: '',
  name: '',
  birthdate: '',
  breed: '',
  sex: 'male',
  location: '',
  imageUrl: '',
  comments: '',
  price: '',
};

const ModalAddNotice = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState(initialValues);

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
        setFormValues({
          ...formValues,
          sex: values.sex,
          location: values.location,
          comments: values.comments,
        });
        console.log('handleSubmit:\n', { ...formValues, ...values });
        resetForm();
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
      onSubmit={handleSubmit}
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
              touched={formik.touched}
              errors={formik.errors}
              onNext={e => handleNext(e, formik.values, formik.validateForm)}
              values={formik.values}
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
