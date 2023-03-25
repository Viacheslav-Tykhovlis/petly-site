import { StyledAccountButton } from '../../../../../ReusableComponents/Buttons/StyledAccountButton';
import { StyledUserButton } from './UserNav.styled';

export const UserNav = () => {
  return (
    <StyledUserButton>
      <StyledAccountButton route="/user" buttonName="Account" />
    </StyledUserButton>
  );
};
