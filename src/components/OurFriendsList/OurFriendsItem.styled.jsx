import styled from '@emotion/styled';

export const Friend = styled.li`
  :not(last-child) {
    @media screen and (max-width: 767px) {
      margin-bottom: 12px;
    }
  }
  z-index: 0;
  flex-basis: 100%;
  text-align: flex-start;
  padding: 12px 4px;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: (7px 4px 14px rgba(49, 21, 4, 0.07));

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 2);
    border-radius: 40px;
    padding: 16px 4px;
    font-size: 14px;
    line-height: 1.36;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 64px) / 3);
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const NameLink = styled.a`
  color: ${props => props.theme.colors.accent};
  text-decoration-color: ${props => props.theme.colors.accent};
`;

export const Name = styled.h2`
  margin-bottom: 12px;
  color: ${props => props.theme.colors.accent};
  font-weight: ${props => props.theme.fontWeight.bold};
  text-align: center;
  font-size: 12px;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.375;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.35;
  }
`;

export const Box = styled.div`
  display: flex;
`;

export const ImgFriend = styled.img`
  width: 120px;
  height: 85px;

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 78px;
  }
  @media screen and (min-width: 1280px) {
    width: 158px;
    height: 112px;
  }
`;

export const DataList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  gap: 4px;

  @media screen and (min-width: 768px) {
    margin-left: 14px;
    gap: 8px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 16px;
    gap: 12px;
  }
`;

export const DataItem = styled.li``;
export const Subtitle = styled.p``;

export const WorkDaysBtn = styled.div`
  display: inline-block;
  cursor: pointer;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  font-size: 12px;
  line-height: 1.33;

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
    transition: ${props => props.theme.animation.cubicBezier};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.36;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const DataLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
    transition: ${props => props.theme.animation.cubicBezier};
  }
`;
