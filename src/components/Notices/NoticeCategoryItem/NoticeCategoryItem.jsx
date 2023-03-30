import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledLearnMoreButton } from 'components/ReusableComponents/Buttons/StyledLearnMoreButton';
import { StyledLikeButton } from 'components/ReusableComponents/Buttons/StyledLikeButton';
import { Modal } from 'components/Modal/Modal';
import ModalNotice from '../NoticeModal/ModalNotice';

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
import {
  getFavoriteNotices,
  getIsLoading,
  getOwnNotices,
} from 'redux/notices/noticesSelectors';

import defaultImg from '../../../img/defaultImg.jpg';
import {
  addToFavorite,
  deleteFromFavorite,
  deleteNotice,
} from 'redux/notices/noticesOperations';
import { showToastInfo } from 'utils/showTost';
import Loader from 'components/Loader/Loader';
import { workWithBirthdate } from 'utils/numdersConverter';

const NoticeCategoryItem = ({ notice }) => {
  const dispatch = useDispatch();
  const ownNotices = useSelector(getOwnNotices);
  const favoriteNotices = useSelector(getFavoriteNotices);
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
      showToastInfo('Please, signup or login to add notice to favorites');
      return;
    }

    if (!isFavorite) {
      dispatch(addToFavorite(_id));
      setIsFavorite(true);
      return;
    }
    if (isFavorite) {
      dispatch(deleteFromFavorite(_id));
      setIsFavorite(false);
      return;
    }
  };

  // find favorite
  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    const findFavoriteNotices = () => {
      const favorite = favoriteNotices.some(elem => elem._id === _id);
      if (favorite) {
        setIsFavorite(true);
        return;
      }
      setIsFavorite(false);
    };
    findFavoriteNotices();
  }, [_id, isLoggedIn, favoriteNotices]);

  // find own
  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    const findOwnNotices = () => {
      const own = ownNotices.some(elem => elem._id === _id);
      if (own) {
        setIsOwnNotice(true);
        return;
      }
      setIsOwnNotice(false);
    };
    findOwnNotices();
  }, [_id, isLoggedIn, ownNotices]);

  const onDeleteNotice = () => {
    if (isFavorite) {
      dispatch(deleteFromFavorite(_id));
    }
    dispatch(deleteNotice(_id));
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

        <StyledLikeButton
          onButtonClick={onAddToFavorite}
          isFavorite={isFavorite}
        />
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
                <SecondColumn>{workWithBirthdate(birthdate)}</SecondColumn>
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

      {showDetailsModal && (
        <Modal onClose={onLearMoreButtonClick}>
          {!isLoading && !noticeDetails && <Loader top="50vh" />}
          {noticeDetails && (
            <ModalNotice
              noticeDetails={noticeDetails}
              onClose={onLearMoreButtonClick}
              onAddToFavorite={onAddToFavorite}
              isFavorite={isFavorite}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default NoticeCategoryItem;
