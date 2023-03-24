import { StyledTextPet } from '../PetsList.styled';

const PetComments = ({ comments }) => {
  return <StyledTextPet margin={'0px'}>Comments: {comments}</StyledTextPet>;
};

export default PetComments;
