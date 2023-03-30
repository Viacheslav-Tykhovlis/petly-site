import styled from '@emotion/styled';
import { Form } from 'formik';
import { NavLink } from 'react-router-dom';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85%;
`;

export const ModalContent = styled.div`
  position: relative;
  overflow-y: auto;
  background-color: ${props => props.theme.colors.white};
  border-radius: 40px;
  padding: 60px 80px 40px 80px;
  width: 618px;

  box-shadow: ${props => props.theme.shadows.form};
  ${props => props.theme.mq.tablet} {
    margin-top: 0;
  }
  ${props => props.theme.mq.tabletOnly} {
    margin-top: 110px;
  }
  ${props => props.theme.mq.mobileOnly} {
    background-color: transparent;
    box-shadow: none;
    width: 100%;
    padding: 0 0 20px 0;
  }
`;

export const FormTitle = styled.h1`
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: 36px;
  line-height: 49px;
  letter-spacing: 0.04em;
  text-align: center;
  align-items: center;
  color: ${props => props.theme.colors.black};
  ${props => props.theme.mq.mobileOnly} {
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 33px;
  }
`;
export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 50px;
  margin-top: 40px;
  width: 100%;
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fontSizes.xxxs};
  font-weight: ${props => props.theme.fontWeight.body};
  line-height: 16px;
  letter-spacing: 0.04em;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.secondaryText};
`;

export const LoginLink = styled(NavLink)`
  color: #3091eb;
  text-decoration: none;
  margin-left: 5px;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  color: red;
  font-size: 14px;
  text-align: center;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  top: 120px;
  ${props => props.theme.mq.mobileOnly} {
    top: 50px;
    font-size: 12px;
  }
`;
