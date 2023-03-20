import {
  StyledForm,
  StyledInput,
  FilterButton,
  CancelFilterButton,
} from './SearchBar.styled';

const SearchBar = ({ onFormSubmit, onInputChange, isButtonClicked = true }) => {
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <label htmlFor="search"></label>
      <StyledInput
        // onChange={onInputChange}
        id="search"
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search"
      />
      {isButtonClicked && (
        <FilterButton type="submit" ariaLabel="search button">
          <svg width="18" height="18" viewBox="0 0 32 32">
            <path d="M22.222 19.556h-1.404l-0.498-0.48c1.742-2.027 2.791-4.658 2.791-7.52 0-6.382-5.173-11.556-11.556-11.556s-11.556 5.173-11.556 11.556c0 6.382 5.173 11.556 11.556 11.556 2.862 0 5.493-1.049 7.52-2.791l0.48 0.498v1.404l8.889 8.871 2.649-2.649-8.871-8.889zM11.556 19.556c-4.427 0-8-3.573-8-8s3.573-8 8-8c4.427 0 8 3.573 8 8s-3.573 8-8 8z"></path>
          </svg>
        </FilterButton>
      )}

      {!isButtonClicked && (
        <CancelFilterButton type="submit" ariaLabel="search button">
          <svg width="24" height="24" viewBox="0 0 32 32">
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.667"
              d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zM20 12l-8 8M12 12l8 8"
            />
          </svg>
        </CancelFilterButton>
      )}
    </StyledForm>
  );
};

export default SearchBar;
