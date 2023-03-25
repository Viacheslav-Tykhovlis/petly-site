import React from 'react';
import InputField from 'components/ReusableComponents/InputField/InputField';

const StepOne = () => {
  return (
    <>
      <InputField
        label="Name pet"
        id="name"
        type="text"
        name="name"
        placeholder="Type name pet"
        span="*"
      />

      <InputField
        label="Date of birth"
        id="birthdate"
        type="text"
        name="birthdate"
        placeholder="Type date of birth"
        span="*"
      />

      <InputField
        label="Breed"
        id="breed"
        type="text"
        name="breed"
        placeholder="Type breed"
        span="*"
      />
    </>
  );
};

export default StepOne;
