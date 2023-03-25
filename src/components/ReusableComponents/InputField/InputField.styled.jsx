import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FieldStyle = styled(Field)`
  width: 100%;
  border-radius: 40px;
  cursor: pointer;
  margin-bottom: 8px;
  padding: 9px 28px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.backgroundFormInput};
  font-family: 'Manrope';
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeight.body};

  ${props => props.theme.mq.mobileOnly} {
    font-size: ${props => props.theme.fontSizes.xs};
    padding: 12px 14px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  @media screen and (max-width: 767px) {
    margin-bottom: 8px;
  }
  font-family: 'Manrope';
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.44;
  ${props => props.theme.mq.tablet} {
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 1.08;
    margin-top: 12px;
  }
`;

export const ErrorStyle = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  bottom: -3px;
  font-size: ${props => props.theme.fontSizes.xxxs};
  color: ${props => props.theme.colors.error};

  ${props => props.theme.mq.mobileOnly} {
    transform: translate(0px, 0px);
  }

  ${props => props.theme.mq.tablet} {
    font-size: ${props => props.theme.fontSizes.xxxs};
    bottom: -10px;
  }
`;

export const StyledSpan = styled.span`
  color: ${props => props.theme.colors.accent};
`;

export const FieldWrapper = styled.div`
  position: relative;
`;
