import {
  FormGroupProps as MuiFormGroupProps,
  FormControl,
  FormControlLabel,
  FormGroup,
  Box,
} from "@mui/material";
import { Field, FieldProps, ErrorMessage } from "formik";
import { InputErrorText } from "../forms/InputFieldError";
import React from "react";
import Checkbox from "./Checkbox";
import { Colors } from "../../../constants/colors";

export interface CheckBoxGroupProps extends MuiFormGroupProps {
  name: string;
  options: string[];
  maxLength: number;
  oneOption?: boolean;
  initialValue?: string | null;
  actionComp?: React.ReactNode[];
  flex?: boolean;
  // onChange?: (value: string | null) => void;
}

export const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
  actionComp,
  options,
  maxLength,
  oneOption,
  initialValue,
  flex,
  // onChange,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string | null>(
    oneOption ? (initialValue !== undefined ? initialValue : null) : null
  );

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    form: FieldProps["form"]
  ) => {
    const { value, checked } = event.target;
    if (oneOption) {
      if (checked) {
        setSelectedValue(value);
      } else {
        setSelectedValue(null);
        // form.setFieldValue(props.name, null);
      }
      form.setFieldValue(props.name, checked ? value : null);
    } else {
      const currentSelectedValues = form.values[props.name] || [];
      if (checked) {
        if (currentSelectedValues.length < maxLength) {
          form.setFieldValue(props.name, [...currentSelectedValues, value]);
        } else {
          event.preventDefault();
        }
      } else {
        form.setFieldValue(
          props.name,
          currentSelectedValues.filter((v: any) => v !== value)
        );
      }
    }

    form.handleChange(event.target.value);
  };

  return (
    <Field name={props.name}>
      {({ field, form }: FieldProps) => {
        return (
          <>
            <FormControl fullWidth>
              <FormGroup
                {...props}
                {...field}
                id={form.values[props.name]}
                sx={{
                  display: flex ? "flex" : "initial",
                  flexDirection: "row",
                }}
              >
                {options.map((option) => {
                  return (
                    <Box key={option}>
                      <FormControlLabel
                        sx={{ mb: 1 }}
                        value={option}
                        control={
                          <Checkbox
                            name={props.name}
                            sx={{ mr: 1, color: Colors.Primary }}
                            onChange={(e) => {
                    
                              handleCheckboxChange(e, form);
                            }}
                            value={option}
                            inputProps={{
                              maxLength: maxLength,
                            }}
                            checked={
                              oneOption
                                ? selectedValue === option
                                : form.values[props.name]?.includes(option) ||
                                  false
                            }
                          />
                        }
                        label={option}
                      />
                    </Box>
                  );
                })}
              </FormGroup>

              <ErrorMessage
                name={props.name}
                children={(error: string) => (
                  <InputErrorText errorText={error} />
                )}
              />
            </FormControl>
          </>
        );
      }}
    </Field>
  );
};
