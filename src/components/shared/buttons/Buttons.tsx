/* eslint-disable react/display-name */
import React from "react";
import { Box, ButtonProps, Button as MuiButton, styled } from "@mui/material";
import { Colors } from "../../../constants/colors";

const StyledButton = styled(MuiButton)(({ variant, size }) => ({
  borderRadius: "7px",
  padding: "8px 40px",
  textTransform: "none",
  fontWeight: "500",
  fontSize: "0.9rem",

  //   boxShadow: "4px 4px 6px 0px rgba(236, 126, 129, 0.50)",
  "&.MuiButton-containedPrimary": {
    background: Colors.Primary,

    ":hover": {
      background: Colors.Primary,
    },
    // border: "1px solid var(--shite-space, #FFF)",
  },
  "&.Mui-disabled": {
    color: Colors.Grundge,
    background: Colors.TextGray,
    border: "1px solid var(--shite-space, #FFF)",
  },
  ...(variant === "text" && {
    padding: "2px 16px",
    boxShadow: "unset",
    fontSize: "0.8rem",
    // fontWeight: 600,
  }),
  ...(variant === "outlined" && {
    border: `2px solid ${Colors.Primary}`,
    color: Colors.Primary,
    "&:hover": {
      border: `2px solid ${Colors.Primary}`,
      color: Colors.Primary,
    },
  }),
  ...(size === "small" && {
    padding: "4px 30px",
  }),
}));

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, color, ...restProp }, ref) => {
    return (
      <Box>
        <StyledButton
          color={color}
          variant={variant ?? "contained"}
          size={size ?? "medium"}
          ref={ref}
          {...restProp}
        />
      </Box>
    );
  }
);
