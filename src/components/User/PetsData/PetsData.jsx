import PetsList from 'components/User/PetsList/PetsList';
import { BoxPetsData, Flex, Span, FlexSvg } from './PetsData.styled';
import TitleUser from '../TitleUser/TitleUser';
import { useEffect, useState } from 'react';
import { ButtonPlus } from '../ButtonUser/ButtonUser';
import { fetchPets } from 'redux/pets/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getStatePets } from 'redux/pets/selectors';
import ModalAddPet from 'components/ModalAddPet/ModalAddPet';
import { Modal } from 'components/Modal/Modal';

const PetsData = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const pets = useSelector(getStatePets);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);
  return (
    <BoxPetsData>
      <Flex>
        <TitleUser M={'0px'}>My pets:</TitleUser>
        <FlexSvg
          type="button"
          ariaLabel="add pet button"
          onClick={() => setIsOpen(true)}
        >
          <Span>Add pet</Span>
          <ButtonPlus
            widthM={'40px'}
            heightM={'40px'}
            widthT={'40px'}
            heightT={'40px'}
            widthMsvg={'16px'}
            heighthMsvg={'16px'}
            widthTsvg={'16px'}
            heighthTsvg={'16px'}
            bgM={'#f59256'}
            bgT={'#f59256'}
            strokeM={'#ffffff'}
            bgHover={'#ffffff'}
            borderHover={'2px solid #f59256'}
            strokeHover={'#f59256'}
          />
        </FlexSvg>
      </Flex>

      <PetsList pets={pets} />
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ModalAddPet closeModal={() => setIsOpen(false)} />
        </Modal>
      )}
    </BoxPetsData>
  );
};

export default PetsData;
