import styled from '@emotion/styled';

export const NewsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 20px 100px 20px;

  @media screen and (min-width: 1280px) {
    padding: 88px 20px 100px 20px;
  }
  @media screen and (min-width: 1280px) {
    padding: 58px 20px 200px 20px;
  }
`;
export const StyledForm = styled.form`
  align-self: center;
  display: flex;
  margin-top: 28px;
  margin-bottom: 40px;

  @media screen and (min-width: 320px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 608px;
    margin-bottom: 60px;
    margin-top: 40px;
  }
`;
export const FilterLabel = styled.label`
  position: relative;
`;

export const FilterInput = styled.input`
  border: 1px solid transparent;
  border-color: transparent;
  outline: transparent;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  padding: 9px 12px;
  font-size: 16px;
  font-weight: 500;
  width: 280px;
  color: #535353;
  transition: 0.2s;
  ::placeholder {
    color: #535353;
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: 1px solid rgba(245, 146, 86, 0.5);
  }

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 40px;
  }
`;

export const SearchBtn = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 8px;
  background: transparent;
  border: transparent;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 10px;
  }
`;
export const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 8px;
  background: transparent;
  border: transparent;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  @media screen and (max-width: 767.9px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    gap: 40px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const OneNews = styled.li`
  @media screen and (min-width: 768px) {
    width: calc(50% - 30px);
  }
  @media screen and (min-width: 1280px) {
    width: calc(33.3333% - 30px);
  }
`;
export const NewsLine = styled.div`
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    width: 280px;
    height: 8px;
  }
  @media screen and (min-width: 1280px) {
    width: 340px;
  }
`;
export const NewsTitle = styled.h2`
  margin-bottom: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
`;
export const NewsDescr = styled.p`
  color: #111321;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media screen and (min-width: 768px) {
    -webkit-line-clamp: 6;
  }
  @media screen and (min-width: 1280px) {
    -webkit-line-clamp: 5;
  }
`;
export const NewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const NewsDate = styled.p`
  color: rgba(17, 17, 17, 0.6);
  font-weight: 400;
`;
export const NewsLink = styled.a`
  color: #f59256;
  text-decoration: underline;
  transition: all 250ms ease-in-out;

  &:hover {
    color: #ff7f2f;
    transform: scale(1.05);
  }
`;
