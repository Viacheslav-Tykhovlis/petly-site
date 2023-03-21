import styled from 'styled-components';

export const CameraStyle = {
  height: '26px',
  width: '26px',
  marginRight: '4px',
  color: '#f59256',
};

export const PlusStyle = {
  height: '71px',
  width: '71px',
  color: 'rgba(17, 17, 17, 0.6)',
};

export const Button = styled.button`
  margin-top: 24px;
  background: #ffffff;
  padding: 0px;
  border: 0px;
  svg {
    fill: #f59256;
  }

  &:focus,
  &:hover {
    svg {
      fill: rgba(17, 17, 17, 0.6);
    }
  }
`;
export const Flex = styled.div`
  margin-bottom: 32px;

  position: relative;
`;
export const FlexSvg = styled.div`
  position: absolute;
  display: flex;
  align-item: center;
  right: 0px;
  bottom: 0px;
`;
export const Span = styled.span`
  display: flex;
  align-items: center;
  color: #111111;
`;

export const ImageStyled = styled.div`
  display: flex;
  width: 233px;
  height: 233px;
  margin-left: auto;
  margin-right: auto;
  background: #fdf7f2;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

export const EditPhotoBtnText = {
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: 1.83,
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.04em',
  color: '#111111',
};

export const inputfile = {
  width: '0.1px',
  height: '0.1px',
  opacity: 0,
  overflow: 'hidden',
  position: 'absolute',
  zIndex: -1,
};
