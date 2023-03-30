import styled from 'styled-components';

export const Flex = styled.div`
  margin-left: 0px;
  margin-bottom: 66px;

  position: relative;

  @media screen and (min-width: 768px) {
    margin-left: 52px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
    margin-left: 0px;
  }
`;

export const FlexSvg = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 0px;
  right: 0px;
  bottom: -32px;

  @media screen and (min-width: 1280px) {
    right: 0px;
    bottom: 0px;
  }
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  color: #111111;
  margin-left: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: '0.04em';

  &:focus,
  &:hover {
    color: #f59256;
  }
`;

export const ImageStyled = styled.img`
  width: 233px;
  height: 233px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 50%;
  object-fit: cover;
  aspect-ratio: 4/4;
`;

export const ImageCover = styled.img`
  width: 233px;
  height: 233px;
  margin-left: auto;
  margin-right: auto;
`;

export const inputfile = {
  width: '0.1px',
  height: '0.1px',
  opacity: 0,
  overflow: 'hidden',
  position: 'absolute',
  zIndex: -1,
};
