import Container from 'components/Container/Container';
import PetsList from 'components/User/PetsList/PetsList';
import { Title, ContainerPets, Flex } from './PetsData.styled';
import { StyledAddPetDesktopButton } from '../../ReusableComponents/Buttons/StyledAddPetDesktopButton';

const PetsData = () => {
  return (
    <Container>
      <Flex>
        <Title>My pets:</Title>
        <StyledAddPetDesktopButton />
      </Flex>
      <ContainerPets>
        <PetsList />
      </ContainerPets>
    </Container>
  );
};

export default PetsData;
