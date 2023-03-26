import styled from '@emotion/styled';

export const StyledItem = styled.li`
  position: relative;
  background: #ffffff;

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;

  @media screen and (min-width: 320px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const Lable = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 158px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);

  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
`;

export const ImageCardWrap = styled.div`
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 288px;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 288px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;

export const CardImage = styled.img`
  object-fit: cover;
  aspect-ratio: 280/288;

  @media screen and (min-width: 768px) {
    aspect-ratio: 336/288;
  }

  @media screen and (min-width: 1280px) {
    aspect-ratio: 288/288;
  }
`;

export const StyledTitle = styled.h2`
  padding: 20px 0 20px 20px;

  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;

  color: #111111;
`;

export const StyledList = styled.ul`
  padding: 0 20px 20px 20px;
  color: #111111; */
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FirstColumn = styled.td`
  min-width: 90px;
  word-break: break-all;
`;

export const SecondColumn = styled.td`
  max-width: 100%;
  word-break: break-all;
`;

export const Row = styled.tr`
  display: flex;
`;

export const ButtonBox = styled.div`
  padding: 0 16px 12px 16px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: center;
  height: 88px;

  @media screen and (min-width: 768px) {
    padding: 0 44px 12px 44px;
    margin-top: auto;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 20px 12px 20px;
  }
`;
