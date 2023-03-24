import { StyledTextPet } from '../PetsList.styled';

const PetBreed = ({ breed }) => {
  return <StyledTextPet margin={'16px'}>Breed: {breed}</StyledTextPet>;
};

export default PetBreed;
