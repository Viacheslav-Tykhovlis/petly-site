import styled from 'styled-components';
import { StyledSvgButton } from '../../ReusableComponents/Buttons/StyledLikeButton';
import React from 'react';

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.357;

  color: $black-color;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
  margin-top: 0px;
  margin-bottom: 24px;
`;

export const ContainerPets = styled.div`
  position: relative;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  display: flex;

  width: 821px;

  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
`;

const StyledSvgPlusButton = styled(StyledSvgButton)`
  width: 40px;
  height: 40px;

  background: #f59256;
  fill: #ffffff;
  stroke: none;
`;

export const StyledPlusButton = ({ children }) => {
  return (
    <StyledSvgPlusButton type="button">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 20V12M12 12V4M12 12H20M12 12H4"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      {children}
    </StyledSvgPlusButton>
  );
};
