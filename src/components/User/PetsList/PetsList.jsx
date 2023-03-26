import PetListItem from './PetListItem/PetListItem';

const PetsList = ({ pets }) => {
  // const { photo, name, birthday, breed, comments } = pets;
  return (
    <ul>
      {pets.map(({ photo, name, birthday, breed, comments, _id }) => (
        <PetListItem
          key={_id}
          photo={photo}
          name={name}
          birthday={birthday}
          breed={breed}
          comments={comments}
        />
      ))}
    </ul>
  );
};

export default PetsList;
