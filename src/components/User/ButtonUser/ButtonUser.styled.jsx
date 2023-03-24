import styled from '@emotion/styled';

export const StyleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.widthM || '18px'};
  height: ${props => props.heightM || '18px'};

  background-color: ${props =>
    props.bgM || 'rgba(255, 255, 255, 0.6)'}; //#fdf7f2
  backdrop-filter: blur(2px);
  border-radius: 50%;
  border: transparent;

  fill: ${props => props.fillM || '#f59256'};
  stroke: ${props => props.strokeM || '#f59256'};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: ${props => props.widthMsvg || '18px'};
    height: ${props => props.heighthMsvg || '18px'};
  }

  &:focus,
  &:hover {
    outline: transparent;
    fill: #f59256;
    stroke: #f59256;
    background-color: ${props => props.bgHover};
    border: ${props => props.borderHover};
  }

  @media screen and (min-width: 768px) {
    width: ${props => props.widthT || '18px'};
    height: ${props => props.heightT || '18px'};
    background-color: ${props => props.bgT || 'rgba(255, 255, 255, 0.6)'};

    svg {
      width: ${props => props.widthTsvg || '18px'};
      height: ${props => props.heighthTsvg || '18px'};
    }
  }
`;
