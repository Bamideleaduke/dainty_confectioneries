import {
  FormControl,
  Select,
  SelectProps as MuiSelectProps,
  styled,
  MenuItem,
} from "@mui/material";
import { Field, ErrorMessage, FieldProps } from "formik";
import { InputErrorText } from "../forms/InputFieldError";
import { Colors } from "../../../constants/colors";

const StyledSelect = styled(Select)(({ value }) => ({
  "& .MuiOutlinedInput-input": { padding: "10px 15px" },
  "& .MuiSelect-icon": { fontSize: "30px" },
  "& fieldset": {
    borderColor: value ? `${Colors.Black} !important` : "inherit",
    boxShadow: value ? "0px 0px 4px 2px #EC7E8140" : "inherit",
  },
}));
export interface OptionProp {
  key: string;
  value: string;
}
export interface SelectProps extends MuiSelectProps {
  name: string;
  padding?: string;
  options: OptionProp[];
  placeholder: string;
}

export const SelectInput: React.FC<SelectProps> = ({
  options,
  placeholder,
  ...props
}) => {
  return (
    <Field name={props.name}>
      {({ field, form }: FieldProps) => {
        return (
          <>
            <FormControl fullWidth>
              <StyledSelect
                {...props}
                {...field}
                onChange={(event) => {
                  props?.onChange?.(event, props.children);
                  field?.onChange?.(event);
                }}
                value={field.value ?? ""}
                defaultValue={props.defaultValue ?? ""}
                displayEmpty
                inputProps={{ id: props.name }}
                error={!!(form.errors[props.name] && form.touched[props.name])}
                renderValue={(value: unknown) =>
                  value ? (
                    (value as string)
                  ) : (
                    <SelectPlaceholder text={placeholder} />
                  )
                }
              >
                {options.map((option,index) => (
                  <MenuItem value={option.value} key={option.value}  disabled={index === 0} >
                    {option.key}
                  </MenuItem>
                ))}
              </StyledSelect>
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

interface PlaceholderProp {
  text: string;
}

export const SelectPlaceholder: React.FC<PlaceholderProp> = ({ text }) => {
  return <span style={{ color: "lightgrey" }}>{text}</span>;
};
