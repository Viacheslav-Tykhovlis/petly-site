import styled from '@emotion/styled';
import { Field } from 'formik';
import { RxCross1 } from 'react-icons/rx';
import { TfiPlus } from 'react-icons/tfi';
import { Form } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

export const StyledForm = styled(Form)`
  top: 160px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #fdf7f2;
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
    color: #000;
    font-size: 22px;
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    top: ${p => (p.step === 1 ? '20px' : '24px')};
    right: ${p => (p.step === 1 ? '20px' : '24px')};
    svg {
      font-size: 27px;
    }
  }
`;

export const CloseModalButton = ({ onClick, step }) => {
  return (
    <CloseButton type="button" onClick={onClick} step={step}>
      <RxCross1 />
    </CloseButton>
  );
};

export const StyledTextInputLabel = styled.label`
  font-size: 18px;
  line-height: 1.47;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.1;
  }
`;

export const StyledTitle = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: ${p => (p.step === 1 ? '20px' : '40px')};
  }
`;

export const StyledSubtitle = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 28px;
  }
`;

export const StyledModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${p => p.theme.colors.white};
  width: 280px;
  padding: 40px 20px;
  border-radius: 20px;
  overflow: hidden;
  top: 160px;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 40px 80px;
    top: 50%;
  }

  @media screen and (min-width: 1280px) {
    top: ${({ style, step }) =>
      style.top !== undefined && step === 1
        ? style.top
        : style.top !== undefined && step === 2
        ? style.top
        : style.top};
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    column-gap: 12px;
    margin-bottom: 28px;
  }
`;

export const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media screen and (min-width: 768px) {
    row-gap: 28px;
  }
`;
export const InputTextGroupWrapper = styled(InputGroupWrapper)`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  @media screen and (min-width: 768px) {
    row-gap: 12px;
  }
`;

export const BtnsModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    row-gap: 0px;
    column-gap: 20px;
    align-items: center;
    justify-content: center;
  }
`;

const BaseButton = styled.button`
  color: ${({ textColor }) => textColor};
  background-color: ${({ bgColor }) => bgColor};
  padding: 12px 0px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ border }) => border};
  border-radius: 40px;
  transition: all ${p => p.theme.animation.cubicBezier};

  &:hover {
    color: ${({ hoverTextColor }) => hoverTextColor};
  }

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 44px;
    font-size: 20px;
  }
`;

export const ModalBtnNext = ({ onClick, children, type }) => {
  return (
    <BaseButton
      type={type}
      textColor="white"
      bgColor={p => p.theme.colors.accent}
      border="none"
      hoverTextColor="#000"
      onClick={onClick}
    >
      {children}
    </BaseButton>
  );
};

export const ModalBtnBack = ({ onClick, children, type }) => {
  return (
    <BaseButton
      type={type}
      textColor="#000"
      bgColor={p => p.theme.colors.white}
      border={`2px solid #f59256`}
      hoverTextColor="#f59256"
      onClick={onClick}
    >
      {children}
    </BaseButton>
  );
};

export const StyledLabel = styled.label`
  display: inline-block;
  padding: 6px 21px;
  border-radius: 40px;
  background-color: ${({ selected }) => (selected ? '#f59256' : 'white')};
  color: ${({ selected }) => (selected ? 'white' : '#000')};
  border: 2px solid #f59256;
  cursor: pointer;
  transition: all ${p => p.theme.animation.cubicBezier};

  &:hover {
    background-color: #f59256;
    color: #000;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 8px 26px;
  }
`;

export const StyledField = styled(Field)`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const RadioSexBtnWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  display: flex;

  column-gap: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 31px;
    margin-bottom: 40px;
  }
`;

export const StyledSexInputLabel = styled.label`
  margin-right: 12px;
`;
export const RadioSexButton = styled(Field)`
  display: none;
`;
export const RadioSexLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 8px;
  cursor: pointer;
  transition: all ${p => p.theme.animation.cubicBezier};

  &:hover {
    color: ${({ selected }) => (selected ? '#f59256' : '#ff7d5d')};
    transform: scale(1.07);
  }
`;

export const RadioSexTitle = styled.span`
  margin-top: 12px;
  color: ${({ active }) => active && '#f59256'};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const UploadButton = styled.label`
  display: inline-block;
  background-color: #fdf7f2;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  width: 116px;
  height: 116px;

  @media screen and (min-width: 768px) {
    min-width: 140px;
    min-height: 140px;
  }

  transition: all ${p => p.theme.animation.cubicBezier};
  &:hover {
    transform: scale(1.05);
  }
`;

export const PlusIcon = styled(TfiPlus)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 47px;
  height: 47px;
  fill: #11111199;
`;

export const StyledFileInput = styled.div`
  margin-top: 8px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
    margin-bottom: 28px;
  }
`;

export const StyledInput = styled(Field)`
  width: 240px;
  height: 40px;
  border-radius: 40px;
  font-size: 14px;
  padding-left: 14px;
  background-color: #fdf7f2;
  border: 1px solid
    ${({ __isvalidfield }) =>
      __isvalidfield === 'true' ? 'green' : '#f5925680'};

  &:focus {
    outline: none;
    border: 2px solid #f59256;
  }

  @media screen and (min-width: 768px) {
    width: 448px;
    height: 48px;
    padding-left: 16px;
    font-size: 16px;
  }
`;

export const StyledTextareaAutosize = styled(TextareaAutosize)`
  min-height: 40px;
  max-height: 300px;
  border-radius: 40px;
  font-size: 14px;
  padding: 12px 14px;

  background-color: #fdf7f2;
  border: 1px solid
    ${({ __isvalidfield }) =>
      __isvalidfield === 'true' ? 'green' : '#f5925680'};

  resize: none;
  overflow: hidden;
  &:focus {
    outline: none;
    border: 2px solid #f59256;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 18px;
    min-height: 113px;
    font-size: 16px;
  }
`;
