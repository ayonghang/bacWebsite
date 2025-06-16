import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { getIn, useFormikContext } from "formik";
import React from "react";

interface Props {
  name: string;
  label: string;
  options: Array;
}

const FormikSelect: React.FC<Props> = ({
  name,
  label,
  options = [],
  ...props
}) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  const hasError = getIn(errors, name) && getIn(touched, name);

  return (
    <FormControl size="small" fullWidth error={hasError} {...props}>
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={getIn(values, name)}
        label={label}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
        }}
        {...props}>
        {options.map((val) => (
          <MenuItem value={val?.key}>{val?.label}</MenuItem>
        ))}
      </Select>
      {hasError && <FormHelperText>{getIn(errors, name)}</FormHelperText>}
    </FormControl>
  );
};

export default FormikSelect;
