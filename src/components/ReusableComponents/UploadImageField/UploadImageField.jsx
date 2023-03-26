import React from 'react';
import PropTypes from 'prop-types';
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
          <ImagePreview
            src={fileDataURL}
            alt="Preview"
            width="48px"
            height="48px"
          />
        </LoadImageCont>
      ) : (
        <>
          <LoadImageCont>
            <PlusIcon width="48px" height="48px" />
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

UploadImageField.propTypes = {
  handleChange: PropTypes.func,
  fileDataURL: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  form: PropTypes.string,
};

export default UploadImageField;
