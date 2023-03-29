import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

export const DateBox = styled.div`
  position: relative;
  margin-bottom: 28px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  margin-top: 6px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.44;
  ${props => props.theme.mq.tablet} {
    font-size: ${props => props.theme.fontSizes.l};
    margin-bottom: 12px;
  }
`;

export const ErrorData = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  bottom: -3px;
  font-size: ${props => props.theme.fontSizes.xxxxs};
  color: red;

  ${props => props.theme.mq.mobileOnly} {
    transform: translate(0px, 0px);
  }

  ${props => props.theme.mq.tablet} {
    font-size: ${props => props.theme.fontSizes.xxxs};
    bottom: -10px;
  }
`;
