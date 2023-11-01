import {
  Box,
  Grid,
  InputLabel,
  InputLabelProps,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import React from "react";
import { StatusIndicator } from "./StatusIndicator";
import { Colors } from "../../../constants/colors";

export interface WrapperProps extends InputLabelProps {
  name: string;
  label?: React.ReactNode;
  labelDescription?: string;
  children: React.ReactNode;
  layout?: "vertical" | "horizontal";
  layoutFlexGrid?: number[];
  layoutStyles?: SxProps<Theme>;
  helperText?: React.ReactNode;
}

const FormControlWrapper: React.FC<WrapperProps> = (props) => {
  return (
    <Grid container sx={{ mb: 3, ...props.sx }}>
      {props.label && (
        <Grid
          item
          xs={12}
          // xs={
          //   props.layout == 'horizontal' ? props.layoutFlexGrid?.[0] ?? 4 : 12
          // }
        >
          <Box display="flex">
            <InputLabel
              htmlFor={props.name}
              sx={{
                fontWeight: "500",
                whiteSpace: "normal",
                color: "inherit",
              }}
            >
              {props.label}
            </InputLabel>
            {props.required && <StatusIndicator />}
          </Box>
          {props.labelDescription && (
            <Typography sx={{ fontSize: "14px", color: Colors.TextGray }}>
              {props.labelDescription}
            </Typography>
          )}
        </Grid>
      )}
      <Grid
        item
        xs={12}
        // xs={props.layout == 'horizontal' ? props.layoutFlexGrid?.[1] ?? 8 : 12}
      >
        {props.children}
        {props.helperText}
      </Grid>
    </Grid>
  );
};
export default FormControlWrapper;
