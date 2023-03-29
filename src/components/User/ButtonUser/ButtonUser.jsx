import { StyleButton, StyleUpdateButton } from './ButtonUser.styled';
import {
  StyledSvgLogout,
  StyledSvgBasket,
  StyledSvgEditPhoto,
  StyledSvgPlus,
  StyledSvgPencil,
  StyledSvgCheck,
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
  <StyleUpdateButton {...props}>
    <StyledSvgPencil></StyledSvgPencil>
  </StyleUpdateButton>
);

export const ButtonCheck = props => (
  <StyleUpdateButton {...props}>
    <StyledSvgCheck></StyledSvgCheck>
  </StyleUpdateButton>
);
