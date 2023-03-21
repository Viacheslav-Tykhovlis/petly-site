import styled from 'styled-components';

export const Image = styled.img`
  width: 161px;
  height: 161px;
  margin-right: 32px;

  background: url();
  border-radius: 40px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
`;
export const Flex = styled.div`
  display: flex;
`;
export const StyledTextPet = styled.h3`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: ${props => props.margin || '12px'};

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #111111;
`;
