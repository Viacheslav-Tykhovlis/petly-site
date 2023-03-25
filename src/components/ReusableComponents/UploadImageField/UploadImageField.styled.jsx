import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

export const LoadImageCont = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.backgroundFormInput};
  margin-top: 12px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.secondaryText};
`;

export const LoadImgLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: ${({ form }) => (form === 'userPet' ? 'center' : 'left')};
  cursor: pointer;
  font-family: 'Manrope';
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.37;
  ${props => props.theme.mq.tablet}: {
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 1.08;
    margin-top: ${({ form }) => (form === 'userPet' ? '0px' : '16px')};
  }
`;

export const LoadImgInput = styled.input`
  display: none;
`;

export const PlusIcon = styled(AiOutlinePlus)`
  color: ${props => props.theme.colors.secondaryText};
`;

export const ImagePreview = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.backgroundFormInput};
  object-fit: cover;
`;

export const ErrorStyle = styled.div`
  position: absolute;
  bottom: 0px;
`;

export const StyledSpan = styled.span`
  color: ${props => props.theme.colors.accent};
`;
