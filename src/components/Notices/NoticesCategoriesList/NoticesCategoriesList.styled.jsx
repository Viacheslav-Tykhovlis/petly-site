import styled from '@emotion/styled';

export const StyledList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
  }
`;
