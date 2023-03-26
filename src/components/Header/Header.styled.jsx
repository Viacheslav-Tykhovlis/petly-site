import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 16px;
  /* padding-bottom: 42px; */

  @media screen and (min-width: 768px) {
    padding-top: 24px;
    /* padding-bottom: 88px; */
  }
  @media screen and (min-width: 1280px) {
    padding-top: 20px;
    /* padding-bottom: 60px; */
  }
`;
