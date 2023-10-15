// import { MuiOtpInput } from 'mui-one-time-password-input';
import React from "react";
import { numberRegex } from "./Input";
import { useFormikContext } from "formik";
import { Colors } from "../../../constants/colors";
import { Box } from "@mui/material";

export const OTPInput: React.FC<{ value: string; name: string }> = ({
  value,
  name,
}) => {
  const { setFieldValue } = useFormikContext();
  return (
    <Box>
      {/* <MuiOtpInput
        value={value}
        onChange={(value) => {
          const input = value?.replace(numberRegex, '');
          setFieldValue(name, input);
        }}
        length={4}
        autoFocus
        sx={{
          maxWidth: '250px',
          margin: 'auto',
          '& fieldset': {
            borderColor: value ? `${Colors.Primary} !important` : 'inherit',
            boxShadow: value ? '0px 0px 4px 2px #EC7E8140' : 'inherit',
          },
        }}
      /> */}
    </Box>
  );
};
