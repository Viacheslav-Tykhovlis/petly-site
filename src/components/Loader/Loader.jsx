import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

const StyledLoader = styled.section`
  height: 15vh;
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
