import styled from 'styled-components';
import defaultImg from '../../../images/defaultImg.jpg';
import { StyledNavButton } from 'components/ReusableComponents/Buttons/StyledNavButton';
import { noticeLabelTranform } from 'utils/noticeLabelTranform';

const StyledModal = styled.div`
  background: white;
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: auto;
`;

const ModalNotice = ({ noticeDetails }) => {
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
      <h2>Detailed info about notice</h2>

      <div>
        <div>
          <p>{noticeLabelTranform(category)}</p>
          <img src={defaultImg} alt="title" width="300px" />
        </div>

        <div>
          <h2>{title}</h2>
          <ul>
            <li>
              <p>Name:</p>
              <p>{name}</p>
            </li>
            <li>
              <p>Birthday:</p>
              <p>{birthdate}</p>
            </li>
            <li>
              <p>Breed:</p>
              <p>{breed}</p>
            </li>
            <li>
              <p>Place:</p>
              <p>{location}</p>
            </li>
            <li>
              <p>The sex:</p>
              <p>{sex[0] || 'no data'}</p>
            </li>
            {category === 'Sell' && (
              <li>
                <p>Price:</p>
                <p>{price || ''}</p>
              </li>
            )}
            <li>
              <p>Email:</p>
              <p>{owner.email}</p>
            </li>
            <li>
              <p>Phone:</p>
              <p>{owner.phone}</p>
            </li>
          </ul>
        </div>

        <p>{comments}</p>
      </div>

      {/* кнопки возможно будут другие - type button, вместо навЛинк */}
      <StyledNavButton buttonName="Add to" />
      <StyledNavButton buttonName="Contact" />
    </StyledModal>
  );
};

export default ModalNotice;
