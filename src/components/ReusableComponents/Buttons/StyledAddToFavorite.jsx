import styled from 'styled-components';

export const AddToFavoriteButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 40px;
  min-width: 160px;

  color: #f59256;
  background-color: #fff;

  text-decoration: none;
  border: 2px solid #f59256;
  border-radius: 40px;

  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  outline: transparent;

  fill: #f59256;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: #fff;
    background-color: #f59256;
    fill: #fff;
  }
`;

export const StyledAddToFavoriteButton = ({ onAddToFavorite, buttonName }) => {
  return (
    <AddToFavoriteButton type="button" onClick={onAddToFavorite}>
      {buttonName}
      <svg width="18" height="18" viewBox="0 0 35 32">
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
    </AddToFavoriteButton>
  );
};
