import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import {
  TextareaLabel,
  Textarea,
  TextareaContainer,
  ErrorStyle,
  StyledSpan,
} from './CommentField.styled.jsx';

const CommentField = ({ name, form, plaseHold, comment }) => {
  const [field] = useField(name);

  return (
    <TextareaContainer>
      <TextareaLabel>
        {comment}
        <StyledSpan>*</StyledSpan>
      </TextareaLabel>
      <Textarea
        {...field}
        name={name}
        form={form}
        as="textarea"
        type="text"
        placeholder="Type comments"
      />
      <ErrorStyle name={name} component="div" />
    </TextareaContainer>
  );
};

CommentField.propTypes = {
  name: PropTypes.string,
  form: PropTypes.string,
  plaseHold: PropTypes.string,
  comment: PropTypes.string,
};

export default CommentField;
