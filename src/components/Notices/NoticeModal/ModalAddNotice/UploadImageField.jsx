import React from 'react';
import { useField } from 'formik';
import { Box } from 'components/Box/Box';
import {
  StyledSpan,
  ErrorStyle,
  LoadImgLabel,
  LoadImageCont,
  ImagePreview,
  PlusIcon,
  LoadImgInput,
} from './UploadImageField.styled';

const UploadImageField = ({ handleChange, fileDataURL, name, label, form }) => {
  const [meta] = useField(name);
  const { value } = meta;

  return (
    <LoadImgLabel form={form}>
      <Box width="100%" textAlign={form ? 'center' : 'left'}>
        {label}
        <StyledSpan>*</StyledSpan>
      </Box>
      {fileDataURL ? (
        <LoadImageCont>
          <ImagePreview src={fileDataURL} alt="Preview" />
        </LoadImageCont>
      ) : (
        <>
          <LoadImageCont>
            <PlusIcon />
            <ErrorStyle name={name} component="div" />
          </LoadImageCont>
          <LoadImgInput
            selected={value}
            name={name}
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
        </>
      )}
    </LoadImgLabel>
  );
};

export default UploadImageField;
