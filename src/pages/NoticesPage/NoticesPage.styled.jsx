import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: 42px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 88px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 59px;
    padding-bottom: 200px;
  }
`;

export const ButtonBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
