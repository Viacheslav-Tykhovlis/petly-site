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

// export const CommentsBox = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 8px;
// `;

// export const FieldStyled = styled(Field)`
//   min-height: 100px;
//   border-radius: 20px;
//   padding: 10px 20px 10px 14px;
//   background-color: ${theme.colors.mainBackground};
//   border: 1px solid ${theme.colors.borderColor};
//   font-family: ${theme.fontFamily.manrope};
//   font-style: normal;
//   font-weight: ${theme.fontWeight.normal};
//   font-size: ${theme.fontSizes.xxs};
//   line-height: 19px;
//    ${props => props.theme.mq.tablet} {
//     font-size: ${theme.fontSizes.xs};
//   }
// `;

// export const DateBox = styled.div`
//   position: relative;
// `;

// export const Label = styled.label`
//   display: block;
//   margin-bottom: 8px;
//   margin-top: 6px;
//   font-family: ${theme.fontFamily.manrope};
//   font-style: normal;
//   font-weight: ${theme.fontWeight.medium};
//   font-size: ${theme.fontSizes.s};
//   line-height: 1.44;
//    ${props => props.theme.mq.tablet} {
//     font-size: ${theme.fontSizes.l};
//     margin-bottom: 12px;
//     margin-top: 20px;
//   }
// `;

// export const LabelStyled = styled.label`
//   margin-right: auto;
//   margin-left: auto;
//   font-family: ${theme.fontFamily.manrope};
//   font-style: normal;
//   font-weight: ${theme.fontWeight.medium};
//   font-size: ${theme.fontSizes.xs};
//   line-height: 1.44;
//   @ ${props => props.theme.mq.tablet} {
//     font-size: ${theme.fontSizes.m};
//   }
// `;

// export const Span = styled.span`
//   font-family: ${theme.fontFamily.manrope};
//   font-style: normal;
//   font-weight: ${theme.fontWeight.medium};
//   font-size: ${theme.fontSizes.xs};
//   line-height: 1.37;
//   @media (min-width: ${breakpoints[1]}px) {
//     font-size: ${theme.fontSizes.m};
//   }
// `;

// export const InputFile = styled(Field)``;

// export const ErrorData = styled(ErrorMessage)`
//   position: absolute;
//   left: 0;
//   bottom: -3px;
//   font-size: ${theme.fontSizes.xxxxs};
//   color: red;
//   ${theme.mq.mobileOnly} {
//     transform: translate(0px, 0px);
//   }
//   @media (min-width: ${breakpoints[1]}px) {
//     font-size: ${theme.fontSizes.xxxs};
//     bottom: -10px;
//   }
// `;
