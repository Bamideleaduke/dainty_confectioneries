import { useState } from "react";
import { InputAdornment } from "@mui/material";
import { FormControlBase } from "../FormControl";
import FormControlWrapper from "../FormControlWrapper";
import {
  LockIcon,
  VisibilityOn,
  VisiblityOff,
} from "../../../../assets/icons/Icons";

interface PasswordControlProps {
  name: string;
  label?: string;
  placeholder?: string;
  extraRight?: string;
  helperText?: React.ReactNode;
  maxLength: number;
  number?: boolean;
  backgroundColor?: boolean;
}
export const PasswordControl: React.FC<PasswordControlProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControlWrapper
      name={props.name}
      label={props.label}
      helperText={props.helperText}
    >
      <FormControlBase
        control="input"
        name={props.name}
        number={props.number}
        type={showPassword ? "text" : "password"}
        maxLength={props.maxLength}
        backgroundColor={props.backgroundColor}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ pr: 2, cursor: "pointer" }}
              onClick={handleTogglePassword}
            >
              {showPassword ? <VisibilityOn /> : <VisiblityOff />}
            </InputAdornment>
          ),
        }}
        placeholder={props.placeholder ?? "Enter your password"}
      />
    </FormControlWrapper>
  );
};
