import styled from '@emotion/styled';
import {
  RadioSexButton,
  RadioSexLabel,
  RadioSexTitle,
} from '../ModalAddNotice.styled';

const StyledImg = styled.img`
  width: ${p => p.size.mobile.width};
  height: ${p => p.size.mobile.height};

  @media (min-width: 768px) {
    width: ${p => p.size.tablet.width};
    height: ${p => p.size.tablet.height};
  }
`;

export const SexRadioButton = ({
  id,
  value,
  label,
  iconSrc,
  altText,
  checked,
  onChange,
  imgSize,
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
    <StyledImg src={iconSrc} alt={altText} size={imgSize} />
    <RadioSexTitle active={checked}>{label}</RadioSexTitle>
  </RadioSexLabel>
);
