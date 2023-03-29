import styled from 'styled-components';

export const Image = styled.img`
  width: 240px;
  height: 240px;
  margin-bottom: 20px;
  border-radius: 20px;
  object-fit: cover;
  aspect-ratio: 4/4;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
    border-radius: 40px;
    margin-right: 32px;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const StyledTextPet = styled.li`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: ${props => props.margin || '12px'};

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #111111;

  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.357;
  }
`;

export const FlexBasket = styled.div`
  position: absolute;
  top: 272px;
  right: 20px;

  @media screen and (min-width: 768px) {
    top: 20px;
  }
`;
