import PetListItem from './PetListItem/PetListItem';

const PetsList = ({ pets }) => {
  return (
    <>
      {pets.map(({ photo, name, birthday, breed, comments }) => (
        <PetListItem
          photo={photo}
          name={name}
          birthday={birthday}
          breed={breed}
          comments={comments}
        />
      ))}
    </>
  );
};

export default PetsList;
