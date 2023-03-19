import {
  NavBox,
  NavBox1,
  NavBox2,
  NavBox3,
  NavUsersBox,
} from './NoticesCategoriesNav.styled';
import { StyledNavButton } from 'components/ReusableComponents/Buttons/StyledNavButton';

const NoticesCategoriesNav = () => {
  // const [userIsLogedIn] = useState(false);

  return (
    <NavBox>
      <NavBox1>
        <NavBox2>
          <NavBox3>
            <StyledNavButton route="lost-found" buttonName="lost/found" />
            <StyledNavButton route="for-free" buttonName="in good hands" />
          </NavBox3>
          <StyledNavButton route="sell" buttonName="sell" />
        </NavBox2>
      </NavBox1>

      {/* {userIsLogedIn condition render, notification if false} */}
      <NavUsersBox>
        <StyledNavButton route="favorite" buttonName="favorite ads" />
        <StyledNavButton route="own" buttonName="my ads" />
      </NavUsersBox>
    </NavBox>
  );
};

export default NoticesCategoriesNav;
