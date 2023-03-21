import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 24px;
  background: #ffffff;
  padding: 0px;
  border: 0px;
  align-sels: flex-end;
  svg {
    color: #f59256;
  }

  &:focus,
  &:hover {
    svg {
      color: rgba(17, 17, 17, 0.6);
    }
  }
`;

export const LogoutBtnText = {
  fontStyle: 'normal',

  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.04em',

  color: 'rgba(17, 17, 17, 0.6)',
};

export const IconStyle = {
  height: '24px',
  width: '24px',
  opacity: 0.6,
  marginRight: '8px',
};
