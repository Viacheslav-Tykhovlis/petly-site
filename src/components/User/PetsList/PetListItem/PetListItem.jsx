import { FlexBasket, Image } from '../PetsList.styled';
import { PetName, PetBirth, PetBreed, PetComments } from '../index';
import { ContainerPets } from '../../PetsData/PetsData.styled';
import { ButtonBasket } from '../../ButtonUser/ButtonUser';
import { deletePet } from 'redux/pets/operations';
import { useDispatch } from 'react-redux';

const PetListItem = ({ photo, name, birthday, breed, comments, _id }) => {
  const dispatch = useDispatch();
  return (
    <ContainerPets>
      <Image src={photo} alt={name} />
      <ul>
        <PetName key={_id} name={name} />
        <PetBirth birthday={birthday} />
        <PetBreed breed={breed} />
        <PetComments comments={comments} />
      </ul>
      <FlexBasket>
        <ButtonBasket
          type="button"
          onClick={() => dispatch(deletePet(_id))}
          ariaLabel="basket button"
          widthM={'20px'}
          heightM={'20px'}
          widthT={'44px'}
          heightT={'44px'}
          widthMsvg={'20px'}
          heighthMsvg={'20px'}
          widthTsvg={'24px'}
          heighthTsvg={'24px'}
          bgT={'#fdf7f2'}
          fillM={'rgba(17, 17, 17, 0.6)'}
          strokeM={'#fdf7f2'}
          bgHover={'#ffffff'}
          borderHover={'2px solid #f59256'}
        />
      </FlexBasket>
    </ContainerPets>
  );
};

export default PetListItem;
