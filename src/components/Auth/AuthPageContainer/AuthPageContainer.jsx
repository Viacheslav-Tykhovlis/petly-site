import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './AuthPageContainer.styled';

const AuthPageContainer = ({ children }) => {
  return <Wrapper transition={{ duration: 0.3 }}>{children}</Wrapper>;
};

AuthPageContainer.propTypes = {
  children: PropTypes.node,
};

export default AuthPageContainer;
