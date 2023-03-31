import * as Yup from 'yup';

// Values for Formik
export const initialValues = {
  name: '',
  birthdate: '',
  breed: '',
  photo: '',
  comments: '',
};

// Yup validation
export const validationSchemaStepOne = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      'Only letters can be accepted',
    )
    .min(2, 'Name should be at least 2 characters long')
    .max(16, 'Name should be up to 16 characters long'),
  birthdate: Yup.mixed().required('Birth date is required'),
  breed: Yup.string()
    .required('Breed is required')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      'Only letters can be accepted',
    )
    .min(2, 'Breed should be at least 2 characters long')
    .max(16, 'Breed should be up to 16 characters long'),
});

export const validationSchemaStepTwo = Yup.object().shape({
  photo: Yup.mixed().required('Please add the picture'),
  comments: Yup.string()
    .required('Comments is required')
    .min(8, 'Title should be at least 8 characters long')
    .max(120, 'Title should be up to 120 characters long'),
});
