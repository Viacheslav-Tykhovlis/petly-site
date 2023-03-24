import styled from '@emotion/styled';

export const StyleTitle = styled.h2`
  margin-bottom: ${props => props.M || '18px'};
  color: ${props => props.theme.colors.black};
  font-size: 20px;
  line-height: 27px;
  font-style: normal;
  display: flex;
  align-items: center;
  line-height: 1.35;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    margin-bottom: ${props => props.M || '40px'};

    font-size: 28px;
    line-height: 1.357;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${props => props.M || '24px'};
  }
`;
