import React from 'react';
import { Switch, SwitchProps } from './Switch';
import { SelectInput, SelectProps } from './Select';
import { RadioGroup, RadioGroupProps } from './Radio';
import { CheckBoxGroup, CheckBoxGroupProps } from './CheckBoxGroup';
import { Input, InputProps } from './Input';
import { Telephone, TelephoneProps } from './Telephone';

export type ControlType =
  | 'input'
  | 'select'
  | 'switch'
  | 'checkboxGroup'
  | 'radio'
  | 'autocomplete'
  | 'telephone'
  | 'otp';

export type FormControlBaseProp<Control extends ControlType = ControlType> =
  (Control extends 'switch'
    ? SwitchProps
    : Control extends 'select'
    ? SelectProps
    : Control extends 'radio'
    ? RadioGroupProps
    : Control extends 'checkboxGroup'
    ? CheckBoxGroupProps
    : Control extends 'telephone'
    ? TelephoneProps
    : InputProps) & { control: Control; children?: React.ReactNode };

export const FormControlBase: React.FC<FormControlBaseProp> = ({
  control,
  children,
  ...props
}) => {
  switch (control) {
    case 'select':
      return <SelectInput children={children} {...(props as SelectProps)} />;
    case 'switch':
      return <Switch {...(props as SwitchProps)} />;
    case 'radio':
      return <RadioGroup {...(props as RadioGroupProps)} />;
    case 'checkboxGroup':
      return <CheckBoxGroup {...(props as CheckBoxGroupProps)} />;
    case 'telephone':
      return <Telephone {...(props as TelephoneProps)} />;
    default:
      return <Input {...(props as InputProps)} />;
  }
};
