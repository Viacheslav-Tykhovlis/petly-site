import styled from 'styled-components';
import { Form } from 'formik';
import { RxCross1 } from 'react-icons/rx';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 20px;
  ${props => props.theme.mq.tablet} {
    width: 608px;
    padding: 40px 80px;
  }
`;

export const CloseModalButton = ({ onClick, step }) => {
  return (
    <CloseButton onClick={onClick} step={step}>
      <RxCross1 />
    </CloseButton>
  );
};

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.mainBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  border: none;
  cursor: pointer;
  transition: all ${p => p.theme.animation.cubicBezier};

  &:hover {
    opacity: 0.9;
    transform: rotate(15deg);
  }
  svg {
    color: black;
    font-size: ${props => props.theme.fontSizes.l};
  }

  ${props => props.theme.mq.tablet} {
    width: 44px;
    height: 44px;
    /* top: ${p => (p.step === 1 ? '20px' : '24px')};
    right: ${p => (p.step === 1 ? '20px' : '24px')}; */
    svg {
      font-size: ${props => props.theme.fontSizes.xl};
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 1.37;
  margin-bottom: 20px;
  ${props => props.theme.mq.tablet} {
    font-size: 36px;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  width: 100%;
`;

export const ControlBox = styled.div`
  width: 100%;
  height: 92px;
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  justify-content: space-between;
  ${props => props.theme.mq.tablet} {
    height: 44px;
    display: flex;
    flex-direction: row;
    /* flex: grid; */
    gap: 0 20px;
    width: 380px;
    margin: 0 auto;
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
