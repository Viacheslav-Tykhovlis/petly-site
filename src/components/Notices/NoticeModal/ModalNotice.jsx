import { noticeLabelTranform } from 'utils/noticeLabelTranform';
import { CloseModalButton } from './ModalAddNotice.styled';
import { StyledContactButton } from 'components/ReusableComponents/Buttons/StyledContactButton';
import { StyledAddToFavoriteButton } from 'components/ReusableComponents/Buttons/StyledAddToFavorite';

import {
  StyledModal,
  ImageWrap,
  ModalLabel,
  StyledTitle,
  ImageListBox,
  StyledList,
  Features,
  Text,
  Descr,
  DescrSpan,
  ButtonBox,
  Link,
} from './ModalNotice.styled';

import defaultImg from '../../../img/defaultImg.jpg';

const ModalNotice = ({ noticeDetails, onClose, onAddToFavorite, loading }) => {
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
      <CloseModalButton onClick={onClose} />

      <ModalLabel>
        <p>{noticeLabelTranform(category)}</p>
      </ModalLabel>

      <ImageListBox>
        <ImageWrap>
          <img src={defaultImg} alt="title" />
        </ImageWrap>

        <div>
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
              <Descr>{name || '-'} </Descr>
              <Descr>{birthdate || '-'}</Descr>
              <Descr>{breed || '-'}</Descr>
              <Descr>{location || '-'}</Descr>
              <Descr>{sex[0] || '-'}</Descr>
              {category === 'sell' && <Descr>{`${price || '-'}$`}</Descr>}
              <Link href={`mailto:${owner?.phone}`}>{owner?.email || '-'}</Link>
              <Link href={`tel:${owner?.phone}`}>{owner?.phone || '-'}</Link>
            </Features>
          </StyledList>
        </div>
      </ImageListBox>

      <Text>
        Comments: <DescrSpan>{comments}</DescrSpan>
      </Text>

      <ButtonBox>
        <StyledAddToFavoriteButton
          onAddToFavorite={onAddToFavorite}
          buttonName="Add to"
        />
        <StyledContactButton
          route={`tel:${owner?.phone}`}
          buttonName="Contact"
        />
      </ButtonBox>
    </StyledModal>
  );
};

export default ModalNotice;
