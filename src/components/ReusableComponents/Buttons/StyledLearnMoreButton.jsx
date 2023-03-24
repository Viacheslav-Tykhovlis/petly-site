import styled from 'styled-components';

export const LearnMore = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

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

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

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
  }
`;

export const StyledLearnMoreButton = ({ buttonName, onButtonClick }) => {
  return <LearnMore onClick={onButtonClick}>{buttonName}</LearnMore>;
};
