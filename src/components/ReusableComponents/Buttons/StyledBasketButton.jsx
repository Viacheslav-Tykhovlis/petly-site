import styled from 'styled-components';
import { StyledSvgButton } from './StyledLikeButton';

const StyledSvgBasketButton = styled(StyledSvgButton)`
  background-color: #fdf7f2;
  fill: rgba(17, 17, 17, 0.6);
  stroke: none;
`;

export const StyledBasketButton = () => {
  return (
    <StyledSvgBasketButton type="button" ariaLabel="delete button">
      <svg width="20" height="22" viewBox="0 0 29 32">
        <path d="M12.364 5.091h4.364a2.182 2.182 0 1 0-4.364 0zm-2.182 0A4.36 4.36 0 0 1 14.546.727a4.36 4.36 0 0 1 4.364 4.364h8.727a1.094 1.094 0 0 1 1.091 1.091c0 .289-.115.567-.32.771-.204.205-.482.32-.771.32h-1.231l-2.629 19.283a5.45 5.45 0 0 1-5.405 4.717h-7.654a5.457 5.457 0 0 1-5.405-4.717L2.684 7.273H1.453A1.094 1.094 0 0 1 .362 6.182a1.094 1.094 0 0 1 1.091-1.091h8.727zm2.182 7.636a1.094 1.094 0 0 0-1.091-1.091 1.094 1.094 0 0 0-1.091 1.091v10.909c0 .289.115.567.32.771s.482.32.771.32.567-.115.771-.32c.205-.204.32-.482.32-.771V12.727zm5.454-1.091a1.094 1.094 0 0 0-1.091 1.091v10.909c0 .289.115.567.32.771s.482.32.771.32.567-.115.771-.32c.205-.204.32-.482.32-.771V12.727a1.094 1.094 0 0 0-1.091-1.091z" />
      </svg>
    </StyledSvgBasketButton>
  );
};
