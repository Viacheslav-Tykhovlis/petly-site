import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledUserButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  height: 47px;
  padding: 0 28px;

  text-decoration: none;
  background-color: #f59256;
  border-radius: 40px;

  color: #fff;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  outline: transparent;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    background-color: #ff6200;
  }

  @media screen and (min-width: 768px) {
    height: 47px;
    font-size: 20px;
  }

  @media screen and (max-width: 767px) {
    height: 35px;
    font-size: 14px;
  }
`;

export const StyledAccountButton = ({ route, buttonName, onClick }) => {
  return (
    <StyledUserButton type="button" to={route} onClick={onClick}>
      <svg fill="white" width="24" height="24">
        <path d="M12 19.219q1.594 0 3.352-0.938t2.648-2.297q-0.047-1.313-2.109-2.203t-3.891-0.891-3.891 0.867-2.109 2.227q0.891 1.359 2.648 2.297t3.352 0.938zM12 5.016q-1.219 0-2.109 0.891t-0.891 2.109 0.891 2.109 2.109 0.891 2.109-0.891 0.891-2.109-0.891-2.109-2.109-0.891zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"></path>
      </svg>
      {buttonName}
    </StyledUserButton>
  );
};
