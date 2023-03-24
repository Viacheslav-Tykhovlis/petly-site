import styled from 'styled-components';

export const StyledModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 60px 20px 40px 20px;

  background: #ffffff;
  border-radius: 20px;

  @media screen and (min-width: 320px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 20px;
  }
`;

export const ImageWrap = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 288px;
    height: 328px;
  }
`;

export const ModalLabel = styled.div`
  position: absolute;
  top: 80px;
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

  @media screen and (min-width: 768px) {
    top: 52px;
  }
`;

export const StyledTitle = styled.h2`
  padding: 16px 0;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.36;
  letter-spacing: -0.01em;

  color: #111111;

  @media screen and (min-width: 768px) {
    padding: 0 0 20px 0;
    font-weight: 700;
    font-size: 28px;
  }
`;

export const ImageListBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    padding-bottom: 28px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 55px;
  padding-bottom: 28px;
`;

export const Features = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.36;

  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const Descr = styled.p`
  font-size: 14px;
  line-height: 1.36;

  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const Link = styled.a`
  font-size: 14px;
  line-height: 1.36;

  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const DescrSpan = styled.span`
  font-size: 14px;
  line-height: 1.36;

  color: #000000;

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ButtonBox = styled.div`
  padding-top: 40px;
  display: flex;
  gap: 12px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
