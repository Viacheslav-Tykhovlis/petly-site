import styled from '@emotion/styled';

export const Friend = styled.li`
  text-align: flex-start;
  padding: 14px 4px 12px 4px;
  font-size: 12px;
  line-height: 1, 33;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  filter: drop-shadow(7px 4px 14px rgba(49, 21, 4, 0.07));
`;

export const NameFriend = styled.h2`
  text-decoration: underline;
  color: ${props => props.theme.colors.accent};
  font-weight: ${props => props.theme.fontWeight.bold};
  margin-bottom: 12px;
  text-align: center;
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
`;

export const DataItem = styled.li``;

export const Subtitle = styled.p``;

export const TimeWork = styled.ul``;
export const TimeWorkItem = styled.li``;
export const TimeWorkText = styled.p``;
export const Adress = styled.p``;
export const TimeLink = styled.a``;
export const AdressLink = styled.a``;
export const ImageLink = styled.a``;

export const EmailLink = styled.a``;

export const PhoneLink = styled.a``;
