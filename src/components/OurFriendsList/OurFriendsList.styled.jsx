import styled from '@emotion/styled';

export const OurFriendsUl = styled.ul`
  justify-content: center;
  margin-top: 28px;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px;

    margin-top: 60px;
  }
`;
