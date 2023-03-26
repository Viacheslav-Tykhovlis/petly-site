import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 40px;
`;
export const UserWrapper = styled.div`
  display: block;
  margin-top: 61px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    /* display: flex; */
    margin-top: 90px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    margin-top: 57px;
    padding-bottom: 40px;
  }
`;
