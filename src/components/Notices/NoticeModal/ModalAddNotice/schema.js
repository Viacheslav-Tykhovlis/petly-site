import * as Yup from 'yup';

const lettersOnly = /^([a-zA-Zа-яА-ЯёЁіІїЇґҐ\s,.\-'"’]+)$/;

export const validationSchemaStep1 = Yup.object().shape({
  title: Yup.string()
    .matches(lettersOnly, 'Only letters are allowed')
    .min(2, 'Minimum 2 characters')
    .max(48, 'Maximum 48 characters')
    .required('Required field'),
  name: Yup.string()
    .matches(lettersOnly, 'Only letters are allowed')
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Required field, enter 2 to 16 characters'),
  birthdate: Yup.date()
    .typeError('Enter the birthdate in the format DD.MM.YYYY')
    .required('Required field'),
  breed: Yup.string()
    .matches(lettersOnly, 'Only letters are allowed')
    .min(2, 'Minimum 2 characters')
    .max(35, 'Maximum 35 characters')
    .required('Required field'),
});

export const validationSchemaStep2 = Yup.object().shape({
  location: Yup.string()
    .matches(
      /^([a-zA-Zа-яА-ЯёЁіІїЇґҐ\s]+),\s*([a-zA-Zа-яА-ЯёЁіІїЇґҐ\s]+)$/,
      'Enter the city and region in the format "City, Region"',
    )
    .required('Required field'),
  comments: Yup.string()
    .min(8, 'Minimum 8 characters')
    .max(120, 'Maximum 120 characters')
    .required('Required field'),
  price: Yup.lazy((value, schema) => {
    const category = schema.parent.category;
    if (category === 'sell') {
      return Yup.number()
        .positive('Price must be a positive number')
        .required('Required field');
    } else {
      return Yup.number().positive('Price must be a positive number');
    }
  }),
});
