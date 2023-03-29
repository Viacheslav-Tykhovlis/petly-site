import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { useField } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerInput } from './DataPicker.styled';

const MyDatePicker = ({ name }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      selected={value}
      onChange={date => setValue(date)}
      placeholderText={'Select date'}
      dateFormat="dd.MM.yyyy"
      maxDate={new Date()}
      customInput={<DatePickerInput />}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
};

MyDatePicker.propTypes = {
  name: PropTypes.string,
};
export default MyDatePicker;
