import React from 'react';
import FormControlWrapper from '../FormControlWrapper';
import { ControlType, FormControlBase } from '../FormControl';

interface InputControlProps {
  name: string;
  label: string;
  control?: ControlType;
  placeholder?: string;
  helperText?: React.ReactNode;
  maxLength?: number;
  number?: boolean;
  alphabet?: boolean;
}

const InputControl: React.FC<InputControlProps> = (props) => {
  return (
    <FormControlWrapper
      name={props.name}
      label={props.label}
      helperText={props.helperText}
    >
      <FormControlBase
        control={props.control ? props.control : 'input'}
        name={props.name}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        number={props.number}
        alphabet={props.alphabet}
      />
    </FormControlWrapper>
  );
};

export default InputControl;
