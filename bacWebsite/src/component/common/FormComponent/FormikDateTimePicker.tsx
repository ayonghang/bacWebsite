import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { getIn, useFormikContext } from "formik";
import dayjs from "dayjs";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";

export default function FormikDateTimePicker({ name, label, ...props }) {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  const hasError = errors[name] && getIn(touched, name);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <MobileDateTimePicker
          label={label}
          slotProps={{
            textField: {
              size: "small",
              error: hasError,
              helperText: errors[name] && errors[name],
              ...props,
            },
          }}
          value={dayjs(getIn(values, name))}
          onChange={(newValue) => setFieldValue(name, dayjs(newValue))}
          {...props}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
