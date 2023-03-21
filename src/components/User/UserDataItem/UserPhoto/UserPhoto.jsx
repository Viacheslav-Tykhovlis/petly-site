import {
  inputfile,
  EditPhotoBtnText,
  CameraStyle,
  PlusStyle,
  ImageStyled,
  Flex,
  FlexSvg,
  Span,
} from './UserPhoto.styled.jsx';
import { HiCamera } from 'react-icons/hi';
import { AiOutlinePlus } from 'react-icons/ai';

const UserPhoto = () => {
  return (
    <Flex>
      <input type="file" name="file" id="file" style={inputfile}></input>
      <label for="file" style={EditPhotoBtnText}>
        <ImageStyled>
          <AiOutlinePlus style={PlusStyle} />
        </ImageStyled>
        <FlexSvg>
          <HiCamera style={CameraStyle} />
          <Span>Edit photo</Span>
        </FlexSvg>
      </label>
    </Flex>
  );
};

export default UserPhoto;
