import styled from '@emotion/styled';

export const NewsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 20px 100px 20px;
  @media screen and (min-width: 1280px) {
    padding: 88px 20px 100px 20px;
  }
  @media screen and (min-width: 1280px) {
    padding: 58px 20px 200px 20px;
  }
`;
export const StyledForm = styled.form`
  /* position: relative; */
  align-self: center;
  display: flex;
  margin-top: 28px;
  margin-bottom: 40px;

  @media screen and (min-width: 320px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 608px;
    margin-bottom: 60px;
    margin-top: 40px;
  }
`;
export const FilterLabel = styled.label`
  position: relative;
`;

export const FilterInput = styled.input`
  border: 1px solid transparent;
  border-color: transparent;
  outline: transparent;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  padding: 9px 12px;
  font-size: 16px;
  font-weight: 500;
  width: 280px;
  color: #535353;
  transition: 0.2s;
  ::placeholder {
    color: #535353;
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: 1px solid rgba(245, 146, 86, 0.5);
  }

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 40px;
  }
`;

export const SearchBtn = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 8px;
  background: transparent;
  border: transparent;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 10px;
  }
`;
export const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 8px;
  background: transparent;
  border: transparent;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 10px;
  }
`;