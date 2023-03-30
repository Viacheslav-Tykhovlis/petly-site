import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Txt = styled.p`
  font-size: 16px;
  font-weight: 500px;
  color: inherit;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1280) {
    font-size: 24px;
  }
`;
export const Img = styled.img`
  width: 100px;

  @media screen and (min-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 1280) {
    font-size: 24px;

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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  animation: ${rotateHead} 1s ease-in-out infinite;
  -moz-animation: ${rotateHead} 1s ease-in-out infinite;
  -webkit-animation: ${rotateHead} 1s ease-in-out infinite;
`;
