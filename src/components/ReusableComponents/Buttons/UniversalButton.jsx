import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './UniversalButton.styled';

// name: 'transparent' | 'filled' | 'learnMore'
const UniversalButton = ({
  type = 'button',
  onClick,
  children,
  name,
  width = '100%',
  selected,
}) => {
  return (
    <ButtonStyled
      name={name}
      type={type}
      onClick={onClick}
      width={width}
      selected={selected}
    >
      {children}
    </ButtonStyled>
  );
};

UniversalButton.propTypes = {
  width: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string,
  selected: PropTypes.bool,
};

export default UniversalButton;
