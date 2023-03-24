import styled from 'styled-components';

export const BoxLogOut = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-left: auto;
  background: #ffffff;
  border: 0px;
  align-sels: flex-end;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
    margin-left: 0;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 24px;
    margin-left: 0;
  }
`;

export const LogoutSpan = styled.span`
  margin-left: 8px;

  font-style: normal;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);

  &:focus,
  &:hover {
    color: #f59256;
  }
`;
