import styled from 'styled-components';

export const Label = styled.label`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;

  font-size: 12px;
  line-height: 1.33;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #111111;

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 18px;
    line-height: 1.388;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    font-size: 18px;
  }
`;

export const Flex = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.margin || '8px'};
`;

export const BoxUserDataItem = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;

  width: 159px;
  height: 24px;
  margin-right: 9px;
  margin-left: auto;

  padding-left: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  border: 1px solid #fff;
  border-radius: 40px;
  border: 1px solid
    ${({ disabled }) => (disabled ? '#fff' : 'rgba(245, 146, 86, 0.5)')};
  background-color: ${({ disabled }) => (disabled ? 'fff' : '#fdf7f2')};

  &::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.33;

    letter-spacing: 0.04em;

    color: rgba(17, 17, 17, 0.6);
  }

  &:focus {
    background: #fdf7f2;
    outline-color: rgba(245, 146, 86, 0.5);
    border: 1px solid;
  }

  @media screen and (min-width: 768px) {
    width: 216px;
    height: 32px;
    padding-left: 12px;
    margin-right: 24px;

    &::placeholder {
      font-size: 18px;
      line-height: 1.388;
    }
  }
`;

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 379px;
  }
`;
