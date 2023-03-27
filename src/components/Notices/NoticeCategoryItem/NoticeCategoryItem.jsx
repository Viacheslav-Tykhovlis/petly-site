import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { getIsLoading, getNotices } from 'redux/notices/noticesSelectors';

import defaultImg from '../../../img/defaultImg.jpg';
import {
  addToFavorite,
  deleteFromFavorite,
} from 'redux/notices/noticesOperations';

const NoticeCategoryItem = ({ notice }) => {
  const dispatch = useDispatch();
  const notices = useSelector(getNotices);
  const isLoading = useSelector(getIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [noticeDetails, setNoticeDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOwnNotice, setIsOwnNotice] = useState(false);

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
    if (isFavorite) {
      dispatch(addToFavorite(_id));
      setIsFavorite(true);
      console.log(isFavorite);
    }
    if (!isFavorite) {
      dispatch(deleteFromFavorite());
      setIsFavorite(isFavorite);
    }
  };

  useEffect(() => {
    const findOwnNotices = () => {
      // console.log(_id);
      // console.log(notices);
      // const own = notices.some(elem => elem._id === _id);
      // console.log(own);
      // if (own) {
      //   setIsOwnNotice(true);
      //   return;
      // }
      setIsOwnNotice(false);

      // _id
    };
    findOwnNotices();
  }, [_id, notices]);

  const onDeleteNotice = () => {
    console.log('delete notice');
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
                  <SecondColumn>{`${price || '-'}$`}</SecondColumn>
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
          {isLoggedIn && isOwnNotice && (
            <StyledDeleteButton
              onButtonClick={onDeleteNotice}
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
            // isFavorite={isFavorite}
          />
        </Modal>
      )}
    </>
  );
};

export default NoticeCategoryItem;
