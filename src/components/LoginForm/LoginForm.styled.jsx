import styled from 'styled-components';

export const LogInWrapper = styled.div`
  display: block;
  /* outline: 1px solid red; */
  padding: 0 20px;
  max-width: 100%;
  margin: auto;
`;

export const LogInTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: 0.04em;
`;

export const LogInInput = styled.input`
  width: 100%;
  padding: 11px 14px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 24px;
`;

export const LogInButton = styled.button`
  width: 100%;
  background: #f59256;
  border-radius: 40px;
  border: transparent;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  padding: 8px 0;
  margin-top: 16px;
  margin-bottom: 40px;
`;

export const LogInText = styled.span`
  text-align: center;
`;
