import styled from '@emotion/styled';
import { Field } from 'formik';
import { RxCross1 } from 'react-icons/rx';

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
    color: black;
    font-size: 22px;
  }
`;

export const CloseModalButton = ({ onClick }) => {
  return (
    <CloseButton onClick={onClick}>
      <RxCross1 />
    </CloseButton>
  );
};

export const StyledTextInputLabel = styled.label`
  font-size: 18px;
`;

export const StyledTitle = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
`;
export const StyledSubtitle = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${p => p.theme.colors.white};
  width: 280px;
  padding: 40px 20px;
  border-radius: 20px;
`;

export const BtnsModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 16px;
  margin-bottom: 2rem;
`;

export const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const StyledInput = styled(Field)`
  width: 240px;
  height: 40px;
  border-radius: 40px;
  font-size: 14px;
  padding-left: 14px;
  background-color: #fdf7f2;
  border: 1px solid #f5925680;

  &:focus {
    outline: none;
    border: 2px solid #f59256;
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
`;

export const ModalBtnNext = ({ onClick, children }) => {
  return (
    <BaseButton
      textColor="white"
      bgColor={p => p.theme.colors.accent}
      border="none"
      hoverTextColor="black"
      onClick={onClick}
    >
      {children}
    </BaseButton>
  );
};

export const ModalBtnBack = ({ onClick, children }) => {
  return (
    <BaseButton
      textColor="black"
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
  padding: 8px 23px;
  border-radius: 40px;
  background-color: ${({ selected }) => (selected ? '#f59256' : 'white')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  border: ${({ selected }) => (selected ? 'none' : '2px solid #f59256')};
  cursor: pointer;
  transition: all ${p => p.theme.animation.cubicBezier};

  &:hover {
    background-color: ${({ selected }) => (selected ? '#ff7d5d' : '#f59256')};
    color: ${({ selected }) => (selected ? 'black' : 'black')};
  }
`;

export const StyledField = styled(Field)`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;
