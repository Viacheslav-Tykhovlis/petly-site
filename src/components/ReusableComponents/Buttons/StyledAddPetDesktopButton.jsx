import styled from 'styled-components';

export const StyledButton = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;

    background-color: #f59256;
    color: #111111;
    font-size: 20px;
    line-height: 1.35;
    border-radius: 50%;
    border: 2px solid #f59256;

    stroke: #fff;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:focus,
  &:hover {
    outline: transparent;
    background-color: #fff;
    stroke: #111111;
  }
`;

export const StyledSpan = styled.span`
  position: absolute;
  top: 50%;
  left: -4px;
  min-width: 80px;
  height: 44px;
  transform: translateX(-100%) translateY(-50%);

  display: flex;
  align-items: center;

  background-color: transparent;
  border: none;
`;

export const StyledAddPetDesktopButton = ({ onAddButtonClick }) => {
  return (
    <StyledButton
      onClick={onAddButtonClick}
      type="button"
      ariaLabel="add to favorite"
    >
      <svg width="16" height="16" viewBox="0 0 32 32">
        <path d="M16 30.222V16zM16 16V1.778zm0 0h14.222zm0 0H1.778z" />
        <path
          fill="none"
          strokeLinecap="round"
          strokeWidth="2.667"
          d="M16 30.222V16m0 0V1.778M16 16h14.222M16 16H1.778"
        />
      </svg>
      <StyledSpan>Add pet</StyledSpan>
    </StyledButton>
  );
};
