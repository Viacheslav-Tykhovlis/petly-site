import styled from '@emotion/styled';

export const Friend = styled.li`
  :not(last-child) {
    @media screen and (max-width: 767px) {
      margin-bottom: 12px;
    }
  }

  flex-basis: 100%;
  text-align: flex-start;
  padding: 12px 4px;
  font-size: 12px;
  line-height: 1, 33;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  filter: drop-shadow(7px 4px 14px rgba(49, 21, 4, 0.07));

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 30px) / 2);
    border-radius: 40px;
    padding: 16px 4px;
    font-size: 14px;
    line-height: 1, 36;
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 60px) / 3);
    font-size: 16px;
    line-height: 1, 375;
  }
`;

export const NameLink = styled.a`
  color: ${props => props.theme.colors.accent};
  text-decoration-color: ${props => props.theme.colors.accent};
  cursor: pointer;
`;

export const Name = styled.h2`
  color: ${props => props.theme.colors.accent};
  font-weight: ${props => props.theme.fontWeight.bold};
  text-align: center;
  margin-bottom: 12px;
  font-size: 12px;
  line-height: 1, 33;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1, 375;
  }
`;

export const Box = styled.div`
  display: flex;
`;

export const ImgFriend = styled.img`
  width: 110px;
  height: 78px;
`;

export const DataList = styled.ul`
  margin-left: 12px;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 768px) {
    margin-left: 14px;
    gap: 8px;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 14px;
  }
`;

export const DataItem = styled.li``;

export const Subtitle = styled.p``;

export const TimeWork = styled.ul``;
export const TimeWorkItem = styled.li``;
export const TimeWorkText = styled.p``;

export const ImageLink = styled.a``;

export const DataLink = styled.a`
  color: ${props => props.theme.colors.black};
`;
