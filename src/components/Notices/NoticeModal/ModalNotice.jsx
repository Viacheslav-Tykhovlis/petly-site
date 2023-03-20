// модалка детальной информации по обьявлениям, открывается при нажатии learn more

import styled from 'styled-components';

const StyledModal = styled.div`
  background: white;
  width: 200px;
  height: 200px;
`;

const ModalNotice = () => {
  return (
    <StyledModal>
      <h2>Detailed info about notice</h2>
      <p>36 пункт ТЗ</p>
    </StyledModal>
  );
};

export default ModalNotice;
