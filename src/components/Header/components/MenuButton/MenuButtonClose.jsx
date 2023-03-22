import { GrClose } from 'react-icons/gr';
import { StyledMenuButton } from './MenuButtonOpen.styled';

export const MenuButtonClose = () => {
  return (
    <StyledMenuButton>
      <GrClose size={40} />
    </StyledMenuButton>
  );
};
