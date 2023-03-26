import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  height: 40px;
  display: block;
  border: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
  width: ${({ theme, width }) => (width ? width : 'auto')};
  padding: 9px 28px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ name }) => name === 'contacts' && '12px'};
  background-color: ${({ theme, name, selected }) => {
    switch (name) {
      case 'filter':
        return selected ? theme.colors.accent : 'transparent';
      case 'filled':
        return theme.colors.accent;
      case 'contacts':
        return theme.colors.accent;
      default:
        return 'transparent';
    }
  }};

  color: ${({ theme, name, selected }) => {
    switch (name) {
      case 'transparent':
        return theme.colors.black;
      case 'filled':
        return theme.colors.white;
      case 'learnMore':
        return theme.colors.accent;
      case 'filter':
        return selected ? theme.colors.white : theme.colors.black;
      case 'addToFavorite':
        return theme.colors.black;
      default:
        return theme.colors.white;
    }
  }};

  transition: color ${props => props.theme.animation.cubicBezier},
    background-color ${props => props.theme.animation.cubicBezier},
    border-color ${props => props.theme.animation.cubicBezier};
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme, name }) =>
      name === 'learnMore' || 'filter'
        ? theme.colors.white
        : theme.colors.accent};
  }

  ${props => props.theme.mq.tablet} {
    margin-left: ${({ name }) => name === 'contacts' && '12px'};
    margin-bottom: ${({ name }) => name === 'contacts' && '0px'};
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: ${({ theme }) => theme.space[2]};
  }
`;
