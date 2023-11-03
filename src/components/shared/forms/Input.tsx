import React, { ReactNode } from "react";
import { Field, ErrorMessage, FieldProps } from "formik";
import { InputErrorText } from "../forms/InputFieldError";
import {
  Box,
  FormControl,
  InputAdornment,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import {
  currencyInputFormatter,
  percentageInputFormatter,
} from "../../../utils/helper/input-formatter";
import { Colors } from "../../../constants/colors";

export type InputProps = TextFieldProps & {
  name: string;
  children?: ReactNode;
  startAdornment?: ReactNode;
  currency?: boolean;
  percentage?: boolean;
  ratio?: boolean;
  number?: boolean;
  alphabet?: boolean;
  extraLeft?: ReactNode;
  extraRight?: ReactNode;
  showErrorMessage?: boolean;
  backgroundColor?: boolean;
  maxLength: number;
  variant?: "outlined" | "standard" | "filled";
  multiline?: boolean;
  rows?: number;
};
export const numberRegex = /(?:\b0(?:\.0*|$))|[^\d]/g;
export const AlphabetRegex = /[^a-zA-Z\s]+/g;

export const Input: React.FC<InputProps> = ({
  extraLeft,
  percentage,
  extraRight,
  currency,
  ratio,
  number,
  alphabet,
  backgroundColor,
  showErrorMessage = true,
  maxLength,
  variant,
  multiline,
  startAdornment,
  rows,
  ...props
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    form: FieldProps["form"]
  ) => {
    const target = e.target as HTMLInputElement;
    let input = target.value;

    if (alphabet) {
      input = input?.replace(AlphabetRegex, "");
    }
    if (number) {
      input = input?.replace(numberRegex, "");
    }
    if (currency) {
      const { currency: formattedCurrency } = currencyInputFormatter(
        e.target.value
      );
      input = formattedCurrency;
    }
    if ((percentage || ratio) && (e.nativeEvent as any).data) {
      const { percentage: percentageValue, ratio: ratioValue } =
        percentageInputFormatter(e.target.value);
      input = percentage ? percentageValue : ratioValue;
      e.target.value = input;
    }

    form.handleChange(e);
    props?.onChange?.(e);
    form.setFieldValue(props.name, input);
  };

  return (
    <Field name={props.name}>
      {({ field, form }: FieldProps) => {
        return (
          <>
            <Box display="flex" alignItems="end">
              {extraLeft && <Typography mr={1}>{extraLeft}</Typography>}
              <FormControl fullWidth>
                <TextField
                  variant={variant ?? "outlined"}
                  multiline={multiline ?? multiline}
                  // maxRows={5}
                  rows={rows ?? rows}
                  sx={{
                    color: Colors.Black,
                    backgroundColor: backgroundColor ? "#D4D4E9" : "initial",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        // borderColor: field.value ? Colors.Black : "inherit",
                        border: "none",
                        boxShadow: !backgroundColor
                          ? `0px 0px 2px 1px ${Colors.TextGray}`
                          : "inherit",
                        // backgroundColor: backgroundColor
                        //   ? "#D4D4E9"
                        //   : "initial",
                        // color: backgroundColor ? Colors.Black : "red",
                      },
                    // "& .MuiInputBase-input-MuiOutlinedInput-input": {
                    //   color: "red",
                    //   backgroundColor:"red"
                    // },
                  }}
                  id={props.name}
                  {...props}
                  {...field}
                  label={props.label && props.placeholder}
                  onChange={(e) => handleChange(e, form)}
                  type={props.type ?? "text"}
                  error={
                    !!(form.errors[props.name] && form.touched[props.name])
                  }
                  inputProps={{
                    autoComplete: "off",
                    maxLength: maxLength,
                    ...props.inputProps,
                    // startAdornment: (
                    //   <InputAdornment position="start">
                    //     {startAdornment}
                    //   </InputAdornment>
                    // ),
                  }}
                />
              </FormControl>
              {extraRight && <Typography ml={1}>{extraRight}</Typography>}
            </Box>
            {showErrorMessage && (
              <ErrorMessage
                name={props.name}
                children={(error: string) => (
                  <InputErrorText errorText={error} />
                )}
              />
            )}
          </>
        );
      }}
    </Field>
  );
};

interface FormAllowProps {
  NUMBER: string;
}
export const FORM_ALLOWED: FormAllowProps = {
  NUMBER: "number",
};

export const UncontrolledInput: React.FC<InputProps> = (props) => {
  return (
    <FormControl fullWidth>
      <TextField
        variant="filled"
        disabled
        id={props.name}
        {...props}
        label={props.label && props.placeholder}
        type={props.type ?? "text"}
      />
    </FormControl>
  );
};
