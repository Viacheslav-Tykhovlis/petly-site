import React from 'react';
import InputField from 'components/ReusableComponents/InputField/InputField';

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
      <InputField
        type="text"
        label="Date of birth"
        id="birthdate"
        name="birthdate"
        placeholder="Type date of birth"
        span="*"
      />
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
