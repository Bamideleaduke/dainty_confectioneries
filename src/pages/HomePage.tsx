import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Description from "../components/Description";
const HomePage = () => {
  const theme = useTheme();
  return (
    <Box>
      {/* <Box
        sx={
          {
            // color: theme.palette.secondary.main
          }
        }
      > */}
      <Navbar />
      <Hero />
      <Description />
      <Products />
      {/* </Box> */}
    </Box>
  );
};

export default HomePage;
