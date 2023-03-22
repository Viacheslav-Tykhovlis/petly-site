import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Form = styled.form`
    width: 280px;
   display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: transparent;
    
  @media screen and (min-width: 728px) {
   width: 608px;
   height: 583px;
   padding: 60px 80px 40px 80px;
   background: #FFFFFF;
   box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
   border-radius: 40px;
     }
`;

const TitleForm = styled.h2`
  weight: 700;
  font-size: 24px;
  margin-bottom: 40px;

  @media screen and (min-width: 728px) {
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
  background-color: rgb(253, 247, 242);
  border: 1px solid rgb(245, 146, 86);
  border-radius: 40px;
  padding-left: 16px;

  &.lastinput {
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  margin-top: 40px;
  margin-bottom: 40px;
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
  line-height: 27px;
`;

const Paragraph = styled.p`
font-size: 12px;
font-weight: 400;
line-height: 1.33;

@media screen and (min-width: 728px) {

}
`;

const Link = styled(NavLink)`
   color: #3091EB;
`;

export { Form, TitleForm, InputForm, Button, Paragraph, Link };
