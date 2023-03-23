import styled from 'styled-components';
import SearchBar from 'components/ReusableComponents/SearchBar/SearchBar';

const StyledSearchBox = styled.div`
  padding-top: 28px;
  padding-bottom: 28px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const NoticesSearch = ({
  onFormSubmit,
  onInputChange,
  isButtonClicked = true,
}) => {
  return (
    <StyledSearchBox>
      <SearchBar
        onFormSubmit={onFormSubmit}
        isButtonClicked={isButtonClicked}
      />
    </StyledSearchBox>
  );
};

export default NoticesSearch;
