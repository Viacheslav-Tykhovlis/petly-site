import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

export const StyledLoader = styled.section`
  position: absolute;
  top: 15vh;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
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

export default Loader;
