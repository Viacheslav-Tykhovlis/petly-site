import { React } from 'react';
import PropTypes from 'prop-types';
import {
  WorkDaysList,
  WorkDaysItem,
  WorkDaysText,
  WorkDaysClosed,
  // DayList,
  // DayItem,
  // TimeList,
  // TimeItem,
} from './SheduleTable.styled';

const SheduleTable = ({ shedule }) => {
  return (
    <WorkDaysList>
      {shedule.map(({ isOpen, _id, day, from, to, index }) => (
        <WorkDaysItem key={index}>
          {isOpen ? (
            <WorkDaysText>
              {day} {from}-{to}
            </WorkDaysText>
          ) : (
            <WorkDaysClosed>{day} - Сlosed</WorkDaysClosed>
          )}
        </WorkDaysItem>
      ))}
    </WorkDaysList>
  );
};

SheduleTable.propTypes = {
  shedule: PropTypes.arrayOf(
    PropTypes.exact({
      isOpen: PropTypes.bool,
      from: PropTypes.string,
      to: PropTypes.string,
      day: PropTypes.string.isRequired,
    }),
  ),
};

export default SheduleTable;

/* <table>
  <tr>
    <td>Ячейка 1-1</td>
    <td>Ячейка 1-2</td>
  </tr>
</table>; */
