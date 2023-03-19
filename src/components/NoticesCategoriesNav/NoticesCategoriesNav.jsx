import { StyledBasketButton } from 'components/ReusableComponents/Buttons/StyledBasketButton';
import { StyledLearnMoreButton } from 'components/ReusableComponents/Buttons/StyledLearnMoreButton';
import { StyledLikeButton } from 'components/ReusableComponents/Buttons/StyledLikeButton';
import { StyledNavButton } from 'components/ReusableComponents/Buttons/StyledNavButton';
import { StyledNextButton } from 'components/ReusableComponents/Buttons/StyledNextButton';

import NoticesPetsList from 'components/NoticesPetsList/NoticesPetsList';

const NoticesCategoriesNav = () => {
  // const [userIsLogedIn] = useState(false);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          // justifyContent: 'space-between',
          // alignItems: 'center',

          boxSizing: 'border-box',
        }}
      >
        <StyledNavButton
          route="/sell"
          buttonName="sell"
          element={NoticesPetsList}
        />
        <StyledNavButton route="/lost-found" buttonName="lost/found" />
        <StyledNavButton route="/for-free" buttonName="in good hands" />

        <StyledNavButton route="/favorite" buttonName="favorite ads" />
        <StyledNavButton route="/own" buttonName="my ads" />

        <StyledNextButton buttonName="Next" />
        <StyledNextButton buttonName="Cancel" />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '288px',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <StyledLearnMoreButton buttonName="Learn more" />
      </div>

      <div
        style={{
          backgroundColor: 'gray',
          boxSizing: 'border-box',
        }}
      >
        <StyledLikeButton />
        <StyledBasketButton />
      </div>
    </>
  );
};

export default NoticesCategoriesNav;