import styled from '@emotion/styled';

export const WorkDaysList = styled.ul`
  position: absolute;
  z-index: 1000;
  top: 32px;
  left: 0;
  min-width: 120px;
  min-height: 160px;
  padding: 12px;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.accent};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    top: 40px;
  }

  @media screen and (min-width: 1280px) {
    top: 44px;
  }
`;
export const WorkDaysItem = styled.li`
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.black};
  :not(last-child) {
    margin-bottom: 4px;
  }
`;

export const WorkDaysText = styled.p``;

export const WorkDaysClosed = styled.p`
  color: #ff0000;
`;
