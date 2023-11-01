import { useState, ReactNode } from "react";
import TextField, { TextFieldVariants } from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormLabel, Box, Typography, FormControl } from "@mui/material";
import {
  DateTimePicker,
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
// import {
//   PickerChangeHandlerContext,
//   DateValidationError,
// } from "@mui/x-date-pickers";
import {
  ErrorMessage,
  Field,
  FieldProps,
  FormikProps,
  useFormikContext,
} from "formik";
import { InputErrorText } from "./InputFieldError";
import FormControlWrapper from "./FormControlWrapper";
import dayjs from "dayjs";

// Define the type for your component props
interface MyFormValues {
  [key: string]: string | number | Date;
}
interface DateInputProps {
  id: string | number;
  label: string;
  name: string;
  error?: string | undefined;
  // onChange?: (v: string) => void;
  // onChange: (date: Date) => void;
  onChange: (
    value: Date,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => void;
  // minDate?: string | number | null;
  // maxDate?: string | number | Date;
  disablefuture?: boolean;
  disablePast?: boolean;
  required?: ReactNode;
  value?: string | number | Date;
  variant?: TextFieldVariants;
  // id: string;
  helperText?: string;
}

const DateInput: React.FC<DateInputProps> = (props) => {
  const {
    // id,
    // label,
    // name,
    // error,
    // onChange,
    // minDate,
    // maxDate,
    disablefuture,
    disablePast,
    // required,
    value,
    variant,
    // helperText,
    // ...rest
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormControlWrapper
          name={props.name}
          label={props.label}
          helperText={props.helperText}
        >
          <FormControl fullWidth>
            <Field name={props.name}>
              {({ field, form }: FieldProps) => {
                return (
                  <DateTimePicker
                    views={["year", "day", "hours", "minutes"]}
                    disablePast
                    onChange={(date) =>
                      form.setFieldValue(
                        props.name,
                        dayjs(date).format("DD-MM-YYYY h:mm a")
                      )
                    }
                    value={field.value}
                    // format="DD-MM-YYYY h:mm A"
                  />
                );
              }}
            </Field>
          </FormControl>
        </FormControlWrapper>
      </LocalizationProvider>
      <ErrorMessage
        name={props.name}
        children={(error: string) => <InputErrorText errorText={error} />}
      />
    </>
  );
};

export default DateInput;
