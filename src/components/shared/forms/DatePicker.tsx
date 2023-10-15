import { useState, ReactNode } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormLabel, Box, Typography } from "@mui/material";
import {
  PickerChangeHandlerContext,
  DateValidationError,
} from "@mui/x-date-pickers";
// import { ErrorMessage } from "formik";

// Define the type for your component props
interface DateInputProps {
  label: string;
  name: string;
  error: string | undefined;
  //   onChange: (date: Date) => void;
  onChange: (
    value: Date | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => void;
  minDate?: Date;
  maxDate?: Date;
  disablefuture?: boolean;
  disablePast?: boolean;
  required?: ReactNode;
  value: Date | null;
  variant?: string;
  // Add other props here as needed
}

const DateInput: React.FC<DateInputProps> = (props) => {
  const {
    label,
    name,
    error,
    onChange,
    minDate,
    maxDate,
    disablefuture,
    disablePast,
    required,
    value,
    variant,
    ...rest
  } = props;

  const [toggleDate, setToggleDate] = useState(false);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            "& .MuiInputBase-input": {
              paddingTop: variant ? "18px" : "",
              borderBottom: "0px solid #F3F3F3 !important",
              outline: "none",
              backgroundColor: variant ? "#F3F3F3" : "",
            },
            "& .MuiFilledInput-root": {
              borderBottom: "0px solid #F3F3F3 !important",
              outline: "none",
              backgroundColor: "#F3F3F3",
            },
          }}
        >
          <FormLabel
            htmlFor={name}
            sx={{
              color: "black",
              fontWeight: 500,
            }}
          >
            {label}
            <Typography
              component="span"
              sx={{ color: "red", fontSize: "1rem" }}
            >
              {required}
            </Typography>
          </FormLabel>
          <DesktopDatePicker
            views={["year", "month", "day"]}
            disableFuture={disablefuture}
            disablePast={disablePast}
            maxDate={maxDate}
            onChange={onChange}
            openTo="year"
            // inputFormat="DD-MM-YYYY"
            // id={name}
            onClose={() => setToggleDate(false)}
            value={value}
            open={toggleDate}
            // renderInput={(params) => (
            //   <TextField
            //     variant={variant}
            //     sx={{
            //       paddingTop: variant ? "15px" : "10px",
            //       paddingBottom: "20px",
            //       "& .MuiFilledInput-root:before": {
            //         border: "0",
            //         outline: "none",
            //       },
            //       "& .MuiInputBase-root.Mui-disabled": {
            //         backgroundColor: "#F3F3F3",
            //       },
            //     }}
            //     fullWidth
            //     label={label}
            //     onClick={() => {
            //       setToggleDate(true);
            //     }}
            //     {...params}
            //     {...rest}
            //   />
            // )}
          />
        </Box>
      </LocalizationProvider>
      {/* <ErrorMessage name={name} component={TextError} /> */}
    </>
  );
};

export default DateInput;
