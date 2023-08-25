import React from "react";
import "./App.css";
import { Box, ThemeProvider } from "@mui/material";
import AppRoutes from "./utils/AppRoutes";
import { theme } from "./theme";
function App() {
  console.log(theme.palette.secondary.main);
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Box>
          <AppRoutes />
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
