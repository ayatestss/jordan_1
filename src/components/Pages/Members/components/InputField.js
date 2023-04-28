import React from "react";
import { at } from "lodash";
import { useField } from "formik";
import TextField from "@mui/material/TextField";

export default function InputField(props) {
  const { name, label, errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  }

  return (
    <TextField
      id={props.id || name}
      label={label}
      {...field}
      {...rest}
      error={meta.touched && meta.error}
      helperText={_renderHelperText()}
    />
  );
}
