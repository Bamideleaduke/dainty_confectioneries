import {
  styled,
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
  FormControl,
} from "@mui/material";
import { Field, FieldProps, ErrorMessage } from "formik";
import { InputErrorText } from "../forms/InputFieldError";
import { Colors } from "../../../constants/colors";

export const StyledSwitch = styled(MuiSwitch)(() => {
  return {
    width: 36,
    height: 21,
    padding: 0,
    ".MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          background: Colors.Black,
          opacity: 1,
        },
      },
    },
    ".MuiSwitch-thumb": {
      width: 17,
      height: 17,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      "&::after": {
        width: "calc(100% + 1px)",
        height: "calc(100% + 1px)",
        zIndex: -1,
        background: Colors.Black,
        position: "absolute",
        content: '""',
        borderRadius: "100%",
      },
    },
    ".MuiSwitch-track": {
      borderRadius: 21 / 2,
      backgroundColor: "white",
      border: "1px solid brown",
    },
  };
});

export interface SwitchProps extends MuiSwitchProps {
  name: string;
  padding?: string;
}

export const Switch: React.FC<SwitchProps> = ({ onChange, ...props }) => {
  return (
    <Field name={props.name}>
      {({ field }: FieldProps) => {
        return (
          <>
            <FormControl fullWidth>
              <StyledSwitch
                {...props}
                {...field}
                checked={
                  props?.value ??
                  props?.checked ??
                  field.checked ??
                  field.value ??
                  false
                }
                value={
                  props?.value ??
                  props?.checked ??
                  field.checked ??
                  field.value ??
                  false
                }
                onChange={(e) => {
                  field.onChange?.(e);
                  onChange?.(e, e.target.checked);
                }}
                inputProps={{ id: props.name }}
              />
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
