import React from 'react';
import PropTypes from 'prop-types';
import { SectionBox } from './Section.styled';

const Section = ({ children }) => {
  return <SectionBox>{children}</SectionBox>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
