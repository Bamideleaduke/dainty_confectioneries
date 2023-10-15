import React from "react";
import { Box, Typography } from "@mui/material";
import { data } from "../resources/Data";
import CupCakes from "../assets/cup-cakes.png";
import ProductItem from "../components/ProductItem";

const AllProducts: React.FC = () => {
  return (
    <>
      <Box
        component="img"
        src={CupCakes}
        alt="cup cakes"
        sx={{ width: "100%", marginTop: { xs: "3rem" } }}
      />
      <Box
        sx={{
          width: "90%",
          marginInline: "auto",
          margin: "3rem auto 6rem ",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
          SHOP BY CATEGORIES
        </Typography>

        <ProductItem data={data} />
      </Box>
    </>
  );
};

export default AllProducts;
