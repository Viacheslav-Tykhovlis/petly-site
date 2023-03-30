import React from 'react';
import { Button } from './ButtonUser.styled';
import { ButtonPencil, ButtonCheck } from './ButtonUser';

export const ButtonUpdate = ({
  isInputDisabled,
  type = 'button',
  onClick,
  disabled,
}) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {isInputDisabled ? (
        <ButtonPencil
          disabled={disabled}
          widthM={'20px'}
          heightM={'20px'}
          widthT={'32px'}
          heightT={'32px'}
          widthMsvg={'12.5px'}
          heighthMsvg={'12.5px'}
          widthTsvg={'20px'}
          heighthTsvg={'20px'}
          bgT={'#fdf7f2'}
          bgM={'#fdf7f2'}
        />
      ) : (
        <ButtonCheck
          widthM={'20px'}
          heightM={'20px'}
          widthT={'32px'}
          heightT={'32px'}
          widthMsvg={'12.5px'}
          heighthMsvg={'12.5px'}
          widthTsvg={'20px'}
          heighthTsvg={'20px'}
          bgT={'#fdf7f2'}
          bgM={'#fdf7f2'}
        />
      )}
    </Button>
  );
};
