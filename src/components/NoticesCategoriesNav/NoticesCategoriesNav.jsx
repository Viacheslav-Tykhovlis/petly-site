import { StyledNavButton } from 'components/ReusableComponents/Buttons/StyledNavButton';

// import NoticesPetsList from 'components/NoticesCategoriesList/NoticesCategoriesList';

const NoticesCategoriesNav = () => {
  // const [userIsLogedIn] = useState(false);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <StyledNavButton
          route="sell"
          buttonName="sell"
          // element={NoticesPetsList}
        />
        <StyledNavButton route="lost-found" buttonName="lost/found" />
        <StyledNavButton route="for-free" buttonName="in good hands" />

        {/* {userIsLogedIn condition render, notification if false} */}
        <StyledNavButton route="favorite" buttonName="favorite ads" />
        <StyledNavButton route="own" buttonName="my ads" />
      </div>
    </>
  );
};

export default NoticesCategoriesNav;
