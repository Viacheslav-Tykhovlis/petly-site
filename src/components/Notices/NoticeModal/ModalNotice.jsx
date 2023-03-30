import { StyledAddToFavoriteButton } from 'components/ReusableComponents/Buttons/StyledAddToFavorite';
import { StyledContactButton } from 'components/ReusableComponents/Buttons/StyledContactButton';
import { noticeLabelTranform } from 'utils/noticeLabelTranform';
import { CloseModalButton } from './ModalAddNotice.styled';

import {
  ButtonBox,
  DescrSpan,
  FirstColumn,
  ImageListBox,
  ImageWrap,
  ModalImage,
  ModalLabel,
  Row,
  SecondColumn,
  SecondColumnContacts,
  StyledList,
  StyledModal,
  StyledTitle,
  Table,
  TableBody,
  Text,
} from './ModalNotice.styled';

import defaultImg from '../../../img/defaultImg.jpg';

const ModalNotice = ({
  noticeDetails,
  onClose,
  onAddToFavorite,
  isFavorite,
}) => {
  const {
    category,
    title,
    name,
    birthdate,
    breed,
    sex,
    location,
    comments,
    price,
    image,
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
          <ModalImage src={image || defaultImg} alt="title" />
        </ImageWrap>

        <div>
          <StyledTitle>{title}</StyledTitle>

          <StyledList>
            <Table>
              <TableBody>
                <Row>
                  <FirstColumn>Name:</FirstColumn>
                  <SecondColumn>{name || '-'}</SecondColumn>
                </Row>
                <Row>
                  <FirstColumn>Birthday:</FirstColumn>
                  <SecondColumn>{birthdate || '-'}</SecondColumn>
                </Row>
                <Row>
                  <FirstColumn>Breed:</FirstColumn>
                  <SecondColumn>{breed || '-'}</SecondColumn>
                </Row>
                <Row>
                  <FirstColumn>Location:</FirstColumn>
                  <SecondColumn>{location || '-'}</SecondColumn>
                </Row>
                <Row>
                  <FirstColumn>The sex:</FirstColumn>
                  <SecondColumn>{sex[0] || '-'}</SecondColumn>
                </Row>
                {category === 'sell' && (
                  <Row>
                    <FirstColumn>Price:</FirstColumn>
                    <SecondColumn>{`${price || '-'}$`}</SecondColumn>
                  </Row>
                )}
                <Row>
                  <FirstColumn>Email:</FirstColumn>
                  <td>
                    <SecondColumnContacts href={`mailto:${owner?.email}`}>
                      {owner?.email || '-'}
                    </SecondColumnContacts>
                  </td>
                </Row>
                <Row>
                  <FirstColumn>Phone:</FirstColumn>
                  <td>
                    <SecondColumnContacts href={`tel:${owner?.phone}`}>
                      {owner?.phone || '-'}
                    </SecondColumnContacts>
                  </td>
                </Row>
              </TableBody>
            </Table>
          </StyledList>
        </div>
      </ImageListBox>

      <Text>
        Comments: <DescrSpan>{comments}</DescrSpan>
      </Text>

      <ButtonBox>
        {!isFavorite && (
          <StyledAddToFavoriteButton
            onAddToFavorite={onAddToFavorite}
            buttonName="Add to"
          />
        )}
        {isFavorite && (
          <StyledAddToFavoriteButton
            onAddToFavorite={onAddToFavorite}
            buttonName="Delete from"
          />
        )}
        <StyledContactButton
          route={`tel:${owner?.phone}`}
          buttonName="Contact"
        />
      </ButtonBox>
    </StyledModal>
  );
};

export default ModalNotice;
