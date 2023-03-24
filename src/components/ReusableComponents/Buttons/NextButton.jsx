import styled from 'styled-components';

const Btn = styled.button`
  height: 44px;
  min-width: 180px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
  text-decoration: none;
  border: 2px solid #f59256;
  border-radius: 40px;
  outline: transparent;

  color: #111111;
  background-color: ${props => props.theme.colors.white};

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    height: 38px;
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    height: 48px;
  }

  &:focus,
  &:hover {
    color: #fff;
    background-color: #f59256;
  }
`;

export const NextButton = ({ route, buttonName }) => {
  return <Btn to={route}>{buttonName}</Btn>;
};
