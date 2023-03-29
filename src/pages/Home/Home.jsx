import styled from '@emotion/styled';
import dog320 from '../../img/homeImages/fullDogMob.png';
import dog768 from '../../img/homeImages/fullDogTab.png';
import dog1280 from '../../img/homeImages/fullDogDesk.png';

export const Background = styled.div`
  z-index: -100;
  position: absolute;
  bottom: 0;
  margin-top: auto;
  left: 0;
  width: 100%;
  background-image: url(${dog320});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  height: 100vh;

  @media screen and (min-width: 768px) {
    top: 0;
    background-position: center;
    background-image: url(${dog768});
    background-size: 768px 1000px;
  }
  @media screen and (min-width: 1280px) {
    background-size: contain;
    background-position: bottom;
    bottom: 0;
    background-image: url(${dog1280});
  }
`;

export const HomeTitle = styled.h1`
  padding-top: 60px;

  font-weight: 700;
  font-size: 32px;
  color: #000000;

  @media screen and (min-width: 768px) {
    padding-top: 88px;
    font-size: 68px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 92px;
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
