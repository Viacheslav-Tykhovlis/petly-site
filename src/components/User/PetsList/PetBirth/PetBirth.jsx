import { StyledTextPet } from '../PetsList.styled';
// import { format } from 'date-fns';

const PetBirth = ({ birthday }) => {
  return (
    <StyledTextPet>
      {/* Date of birth: {format(new Date(birthday), 'MM.dd.yyyy')} */}
      Date of birth: {birthday}
    </StyledTextPet>
  );
};

export default PetBirth;
