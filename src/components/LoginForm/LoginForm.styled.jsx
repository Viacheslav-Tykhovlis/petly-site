import styled from 'styled-components';
import bg320 from './background/bg320Auth.png';
import bg780 from './background/bg768Auth.png';
import bg1280 from './background/bg1280Auth.png';
import { Field } from 'formik';
import { NavLink } from 'react-router-dom';

export const LogInWrapper = styled.div`
  display: block;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 32px;

  @media screen and (min-width: 768px) {
    max-width: 608px;
    min-height: 492px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    padding: 60px 75px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 618px;
    min-height: 496px;
    padding: 60px 80px;
  }
`;

export const LogInTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: 0.04em;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    font-size: 36px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const LogInInput = styled(Field)`
  width: 100%;
  padding: 11px 14px;
  background-color: #fdf7f2;
  border: ${props => props.border || `1px solid rgba(245, 146, 86, 0.5)`};
  margin-bottom: ${props => props.marginbottom || `24px`};
  border-radius: 40px;
  font-size: 14px;
  letter-spacing: 0.04em;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(17, 17, 17, 0.6);
  outline-color: rgba(245, 146, 86, 0.5);
  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    font-size: 18px;
    margin-bottom: ${props => props.marginbottom || `39px`};
  }
  @media screen and (min-width: 1280px) {
    padding: 14px 32px;
    font-size: 18px;
    margin-bottom: ${props => props.marginbottom || `16px`};
  }
`;

export const LogInButton = styled.button`
  width: 100%;
  background: #f59256;
  border-radius: 40px;
  border: 2px solid transparent;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 8px 0;
  margin-top: 16px;
  margin-bottom: 40px;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 1);
    border: 2px solid #f59256;
    color: rgba(0, 0, 0, 1);
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
      color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (min-width: 768px) {
    width: 458px;
  }
  @media screen and (min-width: 1280px) {
    width: 458px;
  }
`;

export const LogInText = styled.p`
  text-align: center;
  color: rgba(17, 17, 17, 0.6);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.04em;
`;

export const Anchor = styled(NavLink)`
  color: rgba(48, 145, 235, 1);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.04em;
  margin-left: 3px;
  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.div`
  color: rgba(226, 0, 26, 1);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  margin-bottom: 24px;
  margin-left: 15px;
  @media screen and (min-width: 768px) {
    margin-left: 33px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 33px;
  }
`;

export const ApproveMessage = styled.div`
  color: rgba(60, 188, 129, 1);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  margin-bottom: 24px;
  margin-left: 15px;
  @media screen and (min-width: 768px) {
    margin-left: 33px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 33px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 448px;
  }
`;

export const Icon = styled.svg`
  position: absolute;
  content: '';
  top: 15px;
  right: 18px;
  @media screen and (min-width: 768px) {
    top: 19px;
    right: 20px;
  }
  @media screen and (min-width: 1280px) {
    top: 19px;
    right: 20px;
  }
`;

export const Section = styled.section`
  position: absolute;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin-top: 42px;
  background-image: url(${bg320});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center top 255px;

  @media screen and (min-width: 768px) {
    background-image: url(${bg780});

    margin-top: 204px;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${bg1280});

    margin-top: 80px;
  }
`;
