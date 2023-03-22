import styled from 'styled-components';
import { StyledSvgButton } from '../../ReusableComponents/Buttons/StyledLikeButton';

export const Label = styled.label`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #111111;
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${props => props.margin || '8px'};
`;

export const fieldStyled = {
  boxSizing: 'border-box',

  width: '216px',
  height: '32px',
  marginLeft: 'auto',
  marginRight: '24px',
  paddingTop: '4px',
  paddinBottom: '3px',
  paddingLeft: '12px',

  background: '#fdf7f2',
  border: '1px solid rgba(245, 146, 86, 0.5)',
  borderRadius: '40px',
};

export const formStyled = {
  display: 'flex',
  flexDirection: 'column',
};

const StyledSvgEditButton = styled(StyledSvgButton)`
  width: 32px;
  height: 32px;

  background: #fdf7f2;
  fill: rgba(17, 17, 17, 0.6);
  stroke: none;
`;

export const StyledEditButton = () => {
  return (
    <StyledSvgEditButton type="button">
      <svg width="20" height="20" viewBox="0 0 20 20">
        <path
          d="M17.5343 3.41359C18.1343 3.9848 18.1576 4.93426 17.5864 5.53427L8.06642 15.5343C7.78329 15.8317 7.39062 16 6.98 16C6.56938 16 6.17672 15.8317 5.89359 15.5343L1.41359 10.8284C0.84238 10.2284 0.865727 9.27892 1.46574 8.70771C2.06575 8.1365 3.01521 8.15985 3.58642 8.75986L6.98 12.3245L15.4136 3.46574C15.9848 2.86573 16.9343 2.84238 17.5343 3.41359Z"
          fill="#F59256"
        />
      </svg>
    </StyledSvgEditButton>
  );
};
