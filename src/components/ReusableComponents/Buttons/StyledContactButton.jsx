import styled from 'styled-components';

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  min-width: 160px;

  color: #fff;
  background-color: #f59256;

  text-decoration: none;
  border: 2px solid #f59256;
  border-radius: 40px;

  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  outline: transparent;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: #f59256;
    background-color: #fff;
  }
`;

export const StyledContactButton = ({ route, buttonName }) => {
  return <ContactButton href={route}>{buttonName}</ContactButton>;
};
