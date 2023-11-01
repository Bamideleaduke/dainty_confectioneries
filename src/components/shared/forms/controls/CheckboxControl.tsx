import { FormControlBase } from "../FormControl";
import FormControlWrapper from "../FormControlWrapper";

interface CheckboxProps {
  name: string;
  label: string;
  placeholder?: string;
  options: string[];
  oneOption?: boolean;
  maxLength: number;
  initialValue?: string | null;
  flex?: boolean;
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
        oneOption={props.oneOption}
        initialValue={props.initialValue}
        flex={props.flex}
      />
    </FormControlWrapper>
  );
};

export default CheckboxControl;
