import { React } from 'react';
import PropTypes from 'prop-types';
import {
  WorkDaysList,
  WorkDaysItem,
  WorkDaysText,
  WorkDaysClosed,
} from './SheduleTable.styled';

const SheduleTable = ({ shedule }) => {
  return (
    <WorkDaysList>
      {shedule.map(({ isOpen, day, from, to, _id }) => (
        <WorkDaysItem key={_id}>
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
      _id: PropTypes.string,
    }),
  ),
};

export default SheduleTable;

/* <table>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>; */
