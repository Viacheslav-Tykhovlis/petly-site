import styled from '@emotion/styled';

export const DatePickerInput = styled.input`
  width: 100%;
  border-radius: 40px;

  cursor: pointer;

  margin-bottom: 10px;

  border: 1px solid ${props => props.theme.colors.borderColor};
  background-color: ${props => props.theme.colors.backgroundFormInput};
  font-family: 'Manrope';
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeight.body};
  color: ${props => props.theme.colors.primaryText};

  padding-left: 28px;
  padding-right: 28px;
  padding-top: 9px;
  padding-bottom: 9px;
  ${props => props.theme.mq.mobileOnly} {
    font-size: ${props => props.theme.fontSizes.xxs};
    padding: 12px 14px;
  }
`;
