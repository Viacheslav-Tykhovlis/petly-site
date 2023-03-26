import * as Yup from 'yup';

export const validationSchemaStep1 = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(48, 'Maximum 48 characters')
    .required('Required field'),
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Required field, enter 2 to 16 characters'),
  birthdate: Yup.lazy((value, schema) => {
    const category = schema.parent.category;
    if (category !== 'lost') {
      return Yup.string()
        .matches(
          /^(0[1-9]|[12][0-9]|3[01])\.([01][0-9]|2[0-4])\.\d{4}$/,
          'Enter the birthdate in the format DD.MM.YYYY',
        )
        .required('Required field');
    } else {
      return Yup.string().matches(
        /^(0[1-9]|[12][0-9]|3[01])\.([01][0-9]|2[0-4])\.\d{4}$/,
        'Enter the birthdate in the format DD.MM.YYYY',
      );
    }
  }),
  breed: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(24, 'Maximum 24 characters')
    .required('Required field'),
});

export const validationSchemaStep2 = Yup.object().shape({
  location: Yup.string()
    .matches(
      /^([a-zA-Zа-яА-ЯёЁ\s]+),\s*([a-zA-Zа-яА-ЯёЁ\s]+)$/,
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
