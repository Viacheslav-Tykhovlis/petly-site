import PetsList from 'components/User/PetsList/PetsList';
import { BoxPetsData, Flex, Span, FlexSvg } from './PetsData.styled';
import TitleUser from '../TitleUser/TitleUser';
import { useEffect, useState } from 'react';
import collection from '../../../data/pets.json';
import { ButtonPlus } from '../ButtonUser/ButtonUser';

const PetsData = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    setPets(collection);
  }, [pets]);

  return (
    <BoxPetsData>
      <Flex>
        <TitleUser M={'0px'}>My pets:</TitleUser>
        <FlexSvg>
          <Span>Add pet</Span>
          <ButtonPlus
            type="button"
            ariaLabel="add pet button"
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
          />
        </FlexSvg>
      </Flex>

      <PetsList pets={pets} />
    </BoxPetsData>
  );
};

export default PetsData;
