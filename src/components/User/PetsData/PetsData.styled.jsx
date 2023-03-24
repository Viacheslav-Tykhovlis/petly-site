import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 0px;
  margin-top: 0px;
  margin-bottom: 26px;

  @media screen and (min-width: 1280px) {
    padding-right: 16px;
    margin-bottom: 24px;
  }
`;

export const BoxPetsData = styled.div`
  /* display: flex;
  justify-content: space-between;
  padding-right: 16px;
  margin-top: 0px;
  margin-bottom: 24px; */
`;

export const ContainerPets = styled.div`
  width: 280px;
  /* height: 541px; */

  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  position: relative;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    /* height: 230px; */
    border-radius: 40px;
    display: flex;
    margin-bottom: 22px;
  }
  @media screen and (min-width: 1280px) {
    width: 821px;
  }
`;

export const FlexSvg = styled.button`
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fdf7f2;
  border: 0px;
  /* right: 0px; */
  /* bottom: -32px; */

  @media screen and (min-width: 1280px) {
    right: 0px;
    bottom: 0px;
  }
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  color: #111111;
  margin-right: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: '0.04em';

  &:focus,
  &:hover {
    color: #f59256;
  }
`;
