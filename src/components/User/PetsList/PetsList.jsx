import { Image, Flex } from './PetsList.styled';
import { StyledBasketButton } from '../../ReusableComponents/Buttons/StyledBasketButton';
import { PetName, PetBirth, PetBreed, PetComments } from './index';

const PetsList = () => {
  return (
    <Flex>
      <Image crs="" alt="card pet"></Image>
      <div>
        <PetName />
        <PetBirth />
        <PetBreed />
        <PetComments />
      </div>
      <StyledBasketButton />
    </Flex>
  );
};

export default PetsList;
