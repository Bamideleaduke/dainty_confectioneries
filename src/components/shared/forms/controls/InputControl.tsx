import React, { ReactNode } from "react";
import FormControlWrapper from "../FormControlWrapper";
import { ControlType, FormControlBase } from "../FormControl";
import { InputAdornment } from "@mui/material";

interface InputControlProps {
  name: string;
  label?: string;
  control?: ControlType;
  placeholder: string;
  helperText?: React.ReactNode;
  startAdornment?: ReactNode;
  maxLength?: number;
  number?: boolean;
  alphabet?: boolean;
  backgroundColor?: boolean;
  variant?: "outlined" | "standard" | "filled";
  multiline?: boolean;
  rows?: number;
}

const InputControl: React.FC<InputControlProps> = (props) => {
  return (
    <FormControlWrapper
      name={props.name}
      label={props.label}
      helperText={props.helperText}
    >
      <FormControlBase
        control={props.control ? props.control : "input"}
        name={props.name}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        backgroundColor={props.backgroundColor}
        multiline={props.multiline}
        rows={props.rows}
        // startAdornment={props.startAdornment}
        InputProps={{
          startAdornment: props.startAdornment ? (
            <InputAdornment position="start">
              {props.startAdornment}
            </InputAdornment>
          ) : (
            ""
          ),
        }}
        // {...(props.control === "input" ? { maxLength: props.maxLength } : {})}
        number={props.number}
        // variant={props.control === "input" && props.variant}
        alphabet={props.alphabet}
      />
    </FormControlWrapper>
  );
};

export default InputControl;
