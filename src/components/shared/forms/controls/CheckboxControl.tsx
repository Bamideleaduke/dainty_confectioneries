import { FormControlBase } from "../FormControl";
import FormControlWrapper from "../FormControlWrapper";

interface CheckboxProps {
  name: string;
  label: string;
  placeholder?: string;
  options: string[];
  maxLength: number;
}
const CheckboxControl: React.FC<CheckboxProps> = (props) => {
  return (
    <FormControlWrapper name={props.name} label={props.label}>
      <FormControlBase
        control="checkboxGroup"
        name={props.name}
        placeholder={props.placeholder}
        options={props.options}
        maxLength={props.maxLength}
      />
    </FormControlWrapper>
  );
};

export default CheckboxControl;
