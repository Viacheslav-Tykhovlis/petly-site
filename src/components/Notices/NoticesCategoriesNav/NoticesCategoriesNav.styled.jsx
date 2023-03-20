import styled from 'styled-components';

export const NavBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding-bottom: 30px;

  @media screen and (min-width: 768px) {
    padding-bottom: 60px;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const NavBox1 = styled.div`
  display: flex;
  gap: 12px;
`;

export const NavBox2 = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: flex-end;

  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
  }
`;

export const NavBox3 = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NavUsersBox = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;
