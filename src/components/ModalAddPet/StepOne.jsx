import React from 'react';
import InputField from 'components/ReusableComponents/InputField/InputField';
import MyDataPicker from 'components/ReusableComponents/DataPicker/DatePicker';
import { DateBox, ErrorData, Label } from './StepOne.styled';

const StepOne = () => {
  return (
    <>
      <InputField
        type="text"
        label="Name pet"
        id="name"
        name="name"
        placeholder="Type name pet"
        span="*"
      />

      <DateBox>
        <Label>
          Date of birth
          <span>*</span>
        </Label>
        <MyDataPicker
          name="birthdate"
          label="Date of birth*"
          placeholderText="Type date of birth"
        />
        <ErrorData name="birthdate" component="div" />
      </DateBox>

      <InputField
        type="text"
        label="Breed"
        id="breed"
        name="breed"
        placeholder="Type breed"
        span="*"
      />
    </>
  );
};

export default StepOne;
