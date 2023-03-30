import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Txt = styled.p`
  font-size: 24px;
  font-weight: 500px;
  color: inherit;
  text-align: center;
`;
export const Img = styled.img`
  width: 100px;

  @media screen and (min-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 1280) {
    width: 300px;
  }
`;

const rotateHead = keyframes`
 {
    50% {
    transform: rotate(-1.5deg);
    -moz-transform: rotate(-1.5deg);
    -webkit-transform: rotate(-1.5deg);
   }
  }
`;

export const DogHead = styled.div`
  z-index: 100;
  animation: ${rotateHead} 1s ease-in-out infinite;
  -moz-animation: ${rotateHead} 1s ease-in-out infinite;
  -webkit-animation: ${rotateHead} 1s ease-in-out infinite;
`;
