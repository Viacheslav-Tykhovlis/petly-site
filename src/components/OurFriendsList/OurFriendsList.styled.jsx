import styled from '@emotion/styled';

export const OurFriendsUl = styled.ul`
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin-top: 28px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    gap: 32px;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 60px;
  }
`;
