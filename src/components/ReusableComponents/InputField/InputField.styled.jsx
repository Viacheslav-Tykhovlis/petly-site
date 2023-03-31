import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const FieldWrapper = styled.div`
  position: relative;
`;

export const FieldStyle = styled(Field)`
  @media screen and (max-width: 767px) {
    padding-left: 14px;
    margin-bottom: 16px;
    font-size: ${props => props.theme.fontSizes.xxs};
  }

  margin-bottom: 28px;
  width: 100%;
  border-radius: 40px;
  cursor: pointer;
  padding: 9px 28px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.backgroundFormInput};
  font-family: 'Manrope';
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeight.body};
  outline-color: ${props => props.theme.colors.borderColor};

  @media screen and (min-width: 768px) {
    padding: 12px 14px;
    font-size: ${props => props.theme.fontSizes.xs};
  }
`;

export const Label = styled.label`
  @media screen and (max-width: 767px) {
    margin-bottom: 8px;
  }

  display: block;
  margin-bottom: 12px;
  font-family: 'Manrope';
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.44;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 1.08;
  }
`;

export const ErrorStyle = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  bottom: -3px;
  font-size: ${props => props.theme.fontSizes.xxxs};
  color: ${props => props.theme.colors.error};

  /* @media screen and (min-width: 767px) {
    transform: translate(0px, 0px);
  } */

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xxs};
    bottom: 2px;
  }
`;

export const StyledSpan = styled.span`
  color: ${props => props.theme.colors.accent};
`;
