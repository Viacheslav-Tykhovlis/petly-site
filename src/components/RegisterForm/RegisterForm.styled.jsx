import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Form = styled.form`
  width: 280px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 40px;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 60px 80px;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 618px;

    &.formsecond {
    padding-bottom: 16px;
  }
  }
`;

const TitleForm = styled.h2`
  color: #111111;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    font-weight: 500;
    line-height: 1.36;
  }
`;

const InputForm = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 24px;
  color: rgb(17, 17, 17);
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.04em;
  background-color: rgb(253, 247, 242);
  border: 1px solid rgb(245, 146, 86);
  border-radius: 40px;
  padding-left: 16px;

  @media screen and (min-width: 768px) {
   height: 52px;
   margin-bottom: 39px;
   padding-left: 32px;
  }

  &.lastinput {
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  margin-top: 40px;
  padding-left: 28px;
  padding-right: 28px;
  color: #ffffff;
  background-color: #f59256;
  border: none;
  border-radius: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0.04em;

    &.buttonback {
    margin-top: 12px;
    color: #000000;
    background-color: #FFFFFF;
    border: 2px solid #F59256;
  }

  @media screen and (min-width: 1280px) {
    height: 48px;
  }
`;

const Paragraph = styled.p`
  margin-top: 40px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.04em;

`;

const Link = styled(NavLink)`
  color: #3091eb;
`;

export { Form, TitleForm, InputForm, Button, Paragraph, Link };
