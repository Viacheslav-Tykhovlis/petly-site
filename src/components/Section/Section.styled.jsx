import styled from 'styled-components';

export const SectionBox = styled.main`
  margin: 0 auto;
  padding-top: 42px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 90px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 200px;
  }
`;
