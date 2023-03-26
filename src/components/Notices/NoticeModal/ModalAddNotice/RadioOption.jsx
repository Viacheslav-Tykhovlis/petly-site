import { StyledField, StyledLabel } from '../ModalAddNotice.styled';

export const RadioOption = ({ name, value, id, label, checked, onChange }) => (
  <StyledLabel htmlFor={id} selected={checked}>
    <StyledField
      type="radio"
      name={name}
      value={value}
      id={id}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </StyledLabel>
);
