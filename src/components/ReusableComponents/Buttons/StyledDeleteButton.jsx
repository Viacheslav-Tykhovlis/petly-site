import styled from 'styled-components';
import { LearnMore } from './StyledLearnMoreButton';

const DeleteButton = styled(LearnMore)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 13px;

  height: 38px;
  width: 100%;
  padding: 0;

  text-decoration: none;
  border: 2px solid #f59256;
  border-radius: 40px;

  background-color: #fff;
  color: #f59256;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  outline: transparent;

  fill: #f59256;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    min-width: 248px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }

  &:focus,
  &:hover {
    color: #ff6101;
    border-color: #ff6101;
    fill: #ff6101;
  }
`;

export const StyledDeleteButton = ({ buttonName, onButtonClick }) => {
  return (
    <DeleteButton onClick={onButtonClick}>
      {buttonName}
      <svg width="17" height="18" viewBox="0 0 29 32">
        <path d="M12.364 5.091h4.364a2.182 2.182 0 1 0-4.364 0zm-2.182 0A4.36 4.36 0 0 1 14.546.727a4.36 4.36 0 0 1 4.364 4.364h8.727a1.094 1.094 0 0 1 1.091 1.091c0 .289-.115.567-.32.771-.204.205-.482.32-.771.32h-1.231l-2.629 19.283a5.45 5.45 0 0 1-5.405 4.717h-7.654a5.457 5.457 0 0 1-5.405-4.717L2.684 7.273H1.453A1.094 1.094 0 0 1 .362 6.182a1.094 1.094 0 0 1 1.091-1.091h8.727zm2.182 7.636a1.094 1.094 0 0 0-1.091-1.091 1.094 1.094 0 0 0-1.091 1.091v10.909c0 .289.115.567.32.771s.482.32.771.32.567-.115.771-.32c.205-.204.32-.482.32-.771V12.727zm5.454-1.091a1.094 1.094 0 0 0-1.091 1.091v10.909c0 .289.115.567.32.771s.482.32.771.32.567-.115.771-.32c.205-.204.32-.482.32-.771V12.727a1.094 1.094 0 0 0-1.091-1.091z" />
      </svg>
    </DeleteButton>
  );
};
