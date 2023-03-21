import styled from '@emotion/styled';

export const WorkDaysList = styled.ul`
  position: absolute;
  z-index: 1000;
  top: 44px;
  left: -2px;
  min-width: 120px;
  min-height: 160px;
  padding: 12px;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.accent};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
export const WorkDaysItem = styled.li`
  :not(last-child) {
    margin-bottom: 4px;
  }
`;

export const WorkDaysText = styled.p`
  font-size: 12px;
  line-height: 1, 33;
  /* color: #008000; */
  color: ${props => props.theme.colors.black};
`;

export const WorkDaysClosed = styled.p`
  font-size: 12px;
  line-height: 1, 33;
  color: #ff0000;
`;

// export const DayList = styled.ul`
//   display: flex;
//   justify-content: space-around;
// `;

// export const DayItem = styled.li``;
// export const TimeList = styled.ul``;
// export const TimeItem = styled.li`
//   display: inline;
//   text-align: right;
// `;
