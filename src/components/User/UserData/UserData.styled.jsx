import styled from 'styled-components';

export const ContainerUser = styled.div`
  padding-top: 20px;
  padding-right: 12px;
  padding-bottom: 20px;
  padding-left: 16px;

  width: 280px;
  height: 537px;

  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  background: #ffffff;

  @media screen and (min-width: 768px) {
    padding-top: 24px;
    padding-right: 40px;
    padding-bottom: 24px;
    padding-left: 32px;
    margin-left: -32px;
    width: 736px;
    height: 311px;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 0px 40px 40px 0px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 20px;
    padding-right: 16px;
    padding-bottom: 18px;
    padding-left: 16px;

    margin-left: -16px;
    width: 411px;
    height: 541px;
  }
`;

export const BoxUserData = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
    margin-bottom: 0px;
  }
`;
