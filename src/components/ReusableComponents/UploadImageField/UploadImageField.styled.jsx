import styled from '@emotion/styled';

export const LoadImgLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: ${({ form }) => (form === 'userPet' ? 'center' : 'left')};
  font-family: 'Manrope';
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.37;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 1.08;
    margin-top: ${({ form }) => (form === 'userPet' ? '0px' : '16px')};
  }
`;

export const LoadImageCont = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 208px;
  height: 208px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.backgroundFormInput};
  margin: 20px 0px;
  color: ${props => props.theme.colors.secondaryText};

  @media screen and (min-width: 768px) {
    margin: 20px 0px 40px 0px;
    width: 182px;
    height: 182px;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.backgroundFormInput};
  object-fit: cover;
`;

export const LoadImgInput = styled.input`
  display: none;
`;

export const PlusIcon = styled.svg`
  width: 48px;
  height: 48px;
`;

export const ErrorStyle = styled.div`
  position: absolute;
  bottom: 0;
`;

export const StyledSpan = styled.span`
  color: ${props => props.theme.colors.accent};
`;
