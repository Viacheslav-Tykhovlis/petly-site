
import styled from "styled-components";
import background320 from '../../img/background320.svg';
import background728 from '../../img/background728.svg';
import background1280 from "../../img/background1280.svg"

const SectionRegisterPage = styled.section`
    width: 100vw;
    height: 100vh;
    
    background-image: url(${background320});
    background-repeat: no-repeat;
    background-size: 620px;
    background-attachment: local;
    background-origin: padding-box;
    background-position: left -88px bottom -15%;

    position: fixed;

    
    @media screen and (min-width: 728px) {
    background-image: url(${background728});
    background-size: 1409px;
    background-position: left -363px bottom -16px;
  }

    @media screen and (min-width: 1280px) {
    background-image: url(${background1280});
    background-size: 1280px;
    background-position: left bottom;
  }
`;

export { SectionRegisterPage };