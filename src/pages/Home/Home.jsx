import styled from '@emotion/styled';
import WaveMob from '../../img/HomePageBG/Wave@1x.png';
import WaveTab from '../../img/HomePageBG/Wave@2x.png';
import WaveDes from '../../img/HomePageBG/Frame@2x.png';
import DogMob from '../../img/HomePageDog/Dog@1x.png';
import DogTab from '../../img/HomePageDog/Dog@2x.png';
import Union from '../../img/HomePageBG/Union.png';

export const HomePageBG = styled.div`
  background: transparent;
  z-index: -100;
  position: absolute;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-height: 600px;

  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 280px 364px, 620px 470px;

  background-image: url(${DogMob}), url(${WaveMob});

  @media screen and (min-width: 768px) {
    background-size: 700px 850px, 1449px 1094px;
    min-height: 1250px;
    background-image: url(${DogTab}), url(${WaveTab});
  }

  @media screen and (min-width: 1280px) {
    background-size: 624px 755px, 1300px 538px, 90px 90px;
    min-height: 800px;
    background-position: calc(50% + 400px) bottom, center bottom,
      50% calc(50% - 300px);
    background-image: url(${DogTab}), url(${WaveDes}), url(${Union});
  }
`;

export const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 768px;
  margin: auto;

  @media screen and (min-width: 768px) {
    justify-content: start;
    max-width: 768px;
    margin: auto;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const HomeTitle = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: 60px;

  font-weight: 700;
  font-size: 32px;
  color: #000000;

  @media screen and (min-width: 768px) {
    justify-content: start;
    padding-left: 32px;
    padding-top: 88px;
    font-size: 68px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 92px;
    padding-left: 16px;
  }
`;

const Home = () => {
  return (
    <>
      <HomePageBG>
        <HomePageContainer>
          <HomeTitle>
            Take good care of <br></br> your small pets
          </HomeTitle>
        </HomePageContainer>
      </HomePageBG>
    </>
  );
};

export default Home;
