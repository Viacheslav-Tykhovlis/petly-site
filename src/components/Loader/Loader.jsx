import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

const StyledLoader = styled.section`
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
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
