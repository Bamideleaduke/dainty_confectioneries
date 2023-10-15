import React from "react";
import { FormControlBase } from "../FormControl";
import FormControlWrapper from "../FormControlWrapper";
import { OptionProp } from "../Select";

interface InputControlProps {
  name: string;
  label: string;
  placeholder?: string;
  options: OptionProp[];
}
const SelectControl: React.FC<InputControlProps> = (props) => {
  return (
    <FormControlWrapper name={props.name} label={props.label}>
      <FormControlBase
        control="select"
        name={props.name}
        placeholder={props.placeholder}
        options={props.options}
      />
    </FormControlWrapper>
  );
};

export default SelectControl;
