import styled from 'styled-components';
import background320 from '../../img/background320.svg';
import background728 from '../../img/background728.svg';
import background1280 from '../../img/background1280.svg';

const SectionRegisterPage = styled.section`
  display: block;
  width: 100%;
  min-height: 100%;
  padding-top: 40px;
  padding-bottom: 87px;
  margin-left: auto;
  margin-right: auto;

  background-image: url(${background320});
  background-repeat: no-repeat;
  background-size: 620px;
  background-attachment: local;
  background-origin: padding-box;
  background-position: left -88px bottom -290px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 168px;
    padding-bottom: 360px;
    background-image: url(${background728});
    background-size: 1409px;
    background-position: left -363px bottom -136px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 44px;
    padding-bottom: 70px;
    background-image: url(${background1280});
    background-size: 1396px;
    background-position: left -116px bottom -132px;
  }
`;

export { SectionRegisterPage };
