import { StyleButton } from './ButtonUser.styled';
import {
  StyledSvgLogout,
  StyledSvgBasket,
  StyledSvgEditPhoto,
  StyledSvgPlus,
  StyledSvgPencil,
} from '../ButtonUser';

export const ButtonLogout = props => (
  <StyleButton {...props}>
    <StyledSvgLogout></StyledSvgLogout>
  </StyleButton>
);

export const ButtonBasket = props => (
  <StyleButton {...props}>
    <StyledSvgBasket></StyledSvgBasket>
  </StyleButton>
);

export const ButtonEditPhoto = props => (
  <StyleButton {...props}>
    <StyledSvgEditPhoto></StyledSvgEditPhoto>
  </StyleButton>
);

export const ButtonPlus = props => (
  <StyleButton {...props}>
    <StyledSvgPlus></StyledSvgPlus>
  </StyleButton>
);

export const ButtonPencil = props => (
  <StyleButton {...props}>
    <StyledSvgPencil></StyledSvgPencil>
  </StyleButton>
);
