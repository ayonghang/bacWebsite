import {
  Autocomplete,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { getIn, useFormikContext } from "formik";
import React from "react";

interface Props {
  name: string;
  label: string;
  options: Array;
}

const FromikAutocomplete: React.FC<Props> = ({
  name,
  label,
  options,
  ...props
}) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  const hasError = getIn(errors, name) && getIn(touched, name);

  return (
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: 300 }}
      value={getIn(values, name)}
      onChange={(a, value) => {
        setFieldValue(name, value);
      }}
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={hasError}
          size="small"
          fullWidth
          helperText={hasError && getIn(errors, name)}
          {...props}
        />
      )}
      {...props}
    />
  );
};

export default FromikAutocomplete;
