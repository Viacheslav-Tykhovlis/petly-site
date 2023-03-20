// модалка создания объявления, открывается при нажатии Add pet

import styled from 'styled-components';

// возможно вынести общие для двух модалок стили в эту папку NoticeModal

const StyledModal = styled.div`
  background: white;
  width: 200px;
  height: 200px;
`;

const ModalAddNotice = () => {
  return (
    <StyledModal>
      <h2>Add pet content</h2>
      <p>41 пункт ТЗ</p>
    </StyledModal>
  );
};

export default ModalAddNotice;
