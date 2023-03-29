import styled from '@emotion/styled';
import waveMobile from '../../../img/register/wave-login-register.svg';
import waveTablet from '../../../img/register/login-register-tablet.svg';
import waveDesktop from '../../../img/register/login-register-desk.svg';

export const Wrapper = styled.div`
  background: bottom -130px left 0 / contain no-repeat url(${waveMobile});
  background-size: 100% 456px;
  width: 100%;
  height: 100%;

  ${props => props.theme.mq.tablet} {
    background: bottom 0 left 0 / contain no-repeat url(${waveTablet});
    background-size: 100%;
  }

  ${props => props.theme.mq.desktop} {
    background: bottom 65px center no-repeat url(${waveDesktop});
  }
`;
