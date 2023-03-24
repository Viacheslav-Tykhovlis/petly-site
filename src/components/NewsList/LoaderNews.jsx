import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

export const StyledLoader = styled.section`
  position: absolute;
  top: 240px;
  left: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    top: 300px;
  }
`;

const LoaderNews = () => {
  return (
    <StyledLoader>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </StyledLoader>
  );
};

export default LoaderNews;
