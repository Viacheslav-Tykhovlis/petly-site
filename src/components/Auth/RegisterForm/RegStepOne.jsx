import React from 'react';
import InputField from 'components/ReusableComponents/InputField/InputField';

const RegStepOne = () => {
  return (
    <>
      <InputField
        name="email"
        type="email"
        placeholder="Email"
        autocomplete="email"
      />

      <InputField
        name="password"
        type="password"
        placeholder={'Password'}
        autocomplete="new-password"
      />

      <InputField
        name="confirmPassword"
        type="password"
        placeholder={'Confirm Password'}
        autocomplete="new-password"
      />
    </>
  );
};

export default RegStepOne;
