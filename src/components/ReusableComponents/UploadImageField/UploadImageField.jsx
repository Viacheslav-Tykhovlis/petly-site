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
          <ImagePreview src={fileDataURL} alt="Preview" />
        </LoadImageCont>
      ) : (
        <>
          <LoadImageCont>
            <PlusIcon width="50" height="50" viewBox="0 0 50 50">
              <path
                d="M25 49V25M25 25V1M25 25H49M25 25H1"
                stroke="#111111"
                strokeOpacity="0.6"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </PlusIcon>

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
