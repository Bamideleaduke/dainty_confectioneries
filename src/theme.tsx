import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#f2dee7",
//       // light: will be calculated from palette.primary.main,
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     secondary: {
//       main: "#E0C2FF",
//       light: "#F5EBFF",
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: "#47008F",
//     },
//   },
// });

const mainBlack = "#231F20";
const apricot = "#ec7e81";
let theme = createTheme({
  palette: {
    primary: {
      main: `${mainBlack}`,
    },
    secondary: {
      main: `${apricot}`,
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 12,
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light", // Set the theme mode to light
    primary: {
      main: "#f2dee7",
    },
    secondary: {
      main: "#E0C2FF",
    },
    // Other palette options...
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark", // Set the theme mode to dark
    primary: {
      main: "#123456", // Adjust the colors for dark mode
    },
    secondary: {
      main: "#789abc", // Adjust the colors for dark mode
    },
    // Other palette options...
  },
});

export { lightTheme, darkTheme, theme };
