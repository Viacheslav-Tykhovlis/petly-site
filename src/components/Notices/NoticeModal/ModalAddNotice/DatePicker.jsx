import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StyledDatePicker = styled(DatePicker)`
  width: 240px;
  height: 40px;
  border-radius: 40px;
  font-size: 14px;
  padding-left: 14px;
  background-color: #fdf7f2;
  border: 1px solid
    ${({ __isvalidfield }) =>
      __isvalidfield === 'true' ? 'green' : '#f5925680'};

  &:focus {
    outline: none;
    border: 2px solid #f59256;
  }

  @media screen and (min-width: 768px) {
    width: 448px;
    height: 48px;
    padding-left: 16px;
    font-size: 16px;
  }
`;
