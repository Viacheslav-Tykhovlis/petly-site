import styled from '@emotion/styled';

export const Tit = styled.h1`
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.colors.black};
  font-size: 24px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
