import {
  inputfile,
  PlusStyle,
  ImageStyled,
  Flex,
  FlexSvg,
  Span,
} from './UserPhoto.styled.jsx';
import { AiOutlinePlus } from 'react-icons/ai';
import { ButtonEditPhoto } from '../../ButtonUser/ButtonUser.jsx';

const UserPhoto = () => {
  return (
    <Flex>
      <input type="file" name="file" id="file" style={inputfile}></input>
      <label htmlFor="file">
        <ImageStyled>
          <AiOutlinePlus style={PlusStyle} />
        </ImageStyled>
      </label>

      <input type="file" name="file" id="foto" style={inputfile}></input>
      <label htmlFor="file">
        <FlexSvg type="button" ariaLabel="edit photo button">
          <ButtonEditPhoto
            widthMsvg={'20px'}
            heighthMsvg={'20px'}
            widthTsvg={'20px'}
            heighthTsvg={'20px'}
          />
          <Span>Edit photo</Span>
        </FlexSvg>
      </label>
    </Flex>
  );
};

export default UserPhoto;
