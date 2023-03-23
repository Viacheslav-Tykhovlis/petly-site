import { RxHamburgerMenu } from 'react-icons/rx';
import { StyledMenuButton } from './MenuButtonOpen.styled';

export const MenuButtonOpen = () => {
  return (
    <StyledMenuButton>
      <RxHamburgerMenu size={40} />
    </StyledMenuButton>
  );
};
