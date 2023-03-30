import styled from 'styled-components';

export const StyledButton = styled.button`
  z-index: 100;
  position: fixed;
  top: 85vh;
  right: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;

  background-color: #f59256;
  color: #fff;
  font-size: 12px;
  line-height: 1.33;
  border-radius: 50%;
  border: 2px solid #f59256;

  stroke: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    display: none;
  }

  &:focus,
  &:hover {
    outline: transparent;
    background-color: #fff;
    stroke: #111111;
    color: #111111;
  }
`;

export const StyledAddPetMobileButton = ({ onAddButtonClick }) => {
  return (
    <StyledButton
      onClick={onAddButtonClick}
      type="button"
      ariaLabel="add to favorite"
    >
      <svg width="21" height="21" viewBox="0 0 32 32">
        <path d="M16 30.222V16zM16 16V1.778zm0 0h14.222zm0 0H1.778z" />
        <path
          fill="none"
          strokeLinecap="round"
          strokeWidth="2.667"
          d="M16 30.222V16m0 0V1.778M16 16h14.222M16 16H1.778"
        />
      </svg>
      <span>Add pet</span>
    </StyledButton>
  );
};
