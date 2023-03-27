import {
  inputfile,
  // PlusStyle,
  ImageStyled,
  Flex,
  FlexSvg,
  Span,
} from './UserPhoto.styled.jsx';
// import { AiOutlinePlus } from 'react-icons/ai';
import { ButtonEditPhoto } from '../../ButtonUser/ButtonUser.jsx';
import photoCover from 'img/photo_cover.png';
import { useSelector } from 'react-redux';
import { getStateUsers } from 'redux/users/selectors.js';
import { API } from 'API.js';

const UserPhoto = () => {
  const currentUser = useSelector(getStateUsers);
  const avatar = currentUser.avatarUrl
    ? `${API + currentUser.avatar}`
    : photoCover;
  return (
    <Flex>
      <ImageStyled src={avatar} alt="" />
      <input
        type="file"
        // name="file" id="file"
        placeholder="edit photo"
        style={inputfile}
      ></input>
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
      {/* <input type="file" name="file" id="file" style={inputfile}></input>
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
      </label> */}
    </Flex>
  );
};

export default UserPhoto;
