import { Box, SxProps, Theme } from "@mui/system";
import { Colors } from "../../../constants/colors";

type InputErrorTextProps = {
  errorText: string;
  sx?: SxProps<Theme>;
};
export const InputErrorText = ({ errorText, sx }: InputErrorTextProps) => {
  return <Box sx={{ color: "red", fontSize: "12px", ...sx }}>{errorText}</Box>;
};

export const InputSuccessText = ({ successText }: { successText: string }) => {
  return (
    <Box sx={{
      color: Colors.Success,
      fontSize: "12px"
    }}>{successText}</Box>
  );
};
