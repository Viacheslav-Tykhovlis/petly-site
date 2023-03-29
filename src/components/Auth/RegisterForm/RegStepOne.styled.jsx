import styled from '@emotion/styled';

export const PasswordWrapper = styled.div`
  position: relative;
  padding: 0;
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 10px;
  bottom: 8px;
  transform: translateY(-15%);
  border: none;
  background: none;
  font-size: 20px;
  color: ${props => props.theme.colors.secondaryText};
  cursor: pointer;
  z-index: 10;
`;
