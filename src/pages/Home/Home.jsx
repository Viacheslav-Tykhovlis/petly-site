import styled from '@emotion/styled';
import dog320 from '../../img/homeImages/fullDogMob.png';
import dog768 from '../../img/homeImages/fullDogTab.png';
import dog1280 from '../../img/homeImages/fullDogDesk.png';

export const Background = styled.div`
  z-index: -100;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-image: url(${dog320});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  height: 395px;

  @media screen and (min-width: 768px) {
    /* margin-top: -270px; */
    height: 1008px;
    background-image: url(${dog768});
  }
  @media screen and (min-width: 1280px) {
    /* margin-top: -308px; */
    height: 700px;
    background-image: url(${dog1280});
  }
`;

export const HomeTitle = styled.h1`
  padding-top: 20px;

  font-weight: 700;
  font-size: 32px;
  color: #000000;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    font-size: 68px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 32px;
  }
`;

const Home = () => {
  return (
    <section>
      <HomeTitle>
        Take good care of <br></br> your small pets
      </HomeTitle>
      <Background />
    </section>
  );
};

export default Home;
