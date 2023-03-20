import styled from '@emotion/styled';

export const OurFriendsUl = styled.ul`
  margin-top: 28px;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 30px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 60px;
  }
`;
