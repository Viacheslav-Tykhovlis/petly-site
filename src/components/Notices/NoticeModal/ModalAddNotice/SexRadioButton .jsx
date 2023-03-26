import {
  RadioSexButton,
  RadioSexLabel,
  RadioSexTitle,
} from '../ModalAddNotice.styled';

export const SexRadioButton = ({
  id,
  value,
  label,
  iconSrc,
  altText,
  checked,
  onChange,
}) => (
  <RadioSexLabel htmlFor={id}>
    <RadioSexButton
      type="radio"
      name="sex"
      value={value}
      id={id}
      checked={checked}
      onChange={onChange}
    />
    <img src={iconSrc} alt={altText} />
    <RadioSexTitle active={checked}>{label}</RadioSexTitle>
  </RadioSexLabel>
);
