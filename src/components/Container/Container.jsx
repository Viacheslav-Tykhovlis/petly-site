import styled from 'styled-components';

const ContainerWrapp = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;

    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;

    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Container = ({ children }) => {
  return <ContainerWrapp>{children}</ContainerWrapp>;
};

export default Container;
