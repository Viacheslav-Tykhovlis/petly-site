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
import { useDispatch, useSelector } from 'react-redux';
import { getStateUsers } from 'redux/users/selectors.js';
// import { API } from 'API.js';
import { uploadAvatar } from 'redux/users/operations.js';

const UserPhoto = () => {
  const dispatch = useDispatch();

  function changeHandler(e) {
    const file = e.target.files[0];
    dispatch(uploadAvatar(file));
  }
  const user = useSelector(getStateUsers);
  // console.log(user.avatarUrl);
  const avatar = user.avatarUrl ? user.avatarUrl : photoCover;
  return (
    <Flex>
      <ImageStyled src={avatar} alt="" />

      <label>
        <input
          type="file"
          name="file"
          id="file"
          placeholder="edit photo"
          accept="image/*"
          onChange={e => changeHandler(e)}
          // type="file"
          // placeholder="Загрузить аватар"
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

// {/* <input
//         accept="image/*"
//         onChange={e => changeHandler(e)}
//         type="file"
//         placeholder="Загрузить аватар"
//       /> */}
//       {/* <input type="file" name="file" id="file" style={inputfile}></input>
//       <label htmlFor="file">
//         <ImageStyled>
//           <AiOutlinePlus style={PlusStyle} />
//         </ImageStyled>
//       </label>

//       <input type="file" name="file" id="foto" style={inputfile}></input>
//       <label htmlFor="file">
//         <FlexSvg type="button" ariaLabel="edit photo button">
//           <ButtonEditPhoto
//             widthMsvg={'20px'}
//             heighthMsvg={'20px'}
//             widthTsvg={'20px'}
//             heighthTsvg={'20px'}
//           />
//           <Span>Edit photo</Span>
//         </FlexSvg>
//       </label> */}
