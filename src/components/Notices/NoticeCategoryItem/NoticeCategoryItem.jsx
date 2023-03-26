import { useState } from 'react';
import { useSelector } from 'react-redux';

import { StyledLearnMoreButton } from 'components/ReusableComponents/Buttons/StyledLearnMoreButton';
import { StyledLikeButton } from 'components/ReusableComponents/Buttons/StyledLikeButton';
import { Modal } from 'components/Modal/Modal';
import ModalNotice from '../NoticeModal/ModalNotice';
// import Loader from 'components/Loader/Loader';

import { fetchNoticeById } from 'services/getNoticesById';
import { noticeLabelTranform } from 'utils/noticeLabelTranform';

import {
  StyledItem,
  Lable,
  StyledTitle,
  StyledList,
  ButtonBox,
  ImageCardWrap,
  CardImage,
  Row,
  TableBody,
  FirstColumn,
  Table,
  SecondColumn,
} from './NoticeCategoryItem.styled';

import { StyledDeleteButton } from 'components/ReusableComponents/Buttons/StyledDeleteButton';

import { selectIsLoggedIn } from 'redux/login/logIn-selectors';
import { getIsLoading } from 'redux/notices/noticesSelectors';

import defaultImg from '../../../img/defaultImg.jpg';

const NoticeCategoryItem = ({ notice }) => {
  const isLoading = useSelector(getIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [noticeDetails, setNoticeDetails] = useState(null);

  const { _id, category, title, birthdate, breed, location, price, image } =
    notice;

  const onLearMoreButtonClick = () => {
    setShowDetailsModal(!showDetailsModal);
    searchNoticeById(_id);
  };

  const searchNoticeById = async () => {
    try {
      const { data } = await fetchNoticeById(_id);
      setNoticeDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onAddToFavorite = () => {
    if (!isLoggedIn) {
      return alert('Please, signup or login to add notice to favorites');
    }
    console.log('add to faforite');
  };

  const onDeleteFromFavorite = () => {
    console.log('delete from faforite');
  };

  return (
    <>
      <StyledItem>
        <Lable>
          <p>{noticeLabelTranform(category)}</p>
        </Lable>

        <ImageCardWrap>
          <CardImage src={image || defaultImg} alt={title} />
        </ImageCardWrap>

        <StyledLikeButton onButtonClick={onAddToFavorite} />
        <StyledTitle>{title}</StyledTitle>
        <StyledList>
          <Table>
            <TableBody>
              <Row>
                <FirstColumn>Breed:</FirstColumn>
                <SecondColumn>{breed || '-'}</SecondColumn>
              </Row>
              <Row>
                <FirstColumn>Place:</FirstColumn>
                <SecondColumn>{location || '-'}</SecondColumn>
              </Row>
              <Row>
                <FirstColumn>Age:</FirstColumn>
                <SecondColumn>{birthdate || '-'}</SecondColumn>
              </Row>
              {category === 'sell' && (
                <Row>
                  <FirstColumn>Price:</FirstColumn>
                  <SecondColumn>{`${price || '-'}`}</SecondColumn>
                </Row>
              )}
            </TableBody>
          </Table>
        </StyledList>

        <ButtonBox>
          <StyledLearnMoreButton
            onButtonClick={onLearMoreButtonClick}
            buttonName="Learn more"
          />
          {true && (
            <StyledDeleteButton
              onButtonClick={onDeleteFromFavorite}
              buttonName="Delete"
            />
          )}
        </ButtonBox>
      </StyledItem>

      {!isLoading && noticeDetails && showDetailsModal && (
        <Modal onClose={onLearMoreButtonClick}>
          <ModalNotice
            noticeDetails={noticeDetails}
            onClose={onLearMoreButtonClick}
            onAddToFavorite={onAddToFavorite}
          />
        </Modal>
      )}
    </>
  );
};

export default NoticeCategoryItem;
