import styled from 'styled-components';

import { StyledNavButton } from 'components/ReusableComponents/Buttons/StyledNavButton';
import { noticeLabelTranform } from 'utils/noticeLabelTranform';
import { CloseButton, CloseModalButton } from './ModalAddNotice.styled';
import { RxCross1 } from 'react-icons/rx';
import defaultImg from '../../../images/defaultImg.jpg';

export const ButtonClose = styled(CloseButton);

export const StyledModal = styled.div`
  position: relative;
  background: white;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  height: auto;
  padding: 60px 20px 40px 20px;

  background: #ffffff;
  border-radius: 20px;

  @media screen and (min-width: 320px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 20px;
  }
`;

export const ImageWrap = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;
`;

export const ModalLabel = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 158px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);

  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
`;

export const StyledTitle = styled.h2`
  padding: 16px 0;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.36;
  letter-spacing: -0.01em;

  color: #111111;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 55px;
  padding-bottom: 28px;
`;

export const Features = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.36;

  color: #000000;
`;

export const Descr = styled.p`
  font-size: 14px;
  line-height: 1.36;

  color: #000000;
`;

export const DescrSpan = styled.span`
  font-size: 14px;
  line-height: 1.36;

  color: #000000;
`;

export const ButtonBox = styled.div`
  padding: 40px 0;
  display: flex;
  gap: 12px;
  flex-direction: column;
  /* justify-content: center; */
  /* height: 88px; */
  /* 
  @media screen and (min-width: 768px) {
    padding: 0 44px 12px 44px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 20px 12px 20px;
  } */
`;

const ModalNotice = ({ noticeDetails, onClose }) => {
  const {
    // _id,
    category,
    title,
    name,
    birthdate,
    breed,
    sex,
    location,
    comments,
    price,
    // image,
    // favorite,
    owner,
  } = noticeDetails;

  return (
    <StyledModal>
      <CloseModalButton onClick={onClose}>
        <RxCross1 />
      </CloseModalButton>

      <ModalLabel>
        <p>{noticeLabelTranform(category)}</p>
      </ModalLabel>

      <ImageWrap>
        <img src={defaultImg} alt="title" />
      </ImageWrap>

      <StyledTitle>{title}</StyledTitle>

      <StyledList>
        <Features>
          <Text>Name:</Text>
          <Text>Birthday:</Text>
          <Text>Breed:</Text>
          <Text>Place:</Text>
          <Text>The sex:</Text>
          {category === 'sell' && <Text>Price:</Text>}
          <Text>Email:</Text>
          <Text>Phone:</Text>
        </Features>
        <Features>
          <Descr>{name} </Descr>
          <Descr>{birthdate}</Descr>
          <Descr>{breed}</Descr>
          <Descr>{location}</Descr>
          <Descr>{sex[0]}</Descr>
          {category === 'sell' && <Descr>{price}</Descr>}
          <Descr>{owner?.email}</Descr>
          <Descr>{owner?.phone}</Descr>
        </Features>
      </StyledList>

      <Text>
        Comments: <DescrSpan>{comments}</DescrSpan>
      </Text>

      {/* кнопки возможно будут другие - type button, вместо навЛинк */}
      <ButtonBox>
        <StyledNavButton buttonName="Add to" />
        <StyledNavButton buttonName="Contact" />
      </ButtonBox>
    </StyledModal>
  );
};

export default ModalNotice;
