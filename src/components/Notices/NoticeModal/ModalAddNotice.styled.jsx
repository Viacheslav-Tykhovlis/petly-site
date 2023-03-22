import styled from '@emotion/styled';
import { Field } from 'formik';

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  background: ${p => p.theme.colors.white};
  width: 280px;
  height: 800px;
  row-gap: 1rem;
  padding: 20px;
  border-radius: 40px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5em;
`;
export const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const StyledInput = styled(Field)`
  width: 240px;
`;

export const BtnsWrapper = styled.div``;
