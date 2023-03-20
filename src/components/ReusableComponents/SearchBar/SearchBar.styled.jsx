import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
  display: flex;

  @media screen and (min-width: 320px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 608px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 9px 48px 9px 12px;

  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  color: #535353;
  border: 1px solid transparent;
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    height: 44px;
    padding: 8px 48px 9px 20px;
    font-size: 20px;
    line-height: 1.35;
  }

  &:focus,
  &:hover {
    border: 1px solid rgba(245, 146, 86, 0.5);
    outline: transparent;
  }
`;

export const FilterButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 8px;
  right: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border-color: transparent;
  border: none;
  fill: #111111;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    outline: transparent;
    fill: rgba(245, 146, 86, 0.5);
  }
`;

export const CancelFilterButton = styled(FilterButton)`
  stroke: #111111;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    outline: transparent;
    stroke: rgba(245, 146, 86, 0.5);
  }
`;
