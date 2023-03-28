import styled from 'styled-components';

export const StyledSvgButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;

  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 50%;
  border: transparent;

  fill: #fff;
  stroke: #f59256;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    outline: transparent;
    fill: #f59256;
  }
`;

export const ActiveLikeButton = styled(StyledSvgButton)`
  fill: #f59256;
`;

export const StyledLikeButton = ({ onButtonClick, isFavorite }) => {
  return (
    <>
      {!isFavorite && (
        <StyledSvgButton
          onClick={onButtonClick}
          type="button"
          ariaLabel="add to favorite"
        >
          <svg width="26" height="24" viewBox="0 0 35 32">
            <path
              d="M9.333 1.333c-4.418 0-8 3.645-8 8.142 0 3.63 1.4 12.246 15.181 20.955a1.547 1.547 0 0 0 1.638 0c13.781-8.709 15.181-17.325 15.181-20.955 0-4.497-3.582-8.142-8-8.142s-8 4.935-8 4.935-3.582-4.935-8-4.935z"
              opacity=".6"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.667"
              d="M9.333 1.333c-4.418 0-8 3.645-8 8.142 0 3.63 1.4 12.246 15.181 20.955a1.547 1.547 0 0 0 1.638 0c13.781-8.709 15.181-17.325 15.181-20.955 0-4.497-3.582-8.142-8-8.142s-8 4.935-8 4.935-3.582-4.935-8-4.935z"
            />
          </svg>
        </StyledSvgButton>
      )}

      {isFavorite && (
        <ActiveLikeButton
          onClick={onButtonClick}
          type="button"
          ariaLabel="add to favorite"
        >
          <svg width="26" height="24" viewBox="0 0 35 32">
            <path
              d="M9.333 1.333c-4.418 0-8 3.645-8 8.142 0 3.63 1.4 12.246 15.181 20.955a1.547 1.547 0 0 0 1.638 0c13.781-8.709 15.181-17.325 15.181-20.955 0-4.497-3.582-8.142-8-8.142s-8 4.935-8 4.935-3.582-4.935-8-4.935z"
              opacity=".6"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.667"
              d="M9.333 1.333c-4.418 0-8 3.645-8 8.142 0 3.63 1.4 12.246 15.181 20.955a1.547 1.547 0 0 0 1.638 0c13.781-8.709 15.181-17.325 15.181-20.955 0-4.497-3.582-8.142-8-8.142s-8 4.935-8 4.935-3.582-4.935-8-4.935z"
            />
          </svg>
        </ActiveLikeButton>
      )}
    </>
  );
};
