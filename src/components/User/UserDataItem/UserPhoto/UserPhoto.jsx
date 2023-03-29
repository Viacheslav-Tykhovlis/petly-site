import {
  inputfile,
  ImageCover,
  ImageStyled,
  Flex,
  FlexSvg,
  Span,
} from './UserPhoto.styled.jsx';
import { ButtonEditPhoto } from '../../ButtonUser/ButtonUser.jsx';
import photoCover from 'img/photo_cover.png';
import { useDispatch, useSelector } from 'react-redux';
import { getStateUsers } from 'redux/users/selectors.js';
import { uploadAvatar } from 'redux/users/operations.js';

const UserPhoto = () => {
  const dispatch = useDispatch();

  function changeHandler(e) {
    const file = e.target.files[0];
    dispatch(uploadAvatar(file));
  }

  const { avatarUrl } = useSelector(getStateUsers);

  return (
    <Flex>
      {avatarUrl ? (
        <ImageStyled src={avatarUrl} alt="" />
      ) : (
        <ImageCover src={photoCover} alt="" />
      )}

      <label>
        <input
          type="file"
          name="file"
          id="file"
          placeholder="edit photo"
          accept="image/*"
          onChange={e => changeHandler(e)}
          style={inputfile}
        ></input>

        <FlexSvg>
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
