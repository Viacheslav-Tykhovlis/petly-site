import styled from '@emotion/styled';

export const List = styled.ul`
  position: absolute;
  top: 269px;
  left: 100px;
  max-height: 90px;
  min-height: 20px;
  overflow-y: scroll;
  width: 420px;
  background-color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.regular};
  z-index: 1;

  ${props => props.theme.mq.mobileOnly} {
    top: 185px;
    left: 16px;
    width: 250px;
    max-width: 420px;
    border: 1px solid ${props => props.theme.colors.borderColor};
    box-shadow: ${props => props.theme.shadows.regular};
  }
`;

export const ListItem = styled.li`
  padding: 4px 8px;
  font-size: 14px;
  line-height: 1.5;
  color: ${props => props.theme.colors.secondaryText};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.borderColor};
  }
`;
