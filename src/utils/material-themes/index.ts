import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { InputBaseTheme, InputTheme } from "./mui-input";
import { MenuItemThem } from "./mui-menu-item";
import { MenuTheme } from "./mui-menu";
import { TooltipTheme } from "./mui-tooltip";
import { CheckBoxTheme } from "./mui-checkbox";
import { RadioTheme } from "./mui-radio";
import { Colors } from "../../constants/colors";

const materialTheme = createTheme();

export const GlobalTheme = createTheme(
  deepmerge(materialTheme, {
    typography: {
      fontSize: 16,
      h1: {
        fontWeight: 700,
        fontSize: materialTheme.typography.pxToRem(38),
        lineHeight: materialTheme.typography.pxToRem(48),
      },
      h2: {
        fontWeight: 700,
        fontSize: materialTheme.typography.pxToRem(34),
        lineHeight: materialTheme.typography.pxToRem(43),
      },
      h3: {
        fontWeight: 700,
        fontSize: materialTheme.typography.pxToRem(28),
        lineHeight: materialTheme.typography.pxToRem(38),
      },
      h4: {
        fontWeight: 700,
        fontSize: materialTheme.typography.pxToRem(24),
        lineHeight: materialTheme.typography.pxToRem(28),
      },
      h5: {
        fontWeight: 600,
        fontSize: materialTheme.typography.pxToRem(20),
        lineHeight: materialTheme.typography.pxToRem(24),
      },
      body1: {
        fontWeight: 500,
        fontSize: materialTheme.typography.pxToRem(16),
      },
      body2: {
        fontWeight: 400,
        fontSize: materialTheme.typography.pxToRem(14),
      },
      caption: {
        fontWeight: 400,
        fontSize: materialTheme.typography.pxToRem(12),
      },
      fontFamily: [
        "Poppins",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ].join(","),
    },
    palette: {
      primary: {
        main: Colors.Black,
      },
      secondary: {},
      text: { primary: Colors.TextGray },
      success: {
        main: Colors.Success,
      },
      gray: {},
      info: {
        main: Colors.Info,
      },
    },
    components: {
      MuiInput: InputTheme,
      MuiMenuItem: MenuItemThem,
      MuiMenu: MenuTheme,
      MuiTooltip: TooltipTheme,
      MuiCheckbox: CheckBoxTheme,
      MuiRadio: RadioTheme,
      MuiInputBase: InputBaseTheme,
      MuiCssBaseline: {
        styleOverrides: {
          ".fancy-scrollbar": {
            "&::-webkit-scrollbar-thumb": {
              background: Colors.Black,
              borderRadius: 10,
            },
            "::-webkit-scrollbar": { width: 5 },
          },
        },
      },
    },
  })
);
