import React from 'react';
import { FormControl, TextFieldProps } from '@mui/material';
// import { MuiTelInput } from 'mui-tel-input';
import { Field, FieldProps } from 'formik';
import { InputErrorText } from './InputFieldError';

export type TelephoneProps = TextFieldProps & {
  name: string;
  showErrorMessage?: boolean;
  maxLength: number;
};

export const Telephone: React.FC<TelephoneProps> = ({
  maxLength,
  ...props
}) => {
  const handleChange = (form: FieldProps['form'], newValue: string) => {
    form.setFieldValue(props.name, newValue);
  };

  return (
    <>
      <Field name={props.name}>
        {({ field, form }: FieldProps) => {
          return (
            <>
              <FormControl
                fullWidth
                sx={{
                  '& .MuiIconButton-root': { paddingLeft: '12px' },
                  '& input': { paddingLeft: '0px !important' },
                }}
              >
                {/* <MuiTelInput
                  fullWidth
                  defaultCountry="NG"
                  disableDropdown
                  id={props.name}
                  label={props.label && props.placeholder}
                  value={field.value}
                  onChange={(value) => handleChange(form, value)}
                  placeholder={props.placeholder}
                  error={!!form.errors[props.name]}
                  inputProps={{
                    autoComplete: 'off',
                    maxLength: maxLength,
                    ...props.inputProps,
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                      {
                        borderColor: field.value ? Colors.Primary : 'inherit',
                        boxShadow: field.value
                          ? '0px 0px 4px 2px #EC7E8140'
                          : 'inherit',
                      },
                  }}
                /> */}
              </FormControl>
              <InputErrorText errorText={form.errors[props.name] as string} />
            </>
          );
        }}
      </Field>
    </>
  );
};
