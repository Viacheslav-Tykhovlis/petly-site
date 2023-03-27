import styled from '@emotion/styled';
import { Form } from 'formik';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 20px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 40px 80px;
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  text-align: center;
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 1.37;

  margin-bottom: ${p => (p.step === 1 ? '28px' : '20px')};

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: ${p => (p.step === 1 ? '40px' : '20px')};
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  width: 100%;
`;

export const ControlBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    width: 380px;
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
    margin-top: 12px;
  }
`;
