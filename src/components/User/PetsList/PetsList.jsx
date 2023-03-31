import PetListItem from './PetListItem/PetListItem';
import { getIsLoading } from 'redux/pets/selectors';
import { useSelector } from 'react-redux';
import CoverPage from 'components/ReusableComponents/CoverPage/CoverPage';
import Loader from 'components/Loader/Loader';
// import { Animation } from 'components/Animation/Animation';

const PetsList = ({ pets }) => {
  const isLoading = useSelector(getIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && pets.length === 0 && <CoverPage />}
      {!isLoading && pets.length >= 1 && (
        <ul>
          {pets.map(({ photo, name, birthday, breed, comments, _id }) => (
            <PetListItem
              key={_id}
              petId={_id}
              photo={photo}
              name={name}
              birthday={birthday}
              breed={breed}
              comments={comments}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default PetsList;
