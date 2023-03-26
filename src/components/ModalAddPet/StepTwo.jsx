import React from 'react';
import PropTypes from 'prop-types';

const StepTwo = ({ children }) => {
  return <>{children}</>;
};

export default StepTwo;

StepTwo.propTypes = {
  children: PropTypes.node.isRequired,
};
